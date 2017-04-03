$(document).ready(function(){
  $("button").click(function(){
    var name = $("#input").val();
  });
 
 $("#roll-dice").click(function() {
    $("body").append(rolldice());
  });
  function rolldice(){
  //Place your code here
  return  Math.floor(Math.random() * 6 ) +1
  
  };
  
});
