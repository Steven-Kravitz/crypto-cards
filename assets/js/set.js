fetch('https://api.pokemontcg.io/v2/sets')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.data);
    })


// this is the js code I got from the api docs. -p☆
// pokemon.set.all()
//   .then((sets) => {
//       console.log(sets[0].name)
//   })

// sets may be too much at the moment! -priscilla.