let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function updateWindowDimensions() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}

window.addEventListener("resize", updateWindowDimensions);

export { windowWidth, windowHeight };