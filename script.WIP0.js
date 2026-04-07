let brightness = 255;

// Function to reveal the next button/textarea and adjust brightness
function openNextButton(nextButtonId) {
  let nextElement = document.getElementById(nextButtonId);

  // Reveal element
  nextElement.classList.remove('hidden');

  // Set background color for buttons only (not textarea)
  if (nextElement.tagName === "BUTTON") {
    nextElement.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
    brightness -= 50; // decrease brightness for next button
  }
}