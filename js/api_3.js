console.log("Ayomide loves oyin");

const today_1 = new Date();
const day_1 = today_1.getDate();
const month_1 = today_1.getMonth() + 1;
const year_1 = today_1.getFullYear();

console.log(day_1, month_1, year_1);
const apeURL = "0x4d224452801aced8b2f0aebe155379bb5d594381";
const uniswapURL = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";
const aaveURL = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
const makerURL = "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2";
// const dashURL = "0x023b5f2e3779171380383b4ca8aa751acfbbef4c";

// containers
const apeCoinContainer = "apeCoin_container";
const aaveContainer = "aave_container";
const makerContainer = "maker_container";
const uniswapCotainer = "uniswap_container";

// const apeCoinUrl = `${baseURL}/pricing/historical_by_addresses_v2/1/USD/0x4d224452801aced8b2f0aebe155379bb5d594381/?quote-currency=USD&format=JSON&from=2022-07-19&to=2022-07-14&key=${APIKEY}`;

const ape = async function (urls) {
  try {
    const url = new URL(
      `https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/1/USD/${urls}/?quote-currency=USD&format=JSON&from=2022-01-01&to=${year_1}-0${month_1}-${day_1}&prices-at-asc=prices-at-asc&page-number=&page-size=100&key=ckey_878291853f4d4b82987bd09ce36`
    );
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Data not found");
    }
    const result = await response.json();
    const data_2 = result.data[0];
    console.log("data_2", data_2);

    const data = result.data[0].prices.slice(0, 10);
    const price_date = data.map((data) => {
      return {
        date: data.date,
        price: data.price,
      };
    });
    console.log("present day", price_date);
    showData(price_date, apeCoinContainer);
  } catch (err) {
    console.error(err);
  }
};
ape(apeURL);

const uniswap = async function (urls) {
  try {
    const url = new URL(
      `https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/1/USD/${urls}/?quote-currency=USD&format=JSON&from=2022-01-01&to=${year_1}-0${month_1}-${day_1}&prices-at-asc=prices-at-asc&page-number=&page-size=100&key=ckey_878291853f4d4b82987bd09ce36`
    );
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Data not found");
    }
    const result = await response.json();
    const data_2 = result.data[0];
    console.log("data_2", data_2);

    const data = result.data[0].prices.slice(0, 10);
    const price_date = data.map((data) => {
      return {
        date: data.date,
        price: data.price,
      };
    });
    console.log("present day", price_date);
    showData(price_date, uniswapCotainer);
  } catch (err) {
    console.error(err);
  }
};

uniswap(uniswapURL);

const aave = async function (urls) {
  try {
    const url = new URL(
      `https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/1/USD/${urls}/?quote-currency=USD&format=JSON&from=2022-01-01&to=${year_1}-0${month_1}-${day_1}&prices-at-asc=prices-at-asc&page-number=&page-size=100&key=ckey_878291853f4d4b82987bd09ce36`
    );
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Data not found");
    }
    const result = await response.json();
    const data_2 = result.data[0];
    console.log("data_2", data_2);

    const data = result.data[0].prices.slice(0, 10);
    const price_date = data.map((data) => {
      return {
        date: data.date,
        price: data.price,
      };
    });
    console.log("present day", price_date);
    showData(price_date, aaveContainer);
  } catch (err) {
    console.error(err);
  }
};

aave(aaveURL);

const maker = async function (urls) {
  try {
    const url = new URL(
      `https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/1/USD/${urls}/?quote-currency=USD&format=JSON&from=2022-01-01&to=${year_1}-0${month_1}-${day_1}&prices-at-asc=prices-at-asc&page-number=&page-size=100&key=ckey_878291853f4d4b82987bd09ce36`
    );
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Data not found");
    }
    const result = await response.json();
    const data_2 = result.data[0];
    console.log("data_2", data_2);

    const data = result.data[0].prices.slice(0, 10);
    const price_date = data.map((data) => {
      return {
        date: data.date,
        price: data.price,
      };
    });
    console.log("present day", price_date);
    showData(price_date, makerContainer);
  } catch (err) {
    console.error(err);
  }
};

maker(makerURL);

const showData = function (results, container) {
  let dataCenter = document.getElementById(container);

  results.forEach((data) => {
    let renderData = `
    <div class="d-flex justify-content-between creator-widget active  align-items-center balance-stats" style="background:none; border:1px solid #aaa ">

       <div class="text-end">
           <h5 class="text-primary">${data.date}</h5>
       </div>
       
       <div class="text-end">
           <h5 class="text-primary">$${data.price}</h5>
       </div>

</div>`;
    dataCenter.innerHTML += renderData;
  });
};
