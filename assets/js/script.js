// Getting teh first 250 cards
fetch('https://api.pokemontcg.io/v2/cards',{
    headers:{
        "Content-Type":"application/json",
        "X-Api-Key": "e8bdc35b-8907-45b0-b1c1-eb5d3cd116a6"
    }
})
//turning into the json object
.then(function(response){
    return response.json()
})
//drilling down to the first entry
.then(function(data){
    console.log(data.data[0]);
})