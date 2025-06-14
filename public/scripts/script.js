fetch('/chartdata')
  .then(res => res.json())
  .then(data => {
    const { activeUsers, date } = data; 
// een table met alle data erin als fallback
    console.log(activeUsers);    
    console.log(date);  

const lineChart = document.getElementById("line-chart");

    new Chart(lineChart, {
        type: "line",
        data: {
            labels: date,
            datasets: [{
                data: activeUsers,
                borderWidth: 2,
                tension: 0.6,
                pointRadius: 0,
                borderColor: '#2A9D90'
            }],
        },
        options: {
            animations: {
        tension: {
        duration: 5000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
            scales: {
                y: {
                  min: 10,      
                  max: 40,     
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
                      bottom: 5,
                      left:30
                    }
                },
                subtitle: {
                display: true,
                text: "Totale aantal actieve gebruikers van afgelopen 3 maanden",
                align: "start",
                padding: {
                      left:30

                }
            }
            }
            
        }
    })
  })














    