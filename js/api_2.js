// const APIKEY = "ckey_878291853f4d4b82987bd09ce36";
// const baseURL = "https://api.covalenthq.com/v1";
// const blockchainChainId = "1";
// const demoAddress = "demo.eth";
// const cryptoList = [];

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
      return {
        swap_count: data.swap_count_24h,
        total_liquidity: data.total_liquidity_quote,
        total_supply: data.total_supply,
      };
    });

    const contractTable = data.map((data) => {
      return {
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
    });
    console.log("contractTable", contractTable);
    console.log("exchangeInformation", exchangeInformation);
    // cryptoList.push(myCryptoList);
    //displayUI(contractTable);
    return data;
  } catch (err) {
    console.error(err);
  }
};

fetchUniswapData();

const displayUI = function (results) {
  const container = document.getElementById("new_list");

  results.forEach((data, index) => {
    let renderData = `
        <ul>${index + 1}
            <li>contract_address: ${data.contract_address}</li>
            <li>contract_name:  ${data.contract_name}</li>
            <li>contract_symbol:  ${data.contract_symbol}</li>
            <li> contract_token_price:  ${data.contract_token_price}</li>
            <li>total_supply:  ${data.total_supply}</li>
            <li>dex_name:  ${data.dex_name}</li>
            <li>total_marketcap:  ${data.total_marketcap}</li>
            <li>contract_logo:  ${data.contract_logo}</li>
            <li>volume_in_24h:  ${data.volume_in_24h}</li>
            <li>volume_out_24h:  ${data.volume_out_24h}</li>
            <li>volume_in_7d:  ${data.volume_in_7d}</li>
            <li>volume_out_7d:  ${data.volume_out_7d}</li>
        </ul>`;
    container.innerHTML += renderData;
  });
};
