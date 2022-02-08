// credit: https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds){
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
    }

// Add if statement swapping API keys at limit
var priscillasApi = "612EED13-BBA7-4E82-AF79-78955F897E68" // :)
var stevensAPI = "865395AE-4F4E-48D5-A825-65822194FDE7" // :D
var jenAPI = "2FEC7249-7A76-4CEB-AB8B-EEEB43C6F19E" // ^-^
var chrisAPI = "EE0B3E38-CFD9-4BEE-8F5D-BF82AE6DD7BF" // O.O
var API4 = "0170C7D3-5CE3-439D-9CD6-03FCCAB690D8" // >_>
var API5 = "560272A5-C7A4-4E7F-A828-1CFF45654C33" //o_O
var coinAPIKeys = [priscillasApi, stevensAPI, jenAPI, chrisAPI,API4,API5]
// Add more cryptos for later
//                    1        2       3
var cryptoTickers = ['BTC', 'ETH', 'USDT'];
var cryptoInfo = {};
var chosenPoke=JSON.parse(localStorage.getItem("pokeID"))
//load in Crypto Rates

for(var i = 0; i < cryptoTickers.length; i++){
    fetch('https://rest.coinapi.io/v1/exchangerate/USD/' + cryptoTickers[i] + '?apikey=' + coinAPIKeys[2])
        .then(function(response){
            // console.log(response)
            return response.json();
        }).then(function(data){
            cryptoInfo[data.asset_id_quote]=data.rate;
        }).then(function(){})

sleep(500)
}


fetch(`https://api.pokemontcg.io/v2/cards/${chosenPoke}`,{
    headers:{
        "Content-Type":"application/json",
        "X-Api-Key": "e8bdc35b-8907-45b0-b1c1-eb5d3cd116a6"
    }
})
// Turning into the json object
    .then(function(response){
        return response.json()
    })
