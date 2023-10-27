var ctx = document.getElementById("aboutChart").getContext('2d');
var aboutChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Demonstrated Experience", 
            "Demonstrated ability programming geospatial applications", 
            "Development protocols and coding standards", 
            "Demonstrate architecting solutions", 
            "Integration of geospatial applications with other systems",
            "Test plans and automated test scripts",
            "Development lifecycle methodologies",
            "Lead design and architecture for new applications",
            "Supervisor or Lead development team on a specific project"
        ],
        datasets: [{
            label: 'Criteria',
            data: [10, 10, 10, 5, 10, 10, 10, 8, 10],
            backgroundColor: [
		'#eff2f5',
                '#e0e6eb',
                '#d0dae1',
                '#c1cdd7',
                '#b1c1cd',
                '#9fb3c2',
                '#8fa3b3',
                '#7790a3',
                '#688296'
            ]
        }]
    },
    options: {
		
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
					callback: function(value) {if (value % 1 === 0) {return value;}},
					suggestedMax: 10
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
        },
        aspectRatio: 1,
        maintainAspectRatio: false
    }
});
