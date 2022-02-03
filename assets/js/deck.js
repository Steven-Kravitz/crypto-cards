var deckInput= ["xy1-1", "xyp-XY171", "ex10-1", "mcd18-4", "base6-5"]
// JSON.parse(localStorage.getItem("deckCard"))
// getCards(deckInput);
getCards(deckInput)
function getCards(deckInput){
    for(i=0; i < deckInput.length; i++){
// Getting the first 250 cards
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
        for (i = 0; i < data.data.length; i++){
        console.log(data.data[i]);
        console.log(data.data[i].name)
        console.log(data.data[i].images.small)
        //console.log(data.data[i].tcgplayer.prices)
        var cardImage=data.data[i].images.small
        $(`<div class="container col">
            <img class="card-img card" data-pokeID=${deckInput} src="${cardImage}">
        </div>
    </div>`).appendTo("#deckBuilder")
        }})
    }}