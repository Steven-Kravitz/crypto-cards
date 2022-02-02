
var userInput=JSON.parse(localStorage.getItem("userInput"))
userInput="pikachu"
// Getting the first 250 cards
fetch(`https://api.pokemontcg.io/v2/cards?q=name:${userInput}`,{
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
        for (i = 0; i < data.data.length; i++){
        console.log(data.data[i]);
        console.log(data.data[i].name)
        console.log(data.data[i].images.large)
        //console.log(data.data[i].tcgplayer.prices)
        var imageURL=data.data[i].images.large
        $(`<div class="col">
        <div class="card">
        <a href="results.html">
            <img class="card-img-top" src="${imageURL}">
        </a>
        </div>
    </div>`).appendTo("#cardContainer")
    }
    })