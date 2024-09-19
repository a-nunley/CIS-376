// $('body').css("background-color","yellow");             //when button clicked
$("#btnGetAnimal").on("click", function(){
  let spiritAnimals = ["🦅","🌵","🐟","🐍","👾","🦆"," File not found" ]
//get user name
  let bakerName = $("#bakerName").val();
//give greeting

  let randomAnimal = spiritAnimals[(Math.floor(Math.random() * spiritAnimals.length))]
  $("#greetingArea").text("Hi there, " + bakerName + "!");
  
  
  $("#animalArea").text("Your spirit animal is" + randomAnimal);
//next also tell spirit animal
  
//go cardinals
} )