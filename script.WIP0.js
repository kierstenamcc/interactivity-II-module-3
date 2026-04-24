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
    if (!template || !layer) {
      console.error("Missing template or layer");
      return;
    }

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

  // 🖱️ SINGLE CLICK SYSTEM
  document.addEventListener("click", (e) => {

    // ❌ CLOSE
    if (e.target.closest(".close")) {
      const win = e.target.closest(".xp-window");
      if (win) {
        win.remove();
        playSound();
      }
      return;
    }

    // ❌ OK
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
      e.target.closest(".icon") ||
      e.target.closest(".xp-window") ||
      e.target.closest(".taskbar") ||
      e.target.closest("a")
    ) return;

    // 💥 DESKTOP CLICK
    makeWindow(e.clientX, e.clientY);
    playSound();

  });

  // 🖱️ ICON LINKS (ONLY ONCE)
  document.querySelectorAll(".icon").forEach(icon => {
    icon.addEventListener("dblclick", () => {
      const link = icon.dataset.link;
      if (link) window.open(link, "_blank");
    });
  });

});

document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("dblclick", () => {
    makeWindow(
      window.innerWidth / 2,
      window.innerHeight / 2
    );
  });
});

  // GRID SNAP ICONS (broken?)
  const GRID = 100;

  function snap(v) {
    return Math.round(v / GRID) * GRID;
  }

    // double click → OPEN WINDOW
    icon.addEventListener("dblclick", (e) => {
      makeWindow(e.clientX, e.clientY);
      playSound();
    });

document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("dblclick", () => {
    const link = icon.dataset.link;
    if (link) window.open(link, "_blank");
  });
});

  // Chatbox info

