var suit = ["Heart", "Diamond", "Club", "Spade"];
var rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];


function deckFunction (suitP, rankP) {
  var newArray = [];
  suitP.forEach(function(suitP){
    rankP.forEach(function(rankP){
      newArray.push(rankP + " of " + suitP)
    });
  });
  return newArray;
};







$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    var result = deckFunction(suit, rank);
    result.forEach(function(thisResult){
      $("ul").append("<li>" + thisResult + "</li>")


    })


  });
});
