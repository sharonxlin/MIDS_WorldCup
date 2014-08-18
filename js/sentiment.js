$(function () {
    $('#bar_chart_bravger').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Sentiment Analysis'
        },
		legend: {
		            layout: 'vertical',
		            align: 'right',
		            verticalAlign: 'middle',
		            borderWidth: 0
		        },
        subtitle: {
            text: 'Brazil vs Germany : 8th July'
        },
        xAxis: {
            categories: [
                'Brazil',
                'Germany'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'No. of Tweets'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y: .0f} tweets</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Positive',
            data: [1369, 2654],
			color: 'green'

        }, {
            name: 'Negative',
            data: [2987, 918],
			color: 'red'

        }]
    });
	$('#bar_chart_argvned').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Sentiment Analysis'
        },
		legend: {
		            layout: 'vertical',
		            align: 'right',
		            verticalAlign: 'middle',
		            borderWidth: 0
		        },
        subtitle: {
            text: 'Argentina vs Netherlands : 9th July'
        },
        xAxis: {
            categories: [
                'Argentina',
                'Netherlands'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'No. of Tweets'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y: .0f} tweets</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Positive',
            data: [2953, 2162],
			color: 'green'

        }, {
            name: 'Negative',
            data: [2167, 2029],
			color: 'red'

        }]
    });
	$('#bar_chart_bravned').highcharts({
        chart: {
            type: 'column'
        },
		legend: {
		            layout: 'vertical',
		            align: 'right',
		            verticalAlign: 'middle',
		            borderWidth: 0
		        },
        title: {
            text: 'Sentiment Analysis'
        },
        subtitle: {
            text: 'Brazil vs Netherlands : 12th July'
        },
        xAxis: {
            categories: [
                'Brazil',
                'Netherlands'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'No. of Tweets'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y: .0f} tweets</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Positive',
            data: [3258, 3263],
			color: 'green'

        }, {
            name: 'Negative',
            data: [7847, 1381],
			color: 'red'

        }]
    });
	$('#bar_chart_gervarg').highcharts({
        chart: {
            type: 'column'
        },
		legend: {
		            layout: 'vertical',
		            align: 'right',
		            verticalAlign: 'middle',
		            borderWidth: 0
		        },
        title: {
            text: 'Sentiment Analysis'
        },
        subtitle: {
            text: 'Germany vs Argentina : 13th July'
        },
        xAxis: {
            categories: [
                'Germany',
                'Argentina'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'No. of Tweets'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y: .0f} tweets</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Positive',
            data: [2198, 1009],
			color: 'green'

        }, {
            name: 'Negative',
            data: [754, 871],
			color: 'red'

        }]
    });
});