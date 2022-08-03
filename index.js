function trafficLightMouseOverHandler(element, classColor) {
  var bulbLights = document.getElementsByClassName(element.classList[0]);
  for (var i = 0; i < bulbLights.length; i++) {
    bulbLights[i].classList.remove("red", "yellow", "green");
  }
  element.classList.add(classColor);
}
