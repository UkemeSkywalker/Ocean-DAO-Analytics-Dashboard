const APIKEY = "ckey_878291853f4d4b82987bd09ce36";
const baseURL = "https://api.covalenthq.com/v1";
const blockchainChainId = "1";
const demoAddress = "demo.eth";
const cryptoList = [];

// https://api.covalenthq.com/v1/1/address/0x197e3eCCD00F07B18205753C638c3E59013A92bf/transfers_v2/?contract-address=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&key=ckey_878291853f4d4b82987bd09ce36

const fetchData = async function (chainId, address) {
  try {
    // const url = new URL(
    //   `${baseURL}/${chainId}/address/${address}/balances_v2/?key=${APIKEY}`
    // const url = new URL(
    //   `${baseURL}/${blockchainChainId}/address/${demoAddress}/transfers_v2/?contract-address=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&key=${APIKEY}`
    const url = new URL(
      `https://api.covalenthq.com/v1/1/address/0x197e3eCCD00F07B18205753C638c3E59013A92bf/transfers_v2/?contract-address=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&key=ckey_878291853f4d4b82987bd09ce36`
    );
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Data not found");
    }
    const result = await response.json();
    console.log(response);
    console.log(result);

    //const data = result.data;

    //console.log(data);

    // const myCryptoList = data.items.map((data) => {
    //   return {
    //     coin_name: data.contract_name,
    //     coin_price: data.quote_rate,
    //     contract_address: data.contract_address,
    //     coin_logo: data.logo_url,
    //     coin_symbol: data.contract_ticker_symbol,
    //   };
    // });
    console.log(myCryptoList);
    cryptoList.push(myCryptoList);
    return data;
  } catch (err) {
    console.error(err);
  }
};

fetchData();
console.log(cryptoList);
