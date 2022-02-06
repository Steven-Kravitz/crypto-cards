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
    fetch('https://rest.coinapi.io/v1/exchangerate/USD/' + cryptoTickers[i] + '?apikey=' + coinAPIKeys[1])
        .then(function(response){
            return response.json();
        }).then(function(data){
            cryptoInfo[data.asset_id_quote]=data.rate;
        }).then(function(){})

sleep(500)
}




var deckInput= JSON.parse(localStorage.getItem("deckInput"))
console.log(deckInput);
// when user searches, goes to search page.
$("#userSearchBtn").on('click',function(event){
    event.preventDefault();
    userInput= $("#userSearch").val();
    localStorage.setItem("userInput",JSON.stringify(userInput));
    window.location.assign(href="search.html");
});

getCards(deckInput);
function getCards(deckInput){
    for(i=0; i < deckInput.length; i++){
// Getting the first 250 cards
console.log(deckInput[i]);
fetch(`https://api.pokemontcg.io/v2/cards?q=id:${deckInput[i]}`,{
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
        for (j = 0; j < data.data.length; j++){
        console.log(data.data[j]);
        // console.log(data.data[j].name)
        // console.log(data.data[j].images.small)
        // console.log(data.data[j].tcgplayer.prices)
        var cardImage=data.data[j].images.small
        var pokeName=data.data[j].name
        var pokeID=data.data[j].id
        var pokeSetName=data.data[j].set.name;
        var setId = data.data[j].set.id
        console.log(setId)
        
    // each card that is added to My Deck gets a row with cols inside.
    $(`<div class="row py-2" id="card-deck">
            <div class="col-3"><img class="pokeCard" data-id=${pokeID} src="${cardImage}"></div>
            <div class="col-9 pokeInfo py-4 px-4">
            <button class="removeBtn btn" data-id=${pokeID}>Remove Card</Button>
            <h3>${pokeName}</h3>
            <h5 class="text-muted" data-setid="${setId}"id='setTitle'>${pokeSetName}</h5>
            <div id=${pokeID} class="py-3"></div>
            </div>
        </div>`).appendTo("#deckBuilder")

        $('#deckBuilder').on('click', '.removeBtn', function(event){
            event.stopPropagation();
            console.log(`You clicked button ${pokeID}`)
        })
    
    if ("normal" in data.data[j].tcgplayer.prices){
        var normalPrices=data.data[j].tcgplayer.prices.normal;
        $(`<h5>Normal Market Price: ${normalPrices.market} USD</h5>`).appendTo(`#${pokeID}`)
        //console.log("normal is in the price list");
       }
       
       if ("holofoil" in data.data[j].tcgplayer.prices){
        var holofoilPrices=data.data[j].tcgplayer.prices.holofoil;
        $(`<h5>Holofoil Market Price: ${holofoilPrices.market} USD</h5>`).appendTo(`#${pokeID}`)
       // console.log("holofoil is in the price list");
       }

       if ("reverseHolofoil" in data.data[j].tcgplayer.prices){
        var reverseHolofoilPrices=data.data[j].tcgplayer.prices.reverseHolofoil;
        $(`<h5>Reverse Holofoil Market Price: ${reverseHolofoilPrices.market} USD</h5>`).appendTo(`#${pokeID}`)
        //console.log("reverseHolofoil is in the price list");
       }

       if ("1stEditionHolofoil" in data.data[j].tcgplayer.prices){
        var firststEditionHolofoil=data.data[j].tcgplayer.prices["1stEditionHolofoil"] ;
        $(`<h5>1st Edition Holofoil Market Price: ${firststEditionHolofoil.market} USD</h5>`).appendTo(`#${pokeID}`)
        //console.log("1stEditionHolofoil is in the price list");
       }

       if ("1stEditionNormal" in data.data[j].tcgplayer.prices){
        var firstEditionNormal =data.data[j].tcgplayer.prices["1stEditionNormal"];
        $(`<h5>1st Edition Normal Price: ${firstEditionNormal.market} USD</h5>`).appendTo(`#${pokeID}`)
        //console.log("1stEditionNormal is in the price list");
       }
        // $(`<div class="row">
        //     <p class="pokeName">${pokeName}</p>  
        // `).appendTo(".cardInfoContainer")
        $('#setTitle').on('click',function(event){
            var el = event.target
                console.log(el)
                var setId = el.dataset.setid
                localStorage.setItem('setId',JSON.stringify(setId));
                console.log(setId);
                
                window.location.assign(href="set-results.html")
        });
    }})

    }}
// if user clicks on card it'll take them to results page to give more info.
$('.container').on('click','.pokeCard',function(event){
    console.log(event.target.dataset.id);
    var pokeID=event.target.dataset.id;
    localStorage.setItem('pokeID',JSON.stringify(pokeID));
    window.location.assign(href="results.html")
});


$('.clearBtn').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem("deckInput");
    location.reload();
}
)


