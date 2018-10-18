$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));
    console.log(age);
  if (age > 21) {
    $("div.drinks").show();
  } else if (age === 21) {
      alert("Congrats on being 21! Don't go too crazy!")
      $("div.drinks").show();
  } else {
    $("div.under21").show();
  }
});
