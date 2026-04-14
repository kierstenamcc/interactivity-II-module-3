document.addEventListener("DOMContentLoaded", function() {
const container = document.querySelector(".items");
let imageIndex = 1;
let animationTimeout = null;
let currentlyPlaying = false;

function addNewItem(x, y) {
    const newItem = document.createElement("div");
    newItem.className = "item";
    newItem.style.left = `${x - 75}px`;
    newItem.style.top = `${y - 100}px`;

    const img = document.createElement("img");
    img.src=`https://raw.githubusercontent.com/kierstenmcc/interactivity-II-module-3/main/images/image${imageIndex}.png`;
    newItem.appendChild(img);
    imageIndex = (imageIndex % 15) + 1;

container.appendChild(newItem);
manageItemLimit();
}

function manageItemLimit() {
  while (container.children.length > 20) {
    container.removeChild(container.firstChild);
  }
}

function startAnimation() {
  if (currentlyPlaying || container.children.length === 0) return;


});