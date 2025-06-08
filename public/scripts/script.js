
fetch('/chartdata')
  .then(res => res.json())
  .then(data => {
    const { chartDates, userAmount } = data; 

    console.log(chartDates);    
    console.log(userAmount);  

const lineChart = document.getElementById("line-chart");

    new Chart(lineChart, {
        type: "line",
        data: {
            labels: chartDates,
            datasets: [{
                data: userAmount,
                borderWidth: 2,
                tension: 0.6,
                pointRadius: 0,
                borderColor: '#2A9D90'
            }],
      
            

        },
        options: {
            scales: {
                y: {
                  min: 10,      
                  max: 30,     
                  beginAtZero: true,
                    display: true,
                    grid: {
                        display: true
                    },
                    border: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                },
                x: {
                    display: true,
                    grid: {
                        display: false
                    }
                }
            },

            plugins: {
                legend: {
                    display: false  
                },
                title: {
                    display: true,
                    text: "Actieve gebruikers",
                    align: "start",
                    padding: {
                        top: 40,
                        right: 10,
                        
                        bottom: 5
                    }
                },
                subtitle: {
                display: true,
                text: "Totale aantal actieve gebruikers van afgelopen 3 maanden",
                align: "start",
                padding: {
                    left: 100

                }
            }
            }
            
        }
    })
  })














    