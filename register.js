//angle slider code
var slider = document.getElementById("angleChoice");
var output = document.getElementById("angleValue");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

//speed slider Code
var slider2 = document.getElementById("speedChoice");
var output2 = document.getElementById("speedValue");
output2.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
  output2.innerHTML = this.value;
}