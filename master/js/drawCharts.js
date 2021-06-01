////////////////////// CHARTS //////////////////////
$(function(){
/*
	var xValues = ["Javascript",""];
	var yValues = [75,25];
	var barColors = [
	"#2b5797"
	];

	var jsChart = new Chart("jsChart", 
	{
		type: "doughnut",
		data:
		{
			labels: xValues,
			datasets: 
			[{
			backgroundColor: barColors,
			data: yValues
			}]
		},
		options: 
		{
			title: 
			{
			display: true,
			text: "Javascript"
			}
		}
	});
*/
//css

	
});


function draw1()
{
var x1 = 90;
var x2 = 10;
	var xValues = ["CSS",""];
	var yValues = [x1,x2];
	var barColors = [
	"#2b5797"
	];
	
	var cssChart = new Chart("1Chart", 
	{
		type: "doughnut",
		data:
		{
			labels: xValues,
			datasets: 
			[{
			backgroundColor: barColors,
			data: yValues
			}]
		},
		options: 
		{
			title: 
			{
			display:true,
			text: "CSS"
			}
		}
	});
	
var y1 = 80;
var y2 = 20;
	var xValues = ["CSS",""];
	var yValues = [y1,y2];
	var barColors = [
	"#2b5797"
	];
	
	var cssChart = new Chart("2Chart", 
	{
		type: "doughnut",
		data:
		{
			labels: xValues,
			datasets: 
			[{
			backgroundColor: barColors,
			data: yValues
			}]
		},
		options: 
		{
			title: 
			{
			display:true,
			text: "CSS"
			}
		}
	});



var x1 = 95;
var x2 = 5;
	var xValues = ["CSS",""];
	var yValues = [x1,x2];
	var barColors = [
	"#2b5797"
	];
	
	var cssChart = new Chart("3Chart", 
	{
		type: "doughnut",
		data:
		{
			labels: xValues,
			datasets: 
			[{
			backgroundColor: barColors,
			data: yValues
			}]
		},
		options: 
		{
			title: 
			{
			display:true,
			text: "CSS"
			}
		}
	});
	
}