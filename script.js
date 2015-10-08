google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Year', 'Lottery',],
        ['1975', 15000000],
        ['1980', 54535048],
        ['1985', 148800000],
        ['1990', 227650000],
        ['1995', 249650000]
    ]);

    var options = {
        title: 'Money made from the lottery',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Amount of money',
            minValue: 0
        },
        vAxis: {
            title: 'Year'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}