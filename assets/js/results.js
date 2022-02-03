var chosenPoke=JSON.parse(localStorage.getItem("pokeID"))
fetch(`https://api.pokemontcg.io/v2/cards/${chosenPoke}`,{
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
        console.log(data);
        var imageURL=data.data.images.large;
        var pokeName=data.data.name;
        var pokeSetName=data.data.set.name;
        var buyURL=data.data.tcgplayer.url;
       console.log(imageURL);
       $(`<img src="${imageURL}" alt="">`).appendTo("#column1");
       $(`<span class="title">${pokeName}</span>`).appendTo(".cardName");
       $(`<span class="setName">${pokeSetName}</span>`).appendTo(".cardSetName");
       $(`<a href="${buyURL}" target="_blank">Buy Now From TCGPlayer</a>`).appendTo(".line1TCG");
       
    });


