

document.addEventListener("DOMContentLoaded", () => {

  const xpSound = new Audio("https://www.myinstants.com/media/sounds/windows-xp-error.mp3");
xpSound.volume = 0.5;

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

