fetch('https://api.pokemontcg.io/v2/types')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for(var i = 0; i < data.data.length; i++){
            var mainBox = $("#type-main");
            var h5 = data.data[i];
            $(`<h5 class="my-2 mx-5 py-3 type-name" data-type=${h5}>${h5}</h5>`).appendTo(mainBox)
            }
        $(".type-name").on("click", function(event){
            var el = event.target
            var pokeType = el.dataset.type;
            localStorage.setItem('pokeType', JSON.stringify(pokeType));
            window.location.assign(href="type-results.html");
        })
    });

// search function.
$("#userSearchBtn").on('click',function(event){
    event.preventDefault();
    userInput= $("#userSearch").val();
    localStorage.setItem("userInput",JSON.stringify(userInput))
    window.location.assign(href="search.html")
})

// notes:
// https://api.pokemontcg.io/v2/cards?q=types:colorless

// userBtn.on('click',function(event){
//     event.preventDefault();
//     userInput= $("#userSearch").val();
//     localStorage.setItem("userInput",JSON.stringify(userInput))
//     window.location.assign(href="search.html")
// });