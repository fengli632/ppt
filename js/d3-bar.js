d3.csv("data/data.csv", type, function(data) {
    console.log(data);
    //设定容器的大小及间距
    var width = 500,
        height = 300,
        margin = {left: 30, top: 30, right: 10, bottom: 30},
        svg_width = width + margin.left + margin.right,
        svg_height = height + margin.top + margin.bottom;

    //根据数据量设定缩放比例
    var scale = d3.scale.linear()
        .domain([0, d3.max(data, function(d) {
            return d.sale;
        })])
        .range([height, 0]);

    //设定坐标轴的定义域及值域
    var scale_x = d3.scale.ordinal()
        .domain(data.map(function(d){return d.phone;}))
        .rangeBands([0,width], 0.1);

    // 绘制容器
    var svg = d3.select("#d3-bar")
        .append("svg")
        .attr("width", svg_width)
        .attr("height", svg_height);

    var chart = svg.append("g")
        .attr("transform", "translate("+margin.left+","+margin.top+")");

    // 绘制x轴及y轴
    var x_axis = d3.svg.axis().scale(scale_x);
    y_axis = d3.svg.axis().scale(scale).orient("left");

    chart.append("g")
        .call(x_axis)
        .attr("transform", "translate(0,"+height+")");

    chart.append("g")
        .call(y_axis);

    // 绘制主题部分
    var bar = chart.selectAll(".bar")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "bar")
        .attr("transform", function(d, i) {
            return "translate(" + scale_x(d.phone) + ",0)"
        });

    //添加矩形

    bar.append("rect")
        .attr({
            "y": function(d) {
                return scale(d.sale)
            },
            "width": scale_x.rangeBand(),
            "height": function(d) {
                return height - scale(d.sale)
            }
        })
        .style("fill", "#c23531");

    // 添加文本
    bar.append("text")
        .attr({
            "y": function(d) {
                return scale(d.sale);
            },
            "x": scale_x.rangeBand() / 2,
            "dy": 15,
            "text-anchor": "middle"
        }).text(function(d) {
        return d.phone;
    });

});

function type(d) {
    d.sale = +d.sale;
    return d;
}