// Drilling down to the first entry
    .then(function(data){
        //console.log(data);
        var imageURL=data.data.images.large;
        var pokeName=data.data.name;
        var pokeSetName=data.data.set.name;
       //console.log(imageURL);

       var buyURL = data.data.tcgplayer.url;

        // poke image
       $(`<img src="${imageURL}" alt="pokemon card" id="poke-pic" class="my-4">`).appendTo("#poke-image");
       // poké detail
       $(`<h2 id="poke-name" class="mt-5 mb-3">${pokeName}  </h2>
            <h5 class="text-muted mb-3">${pokeSetName}</h5>
            <div class="my-2">
                <h5 id="mp-tcg-title">Market Price by TCGplayer (◍ㅇᆽㅇ◍)</h5>
                <a href="${buyURL}" target="_blank" id="buy-now-tcg">Buy now from TCGPlayer!</a>
            </div>
            <div id="poke-prices" class="my-3"></div>
            <button class="deckBtn btn btn-dark my-2">Add to Deck</button>`).appendTo("#poke-detail");

            var pokeType=data.data.types[0]
            switch(pokeType){
             case 'Lightning':
                 $(`<img id="pokeType" src="assets/img/electric.png" alt="electric type symbol">`).appendTo("#poke-name");
                 break;
             case 'Colorless':
                 $(`<img id="pokeType" src="assets/img/colorless.png" alt="colorless type symbol"></span>`).appendTo("#poke-name");
                 break;
             case 'Dark':
                 $(`<img id="pokeType" src="assets/img/dark.png" alt="dark type symbol">`).appendTo("#poke-name");
                 break;
             case 'Fairy':
                 $(`<img id="pokeType" src="assets/img/fairy.png" alt="fairy type symbol">`).appendTo("#poke-name");
                 break;
             case 'Fighting':
                 $(`<img id="pokeType" src="assets/img/fighting.png" alt="fighting type symbol">`).appendTo("#poke-name");
                 break;
             case 'Fire':
                 $(`<img id="pokeType" src="assets/img/fire.png" alt="fire type symbol">`).appendTo("#poke-name");
                 break;
             case 'Grass':
                 $(`<img id="pokeType" src="assets/img/grass.png" alt="grass type symbol">`).appendTo("#poke-name");
                 break;
             case 'Metal':
                 $(`<img id="pokeType" src="assets/img/metal.png" alt="metal type symbol">`).appendTo("#poke-name");
                 break;
             case 'Dragon':
                 $(`<img id="pokeType" src="assets/img/dragon.png" alt="dragon type symbol">`).appendTo("#poke-name");
                 break;
             case 'Psychic':
                 $(`<img id="pokeType" src="assets/img/psychic.png" alt="psychic type symbol">`).appendTo("#poke-name");
                 break;
             case 'Water':
                 $(`<img id="pokeType" src="assets/img/water.png" alt="water type symbol">`).appendTo("#poke-name");
                 break;
                 default:
                 };


       if ("normal" in data.data.tcgplayer.prices){
        var normalPrices = data.data.tcgplayer.prices.normal;
        $(`<h5>Normal Market Price: ${normalPrices.market} USD</h5>`).appendTo("#poke-prices")
        normalPriceInCrypto={}
        
        for(i=0;i<cryptoTickers.length;i++){
            var dummy=Object.keys(cryptoInfo)[i]
            //console.log(cryptoInfo[dummy]);
            normalPriceInCrypto[dummy]=(normalPrices.market)*(cryptoInfo[dummy]);
        }
        $(`<h5>Bitcoin: ${(normalPriceInCrypto.BTC).toFixed(5)} BTC</h5>`).appendTo("#poke-prices")
        $(`<h5>Ethereum: ${(normalPriceInCrypto.ETH).toFixed(5)} ETH</h5>`).appendTo("#poke-prices")
        $(`<h5>Tether: ${(normalPriceInCrypto.USDT).toFixed(5)} USDT</h5>`).appendTo("#poke-prices")
        //console.log("normal is in the price list");
       }
       
       if ("holofoil" in data.data.tcgplayer.prices){
        var holofoilPrices=data.data.tcgplayer.prices.holofoil;
        $(`<h5>Holofoil Market Price: ${holofoilPrices.market} USD</h5>`).appendTo("#poke-prices")
        holofoilPriceInCrypto={}
        for(i=0;i<cryptoTickers.length;i++){
            var dummy=Object.keys(cryptoInfo)[i]
            //console.log(cryptoInfo[dummy]);
            holofoilPriceInCrypto[dummy]=(holofoilPrices.market)*(cryptoInfo[dummy]);
        }
        $(`<h5>Bitcoin: ${(holofoilPriceInCrypto.BTC).toFixed(5)} BTC</h5>`).appendTo("#poke-prices")
        $(`<h5>Ethereum: ${(holofoilPriceInCrypto.ETH).toFixed(5)} ETH</h5>`).appendTo("#poke-prices")
        $(`<h5>Tether: ${(holofoilPriceInCrypto.USDT).toFixed(5)} USDT</h5>`).appendTo("#poke-prices")
       // console.log("holofoil is in the price list");
       }

       if ("reverseHolofoil" in data.data.tcgplayer.prices){
        var reverseHolofoilPrices=data.data.tcgplayer.prices.reverseHolofoil;
        $(`<h5>Reverse Holofoil Market Price: ${reverseHolofoilPrices.market} USD</h5>`).appendTo("#poke-prices")
        reverseHolofoilPriceInCrypto={}
        
        for(i=0;i<cryptoTickers.length;i++){
            var dummy=Object.keys(cryptoInfo)[i]
            //console.log(cryptoInfo[dummy]);
            reverseHolofoilPriceInCrypto[dummy]=(reverseHolofoilPrices.market)*(cryptoInfo[dummy]);
        }
        $(`<h5>Bitcoin: ${(reverseHolofoilPriceInCrypto.BTC).toFixed(5)} BTC</h5>`).appendTo("#poke-prices")
        $(`<h5>Ethereum: ${(reverseHolofoilPriceInCrypto.ETH).toFixed(5)} ETH</h5>`).appendTo("#poke-prices")
        $(`<h5>Tether: ${(reverseHolofoilPriceInCrypto.USDT).toFixed(5)} USDT</h5>`).appendTo("#poke-prices")

        //console.log("reverseHolofoil is in the price list");
       }

       if ("1stEditionHolofoil" in data.data.tcgplayer.prices){
        var firststEditionHolofoil=data.data.tcgplayer.prices["1stEditionHolofoil"];
        $(`<h5>1st Edition Holofoil Market Price: ${firststEditionHolofoil.market} USD</h5>`).appendTo("#poke-prices")
        firststEditionHolofoilHolofoilPriceInCrypto={}
        
        for(i=0;i<cryptoTickers.length;i++){
            var dummy=Object.keys(cryptoInfo)[i]
            //console.log(cryptoInfo[dummy]);
            firststEditionHolofoilHolofoilPriceInCrypto[dummy]=(firststEditionHolofoil.market)*(cryptoInfo[dummy]);
        }
        $(`<h5>Bitcoin: ${(firststEditionHolofoilHolofoilPriceInCrypto.BTC).toFixed(5)} BTC</h5>`).appendTo("#poke-prices")
        $(`<h5>Ethereum: ${(firststEditionHolofoilHolofoilPriceInCrypto.ETH).toFixed(5)} ETH</h5>`).appendTo("#poke-prices")
        $(`<h5>Tether: ${(firststEditionHolofoilHolofoilPriceInCrypto.USDT).toFixed(5)} USDT</h5>`).appendTo("#poke-prices")

        //console.log("1stEditionHolofoil is in the price list");
       }

       if ("1stEditionNormal" in data.data.tcgplayer.prices){
        var firstEditionNormal =data.data.tcgplayer.prices["1stEditionNormal"];
        $(`<h5>1st Edition Normal Market Price: ${firstEditionNormal.market} USD</h5>`).appendTo("#poke-prices")
        firstEditionNormalPriceInCrypto={}
        
        for(i=0;i<cryptoTickers.length;i++){
            var dummy=Object.keys(cryptoInfo)[i]
            console.log(cryptoInfo[dummy]);
            firstEditionNormalPriceInCrypto[dummy]=(firstEditionNormal.market)*(cryptoInfo[dummy]);
        }
        $(`<h5>Bitcoin: ${(firstEditionNormalPriceInCrypto.BTC).toFixed(5)} BTC</h5>`).appendTo("#poke-prices")
        $(`<h5>Ethereum: ${(firstEditionNormalPriceInCrypto.ETH).toFixed(5)} ETH</h5>`).appendTo("#poke-prices")
        $(`<h5>Tether: ${(firstEditionNormalPriceInCrypto.USDT).toFixed(5)} USDT</h5>`).appendTo("#poke-prices")
        //console.log("1stEditionNormal is in the price list");
       }
       if ("unlimitedHolofoil" in data.data.tcgplayer.prices){
        var unlimitedHolofoil =data.data.tcgplayer.prices["unlimitedHolofoil"];
        $(`<h5>Unlimited Holofoil Market Price: ${unlimitedHolofoil.market} USD</h5>`).appendTo("#poke-prices")
        unlimitedHolofoilPriceInCrypto={}
        
        for(i=0;i<cryptoTickers.length;i++){
            var dummy=Object.keys(cryptoInfo)[i]
            console.log(cryptoInfo[dummy]);
            unlimitedHolofoilPriceInCrypto[dummy]=(unlimitedHolofoil.market)*(cryptoInfo[dummy]);
        }
        $(`<h5>Bitcoin: ${(unlimitedHolofoilPriceInCrypto.BTC).toFixed(5)} BTC</h5>`).appendTo("#poke-prices")
        $(`<h5>Ethereum: ${(unlimitedHolofoilPriceInCrypto.ETH).toFixed(5)} ETH</h5>`).appendTo("#poke-prices")
        $(`<h5>Tether: ${(unlimitedHolofoilPriceInCrypto.USDT).toFixed(5)} USDT</h5>`).appendTo("#poke-prices")
        //console.log("unlimitedHolofoil is in the price list");
       };
       
    });


$("#userSearchBtn").on('click',function(event){
    event.preventDefault();
    userInput= $("#userSearch").val();
    localStorage.setItem("userInput",JSON.stringify(userInput))
    window.location.assign(href="search.html")
})

$("#poke-detail").on('click', ".deckBtn", function(event){
    event.preventDefault();
    var deckInput= JSON.parse(localStorage.getItem("deckInput")) || []
    // var deckInputExist
// Create a string in the array on button press, if the local storage is empty start a new storage array, if there are existing values add to the current array
    if(deckInput.includes(chosenPoke)){

    }
    else{
        deckInput.push(chosenPoke);
    }
    localStorage.setItem("deckInput", JSON.stringify(deckInput))
    console.log(deckInput)
    window.location.assign(href="my-deck.html")
})