letsGoShopping();

function letsGoShopping() {
  var friendName;
  var shopping;
  var whatIsTheBudget;

  friendName = prompt("Hi there! What is your name?");
  //   debugger
  document.getElementById("friendsName").innerHTML = friendName;

  var shopping = prompt("Would you like to go shopping?");

  if (shopping.toLowerCase() === "maybe") {
    alert(
      "Okay, cool! I will be going soon, let me know if you would like to still come :D"
    );

    document.getElementById("rsvpShopping").innerHTML = shopping;
    document.getElementById("spending").style.display = "none";
  } else if (shopping.toLowerCase() === "no") {
    alert("Too bad! Maybe next time :)");

    document.getElementById("rsvpShopping").innerHTML = shopping;
    document.getElementById("spending").style.display = "none";
  } else if (shopping.toLowerCase() === "yes") {
    document.getElementById("rsvpShopping").innerHTML = shopping;

    var whatIsTheBudget = prompt("Let's go! How much would you like to spend?");

    if (whatIsTheBudget >= 35) {
      alert("Sounds like we are going shopping for lots of things today!");
      document.getElementById("budget").innerHTML = whatIsTheBudget;
    } else if (whatIsTheBudget < 35) {
      alert("Cool! We will not be getting too much!");

      document.getElementById("budget").innerHTML = whatIsTheBudget;
    } else if (typeof whatIsTheBudget === "string") {
      whatIsTheBudget = prompt("Numbers only, please.");
    }

    console.log(friendName);
    console.log(shopping);
    console.log(whatIsTheBudget);
  }
}
