// const { ok } = require("assert");

const APIKEY = 'ckey_878291853f4d4b82987bd09ce36'
const baseURL = 'https://api.covalenthq.com/v1'
const blockchainChainId = '1'
const demoAddress = 'demo.eth'
const cryptoList = []

const fetchData = async function (chainId, address) {
  try {
    const url = new URL(
      `${baseURL}/${chainId}/address/${address}/balances_v2/?key=${APIKEY}`,
    )
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Data not found')
    }
    const result = await response.json()
    // console.log('line 19 ', response);
    // console.log('line 20 ',result);

    const data = result.data

    console.log('line 24 ', data)

    const myCryptoList = data.items.map((data) => {
      return {
        coin_name: data.contract_name,
        coin_price: data.quote_rate,
        contract_address: data.contract_address,
        coin_logo: data.logo_url,
        coin_symbol: data.contract_ticker_symbol,
        decimal: data.contract_decimals,
      }
    })
    // console.log('line 35 ',myCryptoList);
    cryptoList.push(myCryptoList)
    // console.log('line 35 ',cryptoList[0]);
    showData(cryptoList[0])
    totalMarketCap(cryptoList[0])
    return data
  } catch (err) {
    console.error(err)
  }
}

fetchData(blockchainChainId, demoAddress)

// balance: "1645829165965035786"
// balance_24h: "1645829165965035786"
// contract_address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
// contract_decimals: 18
// contract_name: "Ether"
// contract_ticker_symbol: "ETH"
// last_transferred_at: null
// logo_url: "https://www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png"
// nft_data: null
// quote_24h: null
// quote_rate: 1356.5082
// quote_rate_24h: null
// supports_erc: null
// type: "cryptocurrency"

/**
 * 
 
coin_logo: "https://logos.covalenthq.com/tokens/1/0xc85e0474068dba5b49450c26879541ee6cc94554.png"
coin_name: "KyDy.org"
coin_price: 0.40424502
coin_symbol: "KyDy.org"
contract_address: "0xc85e0474068dba5b49450c26879541ee6cc94554"
 * 
 */
let emptyCoin =
  'https://www.pngall.com/wp-content/uploads/4/Empty-Gold-Coin.png'
console.log(emptyCoin)

function showData(results) {
  console.log('line 74', results)
  let dataCenter = document.getElementById('data-center')

  results.slice(2, 22).forEach((data, index) => {
    let renderData = `
        <tr>
            <td>
                <div class="form-check"><input class="form-check-input"
                        type="checkbox" id="flexCheckDefault" value=""></div>
            </td>
            <td>${index + 1}
            </td>
            <td><img
            src=${data.coin_logo ? data.coin_logo : emptyCoin} alt="" width="60"
            class="me-3 rounded"></td>
            <td>${data.coin_symbol} </td>
            <td>${data.coin_name} </td>
            <td><p class="mb-0">${data.coin_price}</p></td>
            <td>${data.decimal}</td>
            <td>${data.contract_address}</td>
        </tr>`
    dataCenter.innerHTML += renderData
  })
}

function totalMarketCap(results) {
  let totalContainer = document.getElementById('totalContainer')
  let renderData = `
  <div class="col-xl-3 col-sm-6">
      <div class="stat-widget d-flex align-items-center">
          <div class="widget-icon me-3 bg-primary"><span><i class="ri-file-copy-2-line"></i></span></div>
          <div class="widget-content">
              <h2>${results.length}</h2>
              <p><strong>Total Number of DAOs</strong></p>
          </div>
      </div>
  </div>
  <div class="col-xl-3 col-sm-6">
      <div class="stat-widget d-flex align-items-center">
          <div class="widget-icon me-3 bg-success"><span><i class="ri-file-list-3-line"></i></span></div>
          <div class="widget-content">
              <h4>$99,320,793.40</h4>
              <p><strong>DAO Market Cap</strong></p>
          </div>
      </div>
  </div>
  <div class="col-xl-3 col-sm-6">
      <div class="stat-widget d-flex align-items-center">
          <div class="widget-icon me-3 bg-warning"><span><i class="ri-file-paper-line"></i></span></div>
          <div class="widget-content">
              <h3></h3>
              <p>C</p>
          </div>
      </div>
  </div>
  <div class="col-xl-3 col-sm-6">
      <div class="stat-widget d-flex align-items-center">
          <div class="widget-icon me-3 bg-danger"><span><i class="ri-file-paper-2-line"></i></span></div>
          <div class="widget-content">
              <h3>89</h3>
              <p>Canceled</p>
          </div>
      </div>
  </div>
`
  totalContainer.innerHTML += renderData
}

const getTokenHolders = async () => {
  try {
    // const holderUrl = `${baseURL}1/tokens/0xD417144312DbF50465b1C641d016962017Ef6240/token_holders/?key=${APIKEY}&page-size=10`
    const holderUrl = `${baseURL}/1/xy=k/uniswap_v2/pools/?quote-currency=USD&format=JSON&contract-addresses=0x1f9840a85d5af5bf1d1762f925bdaddc4201f984&page-number=&key=${APIKEY}`
    const response = await fetch(holderUrl)
    const parsedData = await response.json()
    const data = parsedData.data.items

    console.log('line 157', data)
  } catch (error) {
    console.error(error)
  }
}

getTokenHolders()
