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
        var pokeID=data.data[j].id
        var pokeSetName=data.data[j].set.name;
        

    $(`<div class="container col" id="card-deck">
            <div class="row cardInfoContainer" id=${pokeID}>
            <img class="card-img card" data-id=${pokeID} src="${cardImage}">
            <h2 class="pokeName" >${pokeName} <br> <span id='setTitle'>${pokeSetName}</h2>  
            </div>          
        </div>
    </div>`).appendTo("#deckBuilder")
    
    if ("normal" in data.data[j].tcgplayer.prices){
        var normalPrices=data.data[j].tcgplayer.prices.normal;
        $(`<div class=""><h5 class="">Normal Market Price: </h5><p class="pokePrice">${normalPrices.market} USD</p></div>`).appendTo(`#${pokeID}`)
        //console.log("normal is in the price list");
       }
       
       if ("holofoil" in data.data[j].tcgplayer.prices){
        var holofoilPrices=data.data[j].tcgplayer.prices.holofoil;
        $(`<div class=""><h5 class="">Holofoil Market Price: </h5><p class="pokePrice">${holofoilPrices.market} USD</p></div>`).appendTo(`#${pokeID}`)
       // console.log("holofoil is in the price list");
       }

       if ("reverseHolofoil" in data.data[j].tcgplayer.prices){
        var reverseHolofoilPrices=data.data[j].tcgplayer.prices.reverseHolofoil;
        $(`<div class=""><h5 class="">Reverse Holofoil Market Price: </h5><p class="pokePrice">${reverseHolofoilPrices.market} USD</p></div>`).appendTo(`#${pokeID}`)
        //console.log("reverseHolofoil is in the price list");
       }

       if ("1stEditionHolofoil" in data.data[j].tcgplayer.prices){
        var firststEditionHolofoil=data.data[j].tcgplayer.prices["1stEditionHolofoil"] ;
        $(`<div class=""><h5 class="">1st Edition Holofoil Market Price: </h5><p class="pokePrice">${firststEditionHolofoil.market} USD</p></div>`).appendTo(`#${pokeID}`)
        //console.log("1stEditionHolofoil is in the price list");
       }

       if ("1stEditionNormal" in data.data[j].tcgplayer.prices){
        var firstEditionNormal =data.data[j].tcgplayer.prices["1stEditionNormal"];
        $(`<div class=""><h5 class="">1st Edition Normal Price: </h5><p class="pokePrice">${firstEditionNormal.market} USD</p></div>`).appendTo(`#${pokeID}`)
        //console.log("1stEditionNormal is in the price list");
       }

        // $(`<div class="row">
        //     <p class="pokeName">${pokeName}</p>  
        // `).appendTo(".cardInfoContainer")
    }})

    }}

$('.container').on('click','.card-img',function(event){
    console.log(event.target.dataset.id);
    var pokeID=event.target.dataset.id;
    localStorage.setItem('pokeID',JSON.stringify(pokeID));
    window.location.assign(href="results.html")
});




$("#userSearchBtn").on('click',function(event){
    event.preventDefault();
    userInput= $("#userSearch").val();
    localStorage.setItem("userInput",JSON.stringify(userInput));
    window.location.assign(href="search.html");
});

$('.clearBtn').on('click', function(event){
    event.preventDefault();
    localStorage.removeItem("deckInput");
    location.reload();
}
)