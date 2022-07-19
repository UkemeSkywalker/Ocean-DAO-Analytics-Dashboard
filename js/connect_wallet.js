const userAddress = document.getElementById('userAddress');

/* To connect using MetaMask */
async function connect() {
  if (window.ethereum) {
     await window.ethereum.request({ method: "eth_requestAccounts" });
     window.web3 = new Web3(window.ethereum);
     const account = web3.eth.accounts;
     //Get the current MetaMask selected/active wallet
     const walletAddress = account.givenProvider.selectedAddress;

     console.log(`Wallet: ${walletAddress}`);
     if(walletAddress){
        alert("connect succesfully")
        userAddress.innerHTML = walletAddress;
     }
        
  } else {
   console.log("No wallet");
  }
}

document.getElementById('userAddress').innerHTML = walletAddress;