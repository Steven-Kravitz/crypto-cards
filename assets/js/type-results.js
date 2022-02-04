// search function.
$("#userSearchBtn").on('click',function(event){
    event.preventDefault();
    userInput= $("#userSearch").val();
    localStorage.setItem("userInput",JSON.stringify(userInput))
    window.location.assign(href="search.html")
});

var pokeType = JSON.parse(localStorage.getItem("pokeType"));

getCards(pokeType);

function getCards(pokeType){
    fetch(`https://api.pokemontcg.io/v2/cards?q=types:${pokeType}`,{
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
            // var typeName = data.data[0].set.name
            // $(`<h1 class="set-name">Set: ${setName}</h1>`).appendTo(".set-name")
            for (i = 0; i < data.data.length; i++){
            console.log(data.data[i]);
            console.log(data.data[i].name)
            console.log(data.data[i].images.large)
            //console.log(data.data[i].tcgplayer.prices)
            var imageURL=data.data[i].images.large
            var pokeID=data.data[i].id
            $(`<div class="container col" id="change">
            <div class="row card mt-5">
                <img class="card-img-top cardClick" data-pokeID=${pokeID} src="${imageURL}">
            </div>
        </div>`).appendTo("#type-container")
        }
        })
}

$("#type-container").on('click',".cardClick", function(event){
    var element = event.target
    console.log(element)
    var pokeID = element.dataset.pokeid;
    localStorage.setItem('pokeID',JSON.stringify(pokeID));
    console.log(pokeID);
    window.location.assign(href="results.html")
})