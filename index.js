var userSelection = +prompt("Enter 1-6 digits for dice");
if (userSelection >= 1 && userSelection <= 6) {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var html = "";
  var message = "";

  if (randomNumber === userSelection) {
    message = "Congratulations! you won";
  } else {
    message = "Oops! you loss";
  }

  document.write(
    "<div class='container'><h1>" +
      randomNumber +
      "</h1><h2>" +
      message +
      "</h2><div>"
  );
} else {
  alert("Enter 1-6 digits only");
}
