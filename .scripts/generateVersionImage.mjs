import Fs from 'fs';
import * as D3 from 'd3';
import D3Node from 'd3-node';
import Svg2png from 'svg2png';

const styles = `
.current {
	fill: #fbcd94;
}
.active {
	fill: #a5eb9a;
	stroke: #73BF67;
}
.active-lts {
	fill: #e69090;
}
.maintenance {
	fill: #73BF67;
}
.lts {
	fill: #BF6767;
}
.tick text {
	font: 14px sans-serif;
	fill: #89a19d;
}
.axis--y .tick text {
	text-anchor: end;
}
.label {
	fill: #305d2a;
	font: 18px sans-serif;
	font-weight: 100;
	text-anchor: start;
	dominant-baseline: middle;
	text-transform: uppercase;
}
.label-lts {
	fill: #693030;
}
.label-current {
	fill: #6d491b;
}
#bar-container {
	background-color: red;
}
`;


export function create(data, options = {}) {
	let { queryStart, queryEnd, html, svg: svgFile, png = './releases-support.png', animate, excludeMaster, projectName, margin: marginInput } = options;
	if (!queryStart) {
		queryStart = new Date();
		queryStart.setMonth(queryStart.getMonth() - 12);
	}
	if (!queryEnd) {
		queryEnd = new Date();
	}

	data = data.filter((item) => !item.release.extendedSupport || item.release.extendedSupport.end > queryStart);
	data.forEach((item) => {
		item.support = !item.release.extendedSupport ? 'TBD' : (item.release.lts ? '6 months' : '3 months')
		if (item.release.extendedSupport?.end > queryEnd) {
			queryEnd = item.release.extendedSupport.end;
		}
	});
	data.reverse();

	// const data = parseInput(options.data, queryStart, queryEnd, excludeMaster, projectName);

	const d3n = new D3Node({ svgStyles: styles, d3Module: D3 });
	const margin = marginInput || { top: 40, right: 40, bottom: 20, left: 50 };
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
		.tickFormat(D3.timeFormat('%b %Y'));
	const yAxis = D3.axisRight(yScale).tickSize(width);
	const baseSvg = d3n.createSVG()
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom);

	baseSvg.append('rect')
		.attr('fill', 'black')
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
		g.selectAll('.tick:nth-child(odd) line').attr('stroke', '#89a19d');
		g.selectAll('.tick:nth-child(even) line')
			.attr('stroke', '#89a19d')
			.attr('stroke-dasharray', '2,2');
		g.selectAll('.tick text').attr('y', 0).attr('dy', -10);
	}

	function customYAxis(g) {
		g.call(yAxis);
		g.select('.domain').remove();
		g.selectAll('.tick line').attr('stroke', '#e1e7e7');
		g.selectAll('.tick text').attr('x', 0).attr('dx', -10);
		g.append('line')
			.attr('y1', height)
			.attr('y2', height)
			.attr('x2', width)
			.attr('stroke', '#89a19d');
	}

	svg.append('g')
		.attr('class', 'axis axis--x')
		.call(customXAxis);

	svg.append('g')
		.attr('class', 'axis axis--y')
		.call(customYAxis);

	const bar = svg.selectAll('#bar-container').data(data).enter().append('g');

	bar.append('rect')
		.attr('class', (data) => { return `bar-join ${data.release.extendedSupport ? (data.release.lts ? 'active-lts' : 'active') : 'current'}`; })
		.attr('x', (data) => { return xScale(data.release.releasedAt); })
		.attr('y', (data) => { return yScale(data.release.version); })
		.attr('width', (data) => {return xScale((data.release.extendedSupport?.end || queryEnd)) - xScale(data.release.releasedAt)})
		.attr('height', (data) => calculateHeight(data));

	bar.append('rect')
		.attr('class', (data) => { return `bar ${data.release.extendedSupport ? (data.release.lts ? 'lts' : 'maintenance') : ''}`; })
		.attr('x', (data) => { return xScale(data.release.extendedSupport?.start) + 2; })
		.attr('y', (data) => { return yScale(data.release.version) + 2; })
		.attr('width', (data) => { return xScale(data.release.extendedSupport?.end || queryEnd) - xScale(data.release.extendedSupport?.start) - 4})
		.attr('height', (data) => calculateHeight(data) - 4);

	bar.append('text')
		.attr('class', (data) => { return `bar ${data.release.extendedSupport ? (data.release.lts ? 'label label-lts' : 'label') : 'label label-current'}`; })
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
			const min = data.support.length * 14;
			return +(calculateWidth(data) >= min);
		});

	// if (typeof svgFile === 'string') {
	// 	Fs.writeFileSync(svgFile, d3n.svgString());
	// }

	if (typeof png === 'string') {
		Fs.writeFileSync(png, Svg2png.sync(Buffer.from(d3n.svgString())));
	}
}