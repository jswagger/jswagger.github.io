var ctx = document.getElementById("aboutChart").getContext('2d');
var aboutChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Angular", "React", ".Net", "SQL", "Python", "GIS"],
        datasets: [{
            label: 'Skills',
            data: [3, 4, 3, 2.5, 3.5, 4.5],
            backgroundColor: [
		'#eff2f5',
                '#e0e6eb',
	    	'#d5e0e8',
                '#d0dae1',
                '#c1cdd7',
                '#b1c1cd'
            ]
        }]
    },
    options: {
		
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
					callback: function(value) {if (value % 1 === 0) {return value;}},
					suggestedMax: 5
                },
				gridLines: {
                    display:false
                }
            }],
			xAxes: [{
				gridLines: {
                    display:false
                }
			}]
        }
    }
});
