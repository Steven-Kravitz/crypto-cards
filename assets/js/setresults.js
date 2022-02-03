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
        for (i = 0; i < data.data.length; i++){
            //console.log(data.data[i]);
            //console.log(data.data[i].name)
            //console.log(data.data[i].images.large)
            
            //Populating the cards for the set to the page
            var imageSetsURL=data.data[i].images.large
            var setsID=data.data[i].id
            $(`<div class="container col">
                    <div class="row card ">
                        <img class="card-img cardClick" data-setID=${setsID} src="${imageSetsURL}">
                    </div>
                </div>`).appendTo("#cardContainer")

        


    }})
}