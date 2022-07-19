const fetchUniswapData = async function () {
  try {
    const url = new URL(
      `https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/pools/?quote-currency=USD&format=JSON&contract-addresses=0x1f9840a85d5af5bf1d1762f925bdaddc4201f984&key=ckey_878291853f4d4b82987bd09ce36`
    );
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Data not found");
    }
    const result = await response.json();

    const data = result.data.items;
    console.log("uniswap data", data);

    const exchangeInformation = data.map((data) => {
      let swap_count_total = 0;
      let total_liquidity = 0;
      let total_supply = 0;

      return {
        swap_count: data.swap_count_24h,
        liquidity: data.total_liquidity_quote,
        total_supply: data.total_supply,
      };
    });

    const contractTable = data.slice(0, 4).map((data) => {
      const result = {
        contract_name: data.token_1.contract_name,
        contract_address: data.token_1.contract_address,
        contract_token_price: data.token_1.quote_rate,
        contract_logo: data.token_1.logo_url,
        contract_symbol: data.token_1.contract_ticker_symbol,
        dex_name: data.dex_name,
        volume_in_24h: data.token_1.volume_in_24h,
        volume_out_24h: data.token_1.volume_out_24h,
        volume_in_7d: data.token_1.volume_in_7d,
        volume_out_7d: data.token_1.volume_out_7d,
      };
      return result;
    });
    displayUI(contractTable);
    console.log("contractTable", contractTable);
    console.log("exchangeInformation", exchangeInformation);
    // cryptoList.push(myCryptoList);
    return data;
  } catch (err) {
    console.error(err);
  }
};

fetchUniswapData();

// Contract Name
// Contract Symbol

// quote rate
// Volume Out

// Volume In

const displayUI = function (results) {
  const container = document.getElementById("new_list");
  results.forEach((data) => {
    let renderData = `
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
        <div class="card items">
            <div class="card-body">
                <div class="items-img position-relative"><img src="images/items/1.jpg"
                        class="img-fluid rounded mb-3" alt=""><img
                        src="images/avatar/1.jpg" class="creator" width="50" alt=""></div>
                <h4 class="card-title">${data.contract_name}</h4>
                <p></p>
                <div class="d-flex justify-content-between">
                    <div class="text-start">
                        <p class="mb-2">${data.contract_symbol}</p>
                        <h5 class="text-muted">quote rate       ${data.contract_token_price}</h5>
                    </div>
                    <div class="text-end">
                        <p class="mb-2">Volume <strong class="text-primary">Out
                              
                            </strong>       ${data.volume_out_24h}</p>
                        <h5 class="text-muted">Volume
                            In      ${data.volume_in_24h}
                        </h5>
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-3"><a href="#"
                        class="btn btn-primary">Contract Address        ${data.contract_address}</a></div>
            </div>
        </div>
    </div>`;
    container.innerHTML += renderData;
  });
};
