const lineChart = function (dates, prices) {
  var activity = document.getElementById("activity");
  if (activity !== null) {
    var activityData = [
      {
        first: prices,
      },
    ];

    activity.height = 100;

    var config = {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: `$`,
            backgroundColor: "rgba(111, 78, 242, 0.10)",
            borderColor: "rgba(111, 78, 242, 1)",
            data: activityData[0].first,
            lineTension: 0,
            pointRadius: 4,
            borderWidth: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              barPercentage: 0.45,
              gridLines: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                display: true,
                fontColor: "#8a909d",
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: false,
                color: "#eee",
              },
              ticks: {
                // display: false,
                stepSize: 1,
                fontColor: "#6f4ef2",
                fontFamily: "Poppins",
              },
            },
          ],
        },
        tooltips: {
          mode: "index",
          intersect: false,
          titleFontColor: "#888",
          bodyFontColor: "#555",
          titleFontSize: 12,
          bodyFontSize: 15,
          backgroundColor: "rgba(256,256,256,0.95)",
          displayColors: true,
          xPadding: 10,
          yPadding: 7,
          borderColor: "rgba(220, 220, 220, 0.9)",
          borderWidth: 2,
          caretSize: 6,
          caretPadding: 5,
        },
      },
    };

    var ctx = document.getElementById("activity").getContext("2d");
    var myLine = new Chart(ctx, config);

    var items = document.querySelectorAll("#user-activity .btn");
    items.forEach(function (item, index) {
      item.addEventListener("click", function () {
        config.data.datasets[0].data = activityData[index].first;
        config.data.datasets[1].data = activityData[index].second;
        myLine.update();
      });
    });
  }
};

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

console.log(day, month, year);

const uniswapLineGraph = async function () {
  try {
    const url = new URL(
      `https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/1/USD/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984/?quote-currency=USD&format=JSON&from=2022-01-01&to=${year}-0${month}-${day}&prices-at-asc=prices-at-asc&page-number=&page-size=100&key=ckey_878291853f4d4b82987bd09ce36`
    );
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Data not found");
    }
    const result = await response.json();

    const data = result.data[0].prices;
    const date = data.slice(0, 10).map((data) => data.date.slice(-5));
    const price = data.slice(0, 10).map((data) => {
      const prices = String(data.price);
      return prices.slice(0, 4);
    });
    lineChart(date, price);

    // console.log("data and price list", String(date), price);
    // console.log("price history", data);
  } catch (err) {
    console.error(err);
  }
};

uniswapLineGraph();
