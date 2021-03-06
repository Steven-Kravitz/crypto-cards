
var userInput=JSON.parse(localStorage.getItem("userInput"))
getCards(userInput);
console.log(userInput)

function getCards(userInput){
// Getting the first 250 cards
fetch(`https://api.pokemontcg.io/v2/cards?q=name:${userInput}`,{
    headers:{
        "Content-Type":"application/json",
        "X-Api-Key": "e8bdc35b-8907-45b0-b1c1-eb5d3cd116a6"
    }
})
// Turning into the json object
    .then(function(response){
        //console.log(response);
        return response.json()
        
    })
// Drilling down to the first entry
    .then(function(data){
        for (i = 0; i < data.data.length; i++){
        console.log(data.data[i]);
        console.log(data.data[i].name)
        console.log(data.data[i].images.large)
        //console.log(data.data[i].tcgplayer.prices)
        var imageURL=data.data[i].images.large
        var pokeID=data.data[i].id
        $(`<div class="col" id="change">
                <div class="row my-5">
                    <img class="cardClick pokes" data-pokeID=${pokeID} src="${imageURL}">
                </div>
            </div>`).appendTo("#cardContainer")
    }
    if (data.data.length===0){
        console.log("no pokemon by this Name")
        window.location.assign(href="search404.html")
    }
    })
}
$("#userSearchBtn").on('click',function(event){
    event.preventDefault();
    $("#cardContainer").empty();
    userInput= $("#userSearch").val();
    localStorage.setItem("userInput",JSON.stringify(userInput))
    getCards(userInput);
})

$("#cardContainer").on('click',".cardClick", function(event){
    var element = event.target
    console.log(element)
    var pokeID=element.dataset.pokeid;
    localStorage.setItem('pokeID',JSON.stringify(pokeID));
    console.log(pokeID);

    window.location.assign(href="results.html")
})