var user = prompt("Enter user 1 name", "fuzail");
var userSelection = prompt(
  "Enter " + user + " 'H' for Heads and 'T' for Tails"
);
if (userSelection === "H" || userSelection === "T") {
  var randomNumber = Math.floor(Math.random() * 2);
  var html = "";
  var message = "";
  var answer = "H";
  if (randomNumber) {
    answer = "T";
  }

  if (answer === userSelection) {
    message = "Congratulations! " + user + " you won";
  } else {
    message = "Oops! " + user + " you loss";
  }

  document.write(
    "<div class='container'><h1>" +
      (answer === "H" ? "HEAD" : "TAILS") +
      "</h1><h2>" +
      message +
      "</h2><div>"
  );
} else {
  alert("Enter H/T");
}
