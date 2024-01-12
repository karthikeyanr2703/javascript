let mainDiv = document.querySelector("body");
let cursorPointer = document.querySelector(".cursor");

mainDiv.addEventListener("mousemove", (dets) => {
  cursorPointer.style.left = dets.x + "px";
  cursorPointer.style.top = dets.y + "px";
});
