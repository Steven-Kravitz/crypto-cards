// POKEMON
var userBtn = $("#userSearchBtn")
var userInput= $("#userSearch").val();
userBtn.on('click',function(event){
event.preventDefault();
userInput= $("#userSearch").val();
localStorage.setItem("userInput",JSON.stringify(userInput))
window.location.assign(href="search.html")
});

// // Getting the first 250 cards
// fetch(`https://api.pokemontcg.io/v2/cards?q=name:${userInput}`,{
//     headers:{
//         "Content-Type":"application/json",
//         "X-Api-Key": "e8bdc35b-8907-45b0-b1c1-eb5d3cd116a6"
//     }
// })
// // Turning into the json object
//     .then(function(response){
//         return response.json()
//     })
// // Drilling down to the first entry
//     .then(function(data){
//         for (i = 0; i < data.data.length; i++){
//         console.log(data.data[i]);
//         console.log(data.data[i].name)
//         console.log(data.data[i].images.large)
//         console.log(data.data[i].tcgplayer.prices)
//     }
//     })

//Attributes we need from tcgpokemonapi. tcgplayer (pricing), name, images, 

    
// COINAPI
// Add if statement swapping API keys at limit
var priscillasApi = "612EED13-BBA7-4E82-AF79-78955F897E68" // :)
var stevensAPI = "865395AE-4F4E-48D5-A825-65822194FDE7" // :D
var jenAPI = "2FEC7249-7A76-4CEB-AB8B-EEEB43C6F19E" // ^-^
var chrisAPI = "EE0B3E38-CFD9-4BEE-8F5D-BF82AE6DD7BF" // O.O

var coinAPIKeys = [priscillasApi, stevensAPI, jenAPI, chrisAPI]
//              0    1       2

// Add more cryptos for later
var cryptoTickers = ['BTC', 'ETH', 'USDT']
// var cryptoInfo ={
//     cryptoID: data.asset_id_quote,
//     cryptoRate: data.rate
//     // data.rate + ":" + data.asset_id_quote
// }



// var cryptoInfo = {}
// for(var i = 0; i < cryptoTickers.length; i++){
// //console.log(i);
//     fetch('https://rest.coinapi.io/v1/exchangerate/USD/' + cryptoTickers[i] + '?apikey=' + coinAPIKeys[0])
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             //console.log(data.rate);
//             //console.log(data.asset_id_quote);
//             cryptoInfo[data.asset_id_quote] = data.rate
//         })
//     sleep(500)
// };
// console.log(cryptoInfo);

// // credit: https://www.sitepoint.com/delay-sleep-pause-wait/
// function sleep(milliseconds){
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }