console.log("ayomide");
//doughut chart

const coinChart = function (coin1, coin2, coin3, coin4, coin5) {
  var ctx = document.getElementById("most-selling-items");
  ctx.height = 175;
  const newChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [coin1, coin2, coin3, coin4, coin5],
          backgroundColor: [
            "#F507A3",
            "#1F26DB",
            "#D8EB21",
            "#21EBAA",
            "#EBB621",
          ],
        },
      ],
      labels: ["Uniswap", "ApeCoin", "Aave", "Maker", "Dash"],
    },
    options: {
      responsive: true,
      cutoutPercentage: 80,
      maintainAspectRatio: false,
      animation: {
        animateRotate: true,
        animateScale: true,
      },
      labels: ["Uniswap", "ApeCoin", "Aave", "Maker", "Dash"],
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
        position: "bottom",
        labels: {
          usePointStyle: true,
          fontFamily: "Poppins",
          fontSize: 15,
          fontColor: "#fff",
          padding: 20,
        },
      },
    },
  });
  return newChart;
};

var aave;
var maker_dao;
var curve_Dao_token;
var compound;
var uniswap;

const fetchCryptoData = async function () {
  try {
    const url = new URL(
      `https://api.covalenthq.com/v1/1/address/demo.eth/balances_v2/?key=ckey_878291853f4d4b82987bd09ce36`
    );
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Data not found");
    }
    const result = await response.json();
    // console.log('line 19 ', response);
    // console.log('line 20 ',result);

    const data = result.data.items;
    aave = data[13].quote_rate;
    uniswap = data[66].quote_rate;
    maker_dao = data[110].quote_rate;
    curve_Dao_token = data[48].quote_rate;
    compound = data[9].quote_rate;
    const sum = aave + uniswap + maker_dao + curve_Dao_token + compound;
    const avvePercentage = (aave * 360) / sum;
    const uniswapPercentage = (uniswap * 360) / sum;
    const maker_daoPercentage = (maker_dao * 360) / sum;
    const curve_Dao_tokenPercentage = (curve_Dao_token * 360) / sum;
    const compoundPercentage = (compound * 360) / sum;

    coinChart(
      avvePercentage,
      uniswapPercentage,
      maker_daoPercentage,
      curve_Dao_tokenPercentage,
      compoundPercentage
    );

    console.log(aave);
    console.log(uniswap);
    console.log(maker_dao);
    console.log(compound);
    console.log(curve_Dao_token);

    // console.log('line 24 ',data);

    console.log("donut", data);

    // console.log('line 35 ',cryptoList[0]);
    showData(cryptoList[0]);
    return aave;
  } catch (err) {
    console.error(err);
  }
};
fetchCryptoData();
