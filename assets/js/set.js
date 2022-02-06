// Getting the data from the API
fetch('https://api.pokemontcg.io/v2/sets')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data.data);
        // console.log(data)
        
        for (var i=0; i<data.data.length; i++){
        var setName = data.data[i].name
        var setId = data.data[i].id
        // console.log(setName)
        //console.log(data.data[i].name)
        $(`<h5 id="set-name" class="my-4 mx-2" data-setid=${setId} data-name=${setName}>${setName}</h5>`).appendTo("#all-sets")

// <button id="set-name" type="button" class="btn btn-success btn-lg my-3 mx-3" data-setid=${setId} data-name=${setName}>${setName}</button>

        // Each word is a button. weird click event only works when its h5, not when you target by id name "set-name" ...
        $("h5").on('click',function(event){
            var el = event.target
            console.log(el)
            var setId = el.dataset.setid
            localStorage.setItem('setId',JSON.stringify(setId));
            console.log(setId);
        
            window.location.assign(href="set-results.html")
        })
    }
})
// Search Button functionality 
$("#userSearchBtn").on('click',function(event){
    event.preventDefault();
    userInput= $("#userSearch").val();
    localStorage.setItem("userInput",JSON.stringify(userInput))
    window.location.assign(href="search.html")
})