// const { ok } = require("assert");

const APIKEY = "ckey_878291853f4d4b82987bd09ce36";
const baseURL = "https://api.covalenthq.com/v1";
const blockchainChainId = "1";
const demoAddress = "demo.eth";
const cryptoList = [];

const fetchData = async function (chainId, address) {
  try {
    const url = new URL(
      `${baseURL}/${chainId}/address/${address}/balances_v2/?key=${APIKEY}`
    );
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Data not found");
    }
    const result = await response.json();
    console.log(response);
    console.log(result);

    const data = result.data;

    console.log(data);

    const myCryptoList = data.items.map((data) => {
      return {
        coin_name: data.contract_name,
        coin_price: data.quote_rate,
        contract_address: data.contract_address,
        coin_logo: data.logo_url,
        coin_symbol: data.contract_ticker_symbol,
      };
    });
    console.log(myCryptoList);
    cryptoList.push(myCryptoList);
    return data;
  } catch (err) {
    console.error(err);
  }
};

fetchData(blockchainChainId, demoAddress);
console.log(cryptoList);

// balance: "1645829165965035786"
// balance_24h: "1645829165965035786"
// contract_address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
// contract_decimals: 18
// contract_name: "Ether"
// contract_ticker_symbol: "ETH"
// last_transferred_at: null
// logo_url: "https://www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png"
// nft_data: null
// quote: 2232.5808
// quote_24h: null
// quote_rate: 1356.5082
// quote_rate_24h: null
// supports_erc: null
// type: "cryptocurrency"
