// Getting the data from the API
fetch('https://api.pokemontcg.io/v2/sets')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.data);
        console.log(data)
        
        for (var i=0; i<data.data.length; i++){
        var setName = data.data[i].name
        var setId = data.data[i].id
        //console.log(setId)
        //console.log(data.data[i].name)
        $(`<div class"container" id="set-id-name">
        <p class="setname" data-setid=${setId}>${setName}</p>
        </div>`).appendTo("#all-sets")

        // Each word is a button
        $("p").on('click',function(event){
            var el = event.target
            console.log(el)
            var setId = el.dataset.setid
            localStorage.setItem('setId',JSON.stringify(setId));
            console.log(setId);
        
            window.location.assign(href="setresults.html")
        })
    }
    })


// this is the js code I got from the api docs. -p☆
// pokemon.set.all()
//   .then((sets) => {
//       console.log(sets[0].name)
//   })

// sets may be too much at the moment! -priscilla.


// $("button").on('click',function(event){
//     //var el = event.target
//     //console.log(el)
//     var setId = el.dataset.setid;
//     localStorage.setItem('setId',JSON.stringify(setId));
//     console.log(setId);

//     window.location.assign(href="results.html")
// })