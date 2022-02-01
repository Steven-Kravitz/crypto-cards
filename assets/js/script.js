// Getting the first 250 cards
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

var crypto =['BTC', 'ETH', 'UDST']
for(var i=0; i<crypto.length; i++){
    console.log(i)
fetch(	'https://rest.coinapi.io/v1/exchangerate/'+crypto[i]+'/USD?apikey=EE0B3E38-CFD9-4BEE-8F5D-BF82AE6DD7BF')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
}