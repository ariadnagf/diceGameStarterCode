$(document).ready(function(){
  $("button").click(function(){
    var name = $("#input").val();
  });
 
 $("#roll-dice").click(function() {
    $("body").append(rolldice());
    $("#first-die").attr("src","images/4.png");
    $("#second-die").attr("src","images/6.png");
  });
  function rolldice(){
  //Place your code here
  return  Math.floor(Math.random() * 6 ) +1
  
  };
  
});
