$(document).ready(function(){
  $("button").click(function(){
    var name = $("#input").val();
  });
  $("body").append(rolldice());
 $("#roll-dice").click(function() {
    
  });
  function rolldice(){
  //Place your code here
  return  Math.floor(Math.random() * 6 ) +1
  
  };
  
});
