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
    const data = result.data;
    const myCryptoList = data.items.map((data) => {
      return {
        coin_name: data.contract_name,
        coin_price: data.quote_rate,
        contract_address: data.contract_address,
        coin_logo: data.logo_url,
        coin_symbol: data.contract_ticker_symbol,
        decimal: data.contract_decimals,
      };
    });
    cryptoList.push(myCryptoList);
    showData(cryptoList[0]);
    totalMarketCap(cryptoList[0]);
    //return data;
  } catch (err) {
    console.error(err);
  }
};

fetchData(blockchainChainId, demoAddress);


function showData(results) {
  let dataCenter = document.getElementById("data-center");
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
        </tr>`;
    dataCenter.innerHTML += renderData;
  });
}

function totalMarketCap(results) {
  let totalContainer = document.getElementById("totalContainer");
  let renderData = `
  <div class="col-xl-3 col-sm-6">
      <div class="stat-widget d-flex align-items-center">
          <div class="widget-icon me-3 bg-primary"><span><i class="ri-file-copy-2-line"></i></span></div>
          <div class="widget-content">
              <h3>${results.length}</h3>
              <p><strong>Total Number of DAOs</strong></p>
          </div>
      </div>
  </div>
  <div class="col-xl-3 col-sm-6">
      <div class="stat-widget d-flex align-items-center">
          <div class="widget-icon me-3 bg-success"><span><i class="ri-file-list-3-line"></i></span></div>
          <div class="widget-content">
              <h3>$99,320,793.40</h3>
              <p><strong>DAO Market Cap</strong></p>
          </div>
      </div>
  </div>
  <div class="col-xl-3 col-sm-6">
      <div class="stat-widget d-flex align-items-center">
          <div class="widget-icon me-3 bg-warning"><span><i class="ri-bank-line"></i></span></div>
          <div class="widget-content">
              <h3>1.7M</h3>
              <p><strong>Governance Token Holders</strong></p>
          </div>
      </div>
  </div>
  <div class="col-xl-3 col-sm-6">
      <div class="stat-widget d-flex align-items-center">
          <div class="widget-icon me-3 bg-danger"><span><i class="ri-file-copy-line"></i></span></div>
          <div class="widget-content">
              <h3>497k</h3>
              <p><strong>Active Voters</strong></p>
          </div>
      </div>
  </div>
`;
  totalContainer.innerHTML += renderData;
}

