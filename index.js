var randomPassword = "";
for (var i = 0; i < 6; i++) {
  randomPassword += String.fromCharCode(Math.floor(Math.random() * 94 + 33));
}
document.write(
  "<div class='container'><h1>Random Password</h1><h1>" +
    randomPassword +
    "</h1><div>"
);
