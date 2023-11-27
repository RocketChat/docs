import 'colors';
import { Octokit } from '@octokit/rest';
import * as Diff from 'diff';
import semver from 'semver';
import fs from 'fs/promises';
import { create } from './generateVersionImage.mjs';

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
});

const tableLines = [];
const columnSizes = [];
const filePath = './resources/rocket.chats-support-structure/enterprise-support-and-version-durability/README.md';

function addLine(...args) {
	args.forEach((arg, index) => {
		const size = String(arg).trim().length;
		columnSizes[index] = size > columnSizes[index] || columnSizes[index] == null ? size : columnSizes[index];
	});
	tableLines.push(args);
}

async function generateTable({ owner, repo } = {}) {
	// const releasesResult = JSON.parse(await fs.readFile('/tmp/releasesResult'));

	const releasesResult = await octokit.paginate(octokit.repos.listReleases.endpoint.merge({ owner, repo, per_page: 100 }));
	// await fs.writeFile('/tmp/releasesResult', JSON.stringify(releasesResult));

	const releases = releasesResult
		.filter((release) => !release.tag_name.includes('-rc') && semver.gte(release.tag_name, '1.0.0'))
		.sort((a, b) => semver.compare(b.tag_name, a.tag_name));

	const releasesMap = {};

	for (const release of releases) {
		release.releaseDate = new Date(release.published_at);

		// If release happened before 20th we consider it from the past month
		if (release.releaseDate.getDate() < 20) {
			release.releaseDate.setMonth(release.releaseDate.getMonth() - 1);
		}

		releasesMap[release.tag_name] = release;
	}

	let index = 0;
	// eslint-disable-next-line no-constant-condition
	while (true) {
		const release = releases[index];

		release.minor_tag = release.tag_name.replace(/\.\d+$/, '');
		release.minorRelease = releasesMap[`${release.minor_tag}.0`];

		if (!releases[index + 1]) {
			break;
		}

		const currentVersion = semver.parse(release.tag_name);
		const previousVersion = semver.parse(releases[index + 1].tag_name);

		releases[index + 1].nextRelease = release;

		// Remove duplicated due to patches
		if (currentVersion.major === previousVersion.major && currentVersion.minor === previousVersion.minor) {
			releases.splice(index + 1, 1);
			continue;
		}

		// Previous version changed major so it's LTS
		// if (currentVersion.major !== previousVersion.major) {
		// 	releases[index + 1].lts = true;
		// }

		index++;
	}

	releases[0].last = true;

	const releaseData = [];

	for (const { tag_name, html_url, lts, last, nextRelease, minorRelease, minor_tag} of releases) {
		let supportDate;
		let supportDateStart;

		let releasedAt = new Date(minorRelease.releaseDate);
		releasedAt.setDate(1);

		// if (nextRelease) {
		let minorDate = new Date(minorRelease.releaseDate);
		minorDate.setDate(1);
		supportDateStart = minorDate;
		supportDate = new Date(minorDate);
		supportDate.setMonth(supportDate.getMonth() + (lts ? 6 : 6));
		// }


		releaseData.push({
			release: {
				version: minor_tag,
				releasedAt,
				// extendedSupport: !last && {
				extendedSupport: {
					start: supportDateStart,
					end: supportDate,
				},
				lts: lts === true,
			},
			latestPatch: {
				version: tag_name,
				url: html_url,
			}
		})
	}

	addLine('Rocket.Chat Release', ' Released At', ' End of Life');
	addLine('-------------------', '-----------:', '-----------:');

	releaseData.forEach(({release, latestPatch}) => {
		const url = `[${latestPatch.version}](${latestPatch.url})`;
		const releasedAt = release.releasedAt.toLocaleString('en', { month: 'short', year: "numeric" });
		const endOfLife = !release.extendedSupport
			? 'TBD'
			: release.extendedSupport.end.toLocaleString('en', { month: 'short', year: "numeric" });

		// if (release.lts) {
		// 	addLine(`**${release.version} (LTS)**`, url, `**${releasedAt}**`, `**${endOfLife}**`);
		// } else {
		addLine(`${release.version} (${url})`, releasedAt, endOfLife);
		// }
	});

	// Create SVG
	create(releaseData);

	const text = [];
	for (const line of tableLines) {
		const columns = line.map((col, index) => String(col)[index < 2 ? 'padEnd' : 'padStart'](columnSizes[index] || 0, ' '));
		text.push(`| ${columns[0]} | ${columns[1]} | ${columns[2]} |`);
	}

	const file = (await fs.readFile(filePath)).toString();

	const reg = /\| Rocket\.Chat Release \| .+(\n\|.+)*/m;

	const oldTable = file.match(reg)[0];

	const diff = Diff.diffLines(oldTable, text.join('\n'), { ignoreWhitespace: true, newlineIsToken: false });
	diff.forEach((item) => {
		let color = 'green';

		if (item.removed) {
			color = 'red';
		}

		if (item.removed || item.added) {
			item.value.split('\n').forEach((line) => {
				if (line === '') { return };
				console.log(`${item.removed ? '-' : '+'} ${line}`[color]);
			})
		}
	});
	if (diff.length === 1) {
		console.log('No changes found');
	}

	await fs.writeFile(filePath, file.replace(reg, text.join('\n')));

	// console.log(text.join('\n'));
}

generateTable({ owner: 'RocketChat', repo: 'Rocket.Chat' });
