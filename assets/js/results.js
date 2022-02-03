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
       
       if ("normal" in data.data.tcgplayer.prices){
        var normalPrices=data.data.tcgplayer.prices.normal;
        $(`<div class="col"><div class=""><h5 class="">normal market</h5><p class="">${normalPrices.market}</p></div></div>`).appendTo(".normal")
        console.log("normal is in the price list");
       }
       
       if ("holofoil" in data.data.tcgplayer.prices){
        var holofoilPrices=data.data.tcgplayer.prices.holofoil;
        $(`<div class="col market"><div class="card-details"><h5 class="heading">holofoil market</h5><p class="">${holofoilPrices.market}</p></div></div>`).appendTo(".holofoil")
        console.log("holofoil is in the price list");
       }

       if ("reverseHolofoil" in data.data.tcgplayer.prices){
        var reverseHolofoilPrices=data.data.tcgplayer.prices.reverseHolofoil;
        $(`<div class="col market"><div class="card-details"><h5 class="heading">reverseHolofoil market</h5><p class="">${reverseHolofoilPrices.market}</p></div></div>`).appendTo(".reverseHolofoil")
        console.log("reverseHolofoil is in the price list");
       }

       if ("1stEditionHolofoil" in data.data.tcgplayer.prices){
        var firststEditionHolofoil=data.data.tcgplayer.prices["1stEditionHolofoil"] ;
        $(`<div class="col market"><div class="card-details"><h5 class="heading">1stEditionHolofoil market</h5><p class="">${firststEditionHolofoil.market}</p></div></div>`).appendTo(".1stEditionHolofoil")
        console.log("1stEditionHolofoil is in the price list");
       }

       if ("1stEditionNormal" in data.data.tcgplayer.prices){
        var firstEditionNormal =data.data.tcgplayer.prices["1stEditionNormal"];
        $(`<div class="col market"><div class="card-details"><h5 class="heading">1stEditionNormal market</h5><p class="">${firstEditionNormal.market}</p></div></div>`).appendTo(".1stEditionNormal")
        console.log("1stEditionNormal is in the price list");
       }
    });


