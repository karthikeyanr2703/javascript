let container = document.querySelector(".container");
let likeIcon = document.querySelector("i");

likeIcon.addEventListener("dblclick", () => {
   likeIcon.style.transform = "translate(-50%, -50%) scale(1)";
   likeIcon.style.opacity = 1;
    setTimeout(() => {
    likeIcon.style.opacity = 0;
    },1000)
});     