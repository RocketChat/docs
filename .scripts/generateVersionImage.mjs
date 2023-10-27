import Fs from 'fs';
import * as D3 from 'd3';
import D3Node from 'd3-node';
import Svg2png from 'svg2png';

const styles = `
.latest {
	fill: #FFD031;
	stroke: #FFD031;
	fill-opacity: 0.5;
	stroke-width: 2;
	stroke-dasharray: 2,2;
}
.active {
	fill: #96F0D2;
}
.maintenance {
	fill: #2DE0A5;
}
.active-lts {
	fill: #F98F9D;
}
.maintenance-lts {
	fill: #F5455C;
}
.label {
	fill: #fff;
	font: 18px arial;
	font-weight: 100;
	dominant-baseline: middle;
}
.label-lts {

}
.label-latest {

}
.label-version {
	fill: #cecece;
}
.tick text {
	font: 12px arial;
	fill: #cecece;
}
.tick line {
	stroke: #cecece;
	stroke-dasharray: 4,4;
}
.background {
	fill: #1D74F5;
}
`;


export function create(data, options = {}) {
	let { queryStart, queryEnd, png = './releases-support.png' } = options;
	if (!queryStart) {
		queryStart = new Date();
		queryStart.setMonth(queryStart.getMonth() - 12);
	}
	if (!queryEnd) {
		queryEnd = new Date();
	}

	data = data.filter((item) => !item.release.extendedSupport || item.release.extendedSupport.end > queryStart);
	data.forEach((item) => {
		item.support = !item.release.extendedSupport ? 'TBD' : (item.release.lts ? '6 months' : '6 months')
		if (item.release.extendedSupport?.end > queryEnd) {
			queryEnd = item.release.extendedSupport.end;
		}
	});
	data.reverse();

	const d3n = new D3Node({ styles: styles, d3Module: D3 });
	const margin = { top: 40, right: 50, bottom: 20, left: 50 };
	const width = 960 - margin.left - margin.right;
	const height = 500 - margin.top - margin.bottom;

	const xScale = D3.scaleTime()
		.domain([queryStart, queryEnd])
		.range([0, width])
		.clamp(true);
	const yScale = D3.scaleBand()
		.domain(data.map((data) => { return data.release.version; }))
		.range([0, height])
		.padding(0.3);
	const xAxis = D3.axisBottom(xScale)
		.tickSize(height)
		.tickFormat(D3.timeFormat('%b %y'));
	const yAxis = D3.axisRight(yScale).tickSize(width);
	const baseSvg = d3n.createSVG()
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom);

	baseSvg.append('rect')
		.attr('class', 'background')
		.attr('width', '100%')
		.attr('height', '100%');

	const svg = baseSvg.append('g')
		.attr('id', 'bar-container')
		.attr('transform', `translate(${margin.left}, ${margin.top})`)

	function calculateWidth(data) {
		return xScale(data.release.extendedSupport?.end || queryEnd) - xScale(data.release.releasedAt);
	}

	function calculateHeight(data) {
		return yScale.bandwidth();
	}

	function customXAxis(g) {
		g.call(xAxis);
		g.select('.domain').remove();
		g.selectAll('.tick text').attr('y', -20);
	}

	function customYAxis(g) {
		g.call(yAxis);
		g.select('.domain').remove();
		g.selectAll('.tick').remove();
	}

	svg.append('g')
		.call(customXAxis);

	svg.append('g')
		.call(customYAxis);

	const bar = svg.selectAll('#bar-container').data(data).enter().append('g');

	bar.append('rect')
		.attr('rx', 6)
		.attr('class', (data) => { return `bar ${data.release.extendedSupport ? (data.release.lts ? 'active-lts' : 'active') : 'latest'}`; })
		.attr('x', (data) => { return xScale(data.release.releasedAt); })
		.attr('y', (data) => { return yScale(data.release.version); })
		.attr('width', (data) => {return xScale((data.release.extendedSupport?.end || queryEnd)) - xScale(data.release.releasedAt)})
		.attr('height', (data) => calculateHeight(data));

	bar.append('rect')
		.attr('rx', 6)
		.attr('class', (data) => { return `bar ${data.release.extendedSupport ? (data.release.lts ? 'maintenance-lts' : 'maintenance') : ''}`; })
		.attr('x', (data) => { return data.release.extendedSupport?.start <= queryStart ? 0 : xScale(data.release.extendedSupport?.start) + 3; })
		.attr('y', (data) => { return yScale(data.release.version) + 3; })
		.attr('width', (data) => { return xScale(data.release.extendedSupport?.end || queryEnd) - xScale(data.release.extendedSupport?.start) - (data.release.extendedSupport?.start <= queryStart ? 3 : 6)})
		.attr('height', (data) => calculateHeight(data) - 6);

	bar.append('text')
		.attr('class', 'label label-version')
		.attr('x', (data) => {
			return xScale(data.release.releasedAt) - (data.release.version.length * 10);
		})
		.attr('y', (data) => {
			return yScale(data.release.version) + (calculateHeight(data)/2) + 1;
		})
		.text((data) => { return data.release.version })

	bar.append('text')
		.attr('class', (data) => { return `bar label ${data.release.extendedSupport ? (data.release.lts ? 'label-lts' : '') : 'label-latest'}`; })
		.attr('x', (data) => {
			return xScale(data.release.extendedSupport?.start || data.release.releasedAt) + 10;
		})
		.attr('y', (data) => {
			// + 2 is a small correction so the text fill is more centered.
			return yScale(data.release.version) + (calculateHeight(data) / 2) + 2;
		})
		.text((data) => { return data.support; })
		.style('opacity', (data) => {
			// Hack to deal with overflow text.
			const min = data.support.length * 10;
			return +(calculateWidth(data) >= min);
		});

	// if (typeof svgFile === 'string') {
	// 	Fs.writeFileSync(svgFile, d3n.svgString());
	// }

	if (typeof png === 'string') {
		Fs.writeFileSync(png, Svg2png.sync(Buffer.from(d3n.svgString())));
	}
}