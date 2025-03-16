const btc = document.getElementById('bitcoin');
const eth = document.getElementById('ethereum');
const dog = document.getElementById('dogecoin');
const teh = document.getElementById('tether');
const rip = document.getElementById('ripple');
const bin = document.getElementById('binancecoin');
const tro = document.getElementById('tron');

// image

const TetImg = document.getElementById('tetherImg');
const ripImg = document.getElementById('rippleImg');
const binImg = document.getElementById('TronImg');
const solImg = document.getElementById('binanceImg');
const troImg = document.getElementById('SolanaImg');



const options = {
    method: 'GET',
    headers: { accept: 'application/json',
         'x-cg-demo-api-key': 'CG-KQw7ZCVQEiCjM5o47iGxUXW5' }
};

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD', options)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        // Find the prices for Bitcoin, Ethereum, Dogecoin, and Tether
        const bitcoinData = data.find(coin => coin.id === 'bitcoin');
        const ethereumData = data.find(coin => coin.id === 'ethereum');
        const dogecoinData = data.find(coin => coin.id === 'dogecoin');
        const tetherData = data.find(coin => coin.id === 'tether'); 
        const TetherImage = data.find(img => img.image === 'Tether.png')
        const rippleData = data.find(coin => coin.id === 'ripple');
        const binanceData = data.find(coin => coin.id === 'binancecoin');
        const tronData = data.find(coin => coin.id === 'tron');

        // Update the innerHTML with the current prices
        btc.innerHTML = `Price: $${bitcoinData.current_price.toLocaleString()}`;
        eth.innerHTML = `Price: $${ethereumData.current_price.toLocaleString()}`;
        dog.innerHTML = `Price: $${dogecoinData.current_price.toLocaleString()}`;
        teh.innerHTML = `Price: $${tetherData.current_price.toLocaleString()}`; 
        rip.innerHTML = `Price: $${rippleData.current_price.toLocaleString()}`;
        bin.innerHTML = `Price: $${binanceData.current_price.toLocaleString()}`;
        tro.innerHTML = `Price: $${tronData.current_price.toLocaleString()}`;


        // image
        TetImg.src = tetherData.image
        ripImg.src = bitcoinData.image
        binImg.src = ethereumData.image
        solImg.src = dogecoinData.image
       
        



    })
    .catch(err => console.error(err));