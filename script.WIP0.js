
document.addEventListener("DOMContentLoaded", () => {

  // 🎧 SOUND
  const xpSound = new Audio("assets/audio/xp-error.mp3");
  xpSound.volume = 0.5;

  function playSound() {
    xpSound.currentTime = 0;
    xpSound.play().catch(() => {});
  }

  // 🪟 WINDOW SYSTEM
  const template = document.getElementById("xpBox");
  const layer = document.querySelector(".windows-layer");

  let topZ = 1000;

  function makeWindow(x, y) {
    if (!template || !layer) return;

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
      xp.style.zIndex = ++topZ;
    });

    document.addEventListener("mousemove", (e) => {
      if (!dragging) return;
      xp.style.left = (e.clientX - ox) + "px";
      xp.style.top = (e.clientY - oy) + "px";
    });

    document.addEventListener("mouseup", () => {
      dragging = false;
    });
  }

  // 🧠 ONE CLEAN CLICK HANDLER
  document.addEventListener("click", (e) => {

    // ❌ CLOSE BUTTON
    if (e.target.closest(".close")) {
      const win = e.target.closest(".xp-window");
      if (win) {
        win.remove();
        playSound();
      }
      return;
    }

    // ❌ OK BUTTON
    if (e.target.closest(".xp-ok")) {
      const win = e.target.closest(".xp-window");
      if (win) {
        win.remove();
        playSound();
      }
      return;
    }

    

    // 🚫 IGNORE UI
    if (
      e.target.closest(".xp-window") ||
      e.target.closest(".icon") ||
      e.target.closest(".taskbar")
    ) return;

    // 💥 DESKTOP CLICK → spawn window
    makeWindow(e.clientX, e.clientY);
    playSound();
  });


document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("dblclick", () => {
    makeWindow(
      window.innerWidth / 2,
      window.innerHeight / 2
    );
  });
});



  // 🧲 GRID SNAP ICONS
  const GRID = 100;

  function snap(v) {
    return Math.round(v / GRID) * GRID;
  }

  document.querySelectorAll(".icon").forEach(icon => {

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    icon.addEventListener("mousedown", (e) => {
      dragging = true;


      offsetX = e.clientX - icon.offsetLeft;
      offsetY = e.clientY - icon.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
      if (!dragging) return;

      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;

      // 🧲 SNAP
      icon.style.left = snap(x) + "px";
      icon.style.top = snap(y) + "px";
    });

    document.addEventListener("mouseup", () => {
      dragging = false;
    });

    // 🪟 DOUBLE CLICK → OPEN WINDOW
    icon.addEventListener("dblclick", (e) => {
      makeWindow(e.clientX, e.clientY);
      playSound();
    });

  });

});

document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("dblclick", () => {
    const link = icon.dataset.link;
    if (link) window.open(link, "_blank");
  });
});

