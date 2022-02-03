fetch('https://api.pokemontcg.io/v2/types')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for(var i = 0; i < data.data.length; i++){
            var mainBox = $("#type-main");
            var h5 = data.data[i];
            $(`<div class="col card"><h5>${h5}</h5></div>`).appendTo(mainBox)
            h5.on("click",)
        };
    });



// https://api.pokemontcg.io/v2/cards?q=types:colorless

// userBtn.on('click',function(event){
//     event.preventDefault();
//     userInput= $("#userSearch").val();
//     localStorage.setItem("userInput",JSON.stringify(userInput))
//     window.location.assign(href="search.html")
// });