var deckInput= JSON.parse(localStorage.getItem("deckInput"))
console.log(deckInput);

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



    
    $(
        `<div class="container col ">
            <div class="row cardInfoContainer">
            <img class="card-img card" src="${cardImage}">
            <h2 class="pokeName">${pokeName}</h2>
            </div>
        </div>
    </div>`).appendTo("#deckBuilder")
    
    if ("normal" in data.data[j].tcgplayer.prices){
        var normalPrices=data.data[j].tcgplayer.prices.normal;
        $(`<p class="pokePrice">${normalPrices.market} USD</p>`).appendTo(".cardInfoContainer")
        //console.log("normal is in the price list");
       }
       
       if ("holofoil" in data.data[j].tcgplayer.prices){
        var holofoilPrices=data.data[j].tcgplayer.prices.holofoil;
        $(`<p class="">${holofoilPrices.market} USD</p>`).appendTo(".cardInfoContainer")
       // console.log("holofoil is in the price list");
       }

       if ("reverseHolofoil" in data.data[j].tcgplayer.prices){
        var reverseHolofoilPrices=data.data[j].tcgplayer.prices.reverseHolofoil;
        $(`<p class="">${reverseHolofoilPrices.market} USD</p>`).appendTo(".cardInfoContainer")
        //console.log("reverseHolofoil is in the price list");
       }

       if ("1stEditionHolofoil" in data.data[j].tcgplayer.prices){
        var firststEditionHolofoil=data.data[j].tcgplayer.prices["1stEditionHolofoil"] ;
        $(`<p class="">${firststEditionHolofoil.market} USD</p>`).appendTo(".cardInfoContainer")
        //console.log("1stEditionHolofoil is in the price list");
       }

       if ("1stEditionNormal" in data.data[j].tcgplayer.prices){
        var firstEditionNormal =data.data[j].tcgplayer.prices["1stEditionNormal"];
        $(`<p class="">${firstEditionNormal.market} USD</p>`).appendTo(".cardInfoContainer")
        //console.log("1stEditionNormal is in the price list");
       }

        // $(`<div class="row">
        //     <p class="pokeName">${pokeName}</p>  
        // `).appendTo(".cardInfoContainer")
    }})

    }}

    $("#userSearchBtn").on('click',function(event){
        event.preventDefault();
        userInput= $("#userSearch").val();
        localStorage.setItem("userInput",JSON.stringify(userInput))
        window.location.assign(href="search.html")
    })