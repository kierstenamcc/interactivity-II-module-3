document.addEventListener("DOMContentLoaded", () => {

const xpSound = new Audio("assets/audio/xp-error.mp3");
xpSound.volume = 0.5;

xpSound.play();

function playSound() {
  xpSound.currentTime = 0;
  xpSound.play().catch(() => {});
}

document.addEventListener("click", (e) => {
  makeWindow(e.clientX, e.clientY);
  playSound();
});

  const template = document.getElementById("xpBox");
  const layer = document.querySelector(".windows-layer");

  let topZ = 1000;

  function makeWindow(x, y) {
    console.log("makeWindow fired");

    if (!template) return console.error("NO TEMPLATE");
    if (!layer) return console.error("NO LAYER");

    const xp = template.cloneNode(true);

    xp.style.display = "block";
    xp.style.position = "absolute";
    xp.style.left = x + "px";
    xp.style.top = y + "px";
    xp.style.zIndex = ++topZ;

    layer.appendChild(xp);

    const titleBar = xp.querySelector(".xp-title-bar");

    let dragging = false;
    let ox = 0, oy = 0;

    titleBar.addEventListener("mousedown", (e) => {
      dragging = true;
      ox = e.clientX - xp.offsetLeft;
      oy = e.clientY - xp.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
      if (!dragging) return;
      xp.style.left = (e.clientX - ox) + "px";
      xp.style.top = (e.clientY - oy) + "px";
    });

    document.addEventListener("mouseup", () => dragging = false);
  }

  document.addEventListener("click", (e) => {
    console.log("click registered");
    makeWindow(e.clientX, e.clientY);
  });

});

document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("dblclick", (e) => {
    makeWindow(e.clientX, e.clientY);
  });
});

document.querySelectorAll(".icon").forEach(icon => {
  let dragging = false;
  let offsetX, offsetY;

  icon.addEventListener("mousedown", (e) => {
    dragging = true;
    offsetX = e.clientX - icon.offsetLeft;
    offsetY = e.clientY - icon.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    icon.style.left = (e.clientX - offsetX) + "px";
    icon.style.top = (e.clientY - offsetY) + "px";
    icon.style.position = "absolute";
  });

  document.addEventListener("mouseup", () => {
    dragging = false;
  });
});