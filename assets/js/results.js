

var userInput=JSON.parse(localStorage.getItem("userInput"))
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
        
        var imageURL=data.data[0].images.large
        console.log(imageURL);
        $(`<img src="${imageURL}" alt="">`).appendTo("#column1")
    })

