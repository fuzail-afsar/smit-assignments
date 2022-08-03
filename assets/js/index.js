var left = 20;
var imagesPath = "./assets/images";
var characterImagesPath = imagesPath + "/character";

window.onkeydown = function (event) {
  var character = document.getElementById("user-character");

  if (event.keyCode === 39) {
    console.log(character.width);
    console.log(window.innerWidth);
    if (left > window.innerWidth - character.width - 10) return;
    left += 20;
    character.src = characterImagesPath + "/character-move.gif";
    character.style.left = left + "px";
  }

  if (event.keyCode === 37) {
    if (left < 0) return;
    left -= 20;
    character.src = characterImagesPath + "/character-move.gif";
    character.style.left = left + "px";
  }

  if (event.keyCode === 65) {
    character.src = characterImagesPath + "/character-attack.gif";
  }
  setTimeout(function () {
    character.src = characterImagesPath + "/character-stop.gif";
  }, 1000);
};
