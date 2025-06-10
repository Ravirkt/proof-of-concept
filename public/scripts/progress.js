fetch('/progressdata')
    .then(res => res.json())
    .then(data => {
        const { progressPink, progressPurple, progressBlue, progressYellow } = data;
        console.log(progressPink, progressPurple, progressBlue, progressYellow);

        // class pink
        const progressChartPink = document.querySelectorAll(".progress-chart-KlasRoze");

        new Chart(progressChartPink, {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [progressPink, (100 - progressPink)],
                    backgroundColor: ["green", "#e0e0e0"],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: "65%",
                responsive: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });

        // class purple
        const progressChartPurple = document.querySelectorAll(".progress-chart-KlasPaars");

        new Chart(progressChartPurple, {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [progressPurple, (100 - progressPurple)],
                    backgroundColor: ["orange", "#e0e0e0"],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: "65%",
                responsive: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });

        // class blue
        const progressChartBlue = document.querySelectorAll(".progress-chart-KlasBlauw");

        new Chart(progressChartBlue, {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [progressBlue, (100 - progressBlue)],
                    backgroundColor: ["green", "#e0e0e0"],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: "65%",
                responsive: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });

        // class yellow
        const progressChartYellow = document.querySelectorAll(".progress-chart-KlasGeel");

        new Chart(progressChartYellow, {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [progressYellow, (100 - progressYellow)],
                    backgroundColor: ["red", "#e0e0e0"],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: "65%",
                responsive: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });
    })