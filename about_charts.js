var ctx = document.getElementById("aboutChart").getContext('2d');
var aboutChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["User Experience", "Client Communication", "UI Design", "Unit Testing", "Clean Code"],
        datasets: [{
            label: 'Skills',
            data: [4.5, 4, 4, 4.5, 3.5,],
            backgroundColor: [
				'#eff2f5',
                '#e0e6eb',
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