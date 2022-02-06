var chosenSetId = JSON.parse(localStorage.getItem("setId"))
console.log(chosenSetId)


//Fetching all the cards from a specific set
getSet(chosenSetId)
function getSet(chosenSetId){
    
    fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${chosenSetId}`,{
        
    })

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data.data)
        
            var setName=data.data[0].set.name
            $(`<h2 class="set-name">Set: <span id="text-smaller">${setName}</span></h2>`).appendTo(".set-name")


        for (i = 0; i < data.data.length; i++){
            //console.log(data.data[i]);
            //console.log(data.data[i].name)
            //console.log(data.data[i].images.large)
            
            //Populating the cards for the set to the page
            var imageSetsURL=data.data[i].images.large
            var setsID=data.data[i].id

            $(`<div class="col" id="change">
                    <div class="row my-5">
                        <img id="poke-card" class="cardClick" data-setID=${setsID} src="${imageSetsURL}">
                    </div>
                </div>`).appendTo("#cardContainer")
        
    }})
}


$("#cardContainer").on('click',".cardClick", function(event){
    var element =event.target
    console.log(element)
    var pokeID=element.dataset.setid;
    localStorage.setItem('pokeID',JSON.stringify(pokeID));
    console.log(pokeID);
    window.location.assign(href="results.html")
})


// Search Button functionality 
$("#userSearchBtn").on('click',function(event){
    event.preventDefault();
    userInput= $("#userSearch").val();
    localStorage.setItem("userInput",JSON.stringify(userInput))
    window.location.assign(href="search.html")
})