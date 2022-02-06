$("#userSearchBtn").on('click',function(event){
    event.preventDefault();
    $("#cardContainer").empty();
    userInput= $("#userSearch").val();
    localStorage.setItem("userInput",JSON.stringify(userInput))
    getCards(userInput);
})