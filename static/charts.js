window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,

	title:{
		text:"Fortune 500 Companies by Country"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)",
		title: "Number of Companies"
	},
	data: [{
		type: "bar",
		name: "companies",
		axisYType: "secondary",
		color: "#014D65",
		dataPoints: [
			{ y: 3, label: "Python" },
			{ y: 7, label: "Golang" },
			{ y: 5, label: "Django" },
			{ y: 9, label: "Flask" },
			{ y: 7, label: "Vue-js" },
			{ y: 7, label: "Docker" },
		]
	}]
});
chart.render();

}