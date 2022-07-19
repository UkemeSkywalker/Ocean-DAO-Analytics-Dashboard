//doughut chart
var ctx = document.getElementById('most-selling-items')
// ctx.height = 175;
new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [
      {
        data: [33, 33, 33, 33, 33],
        backgroundColor: [
          '#F507A3',
          '#1F26DB',
          '#D8EB21',
          '#21EBAA',
          '#EBB621'

        ],
      },
    ],
    labels: ['Uniswap', 'ApeCoin', 'Aave', 'Maker', 'Dash'],
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    labels: ['Uniswap', 'ApeCoin', 'Aave', 'Maker', 'Dash'],
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,
    maintainAspectRatio: false,
    clip: 10,
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        fontFamily: 'Poppins',
        fontSize: 15,
        fontColor: '#fff',
        padding: 20,
      },
    },
  },
})

