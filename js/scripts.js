
$(document).ready(function(){
  var voterAge = parseInt(prompt("Please enter your age in number format?"));
  if (voterAge >= 18) {
      $("#over18").show();
  } else {
      $("#under18").show();
  }
});
