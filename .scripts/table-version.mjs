import { Octokit } from '@octokit/rest';
import semver from 'semver';
import fs from 'fs/promises';

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
});

const tableLines = [];
const columnSizes = [];
const startBlock = '<!-- VERSIONS TABLE -->';
const endBlock = '<!-- END VERSIONS TABLE -->';
const filePath = './resources/get-support/enterprise-support/README.md';

function addLine(...args) {
	args.forEach((arg, index) => {
		const size = String(arg).trim().length;
		columnSizes[index] = size > columnSizes[index] || columnSizes[index] == null ? size : columnSizes[index];
	});
	tableLines.push(args);
}

async function generateTable({ owner, repo } = {}) {
	const releasesResult = await octokit.paginate(octokit.repos.listReleases.endpoint.merge({ owner, repo, per_page: 100 }));

	const releases = releasesResult
		.filter((release) => !release.tag_name.includes('-rc') && semver.gte(release.tag_name, '1.0.0'))
		.sort((a, b) => semver.compare(b.tag_name, a.tag_name));

	const releasesMap = {};

	for (const release of releases) {
		releasesMap[release.tag_name] = release;
	}

	let index = 0;
	// eslint-disable-next-line no-constant-condition
	while (true) {
		const release = releases[index];
		if (!releases[index + 1]) {
			break;
		}

		const currentVersion = semver.parse(release.tag_name);
		const nextVersion = semver.parse(releases[index + 1].tag_name);

		if (currentVersion.major === nextVersion.major && currentVersion.minor === nextVersion.minor) {
			releases.splice(index + 1, 1);
			continue;
		}

		if (currentVersion.major !== nextVersion.major) {
			releases[index + 1].lts = true;
		}

		index++;
	}

	releases[0].last = true;

	addLine('Rocket.Chat Release', 'Latest Version', 'Released At', 'End of Life');
	addLine('-------------------', '--------------', '----------:', '----------:');

	for (const { tag_name, html_url, lts, last } of releases) {
		const minor = tag_name.replace(/\.\d+$/, '');
		const releaseDate = new Date(releasesMap[`${minor}.0`].published_at);
		if (releaseDate.getDate() < 20) {
			releaseDate.setMonth(releaseDate.getMonth() - 1);
		}
		const supportDate = new Date(releaseDate);
		supportDate.setMonth(supportDate.getMonth() + (lts ? 6 : 3));

		const release = `${lts ? '**' : ''}${minor}${lts ? ' \\(LTS\\)**' : ''}`;
		const url = `[${tag_name}](${html_url})`;
		const releasedAt = `${lts ? '**' : ''}${releaseDate.toLocaleString('en', { month: 'short' })} ${releaseDate.getFullYear()}${
			lts ? '**' : ''
		}`;
		const endOfLife = last
			? 'TBD'
			: `${lts ? '**' : ''}${supportDate.toLocaleString('en', { month: 'short' })} ${supportDate.getFullYear()}${lts ? '**' : ''}`;

		addLine(release, url, releasedAt, endOfLife);
		releaseDate.setMonth(releaseDate.getMonth() + 1);
	}

	const text = [startBlock];
	for (const line of tableLines) {
		const columns = line.map((col, index) => String(col).padEnd(columnSizes[index] || 0, ' '));
		text.push(`| ${columns[0]} | ${columns[1]} | ${columns[2]} | ${columns[3]} |`);
	}
	text.push(endBlock);

	const file = (await fs.readFile(filePath)).toString();
	await fs.writeFile(filePath, file.replace(new RegExp(`${startBlock}.+${endBlock}`, 'gs'), text.join('\n')));

	// console.log(text.join('\n'));
}

generateTable({ owner: 'RocketChat', repo: 'Rocket.Chat' });
