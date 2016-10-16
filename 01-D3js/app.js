// var nodes = [
//   {"name" : "Miles", "age": 16},
//   {"name": "John", "age": 34},
//   {"name": "Thelonious", "age": 65}
// ];

// var links = [
//   {"source": 0, "target": 1},
//   {"source": 0, "target": 2}
// ];


d3.json("./data.json", function(err, json) {

	var forceLayout = d3.layout.force()
		.size([800, 600])
	  	.charge(-1000)
	  	.linkDistance(100)
	  	.gravity(0.2)
		.on('tick', update);


	function createNodes() {
	  d3.select('svg')
	    .selectAll('line')
	    .data(json.links)
	    .enter()
	    .append('line');

	  d3.select('svg')
	    .selectAll('circle')
	    .data(json.nodes)
	    .enter()
	    .append('circle')
	    .attr('r', 10)
	    .on('mouseover', function(d) {
	    	d3.select('.info').text(d.name + ". Age: " + d.age);
	    	console.log(d.name);
	    });
	}


	function update() {
	  d3.select('svg')
	    .selectAll('line')
	    .attr('x1', function(d) {return d.source.x;})
	    .attr('y1', function(d) {return d.source.y;})
	    .attr('x2', function(d) {return d.target.x;})
	    .attr('y2', function(d) {return d.target.y;});

	  d3.select('svg')
	    .selectAll('circle')
	    .attr('cx', function(d) {return d.x;})
	    .attr('cy', function(d) {return d.y;});
	}

	createNodes();

	forceLayout
	  .nodes(json.nodes)
	  .links(json.links);

	forceLayout.start();

	// cahange line style dynamically 
	//d3.selectAll('line').style("stroke-dasharray","1,3,1");
	d3.selectAll('line').style('stroke-dasharray',function(d) {
		if (d.source.age < 18 && d.target.age < 18) {
			return '1,3,1';
		} else {
			return '0,0,0';
		}
	});

	// if is under-age change style
	d3.selectAll('circle').style('fill', function(d){
		if (d.age < 18) return '#ff6ac2';
	});
});

