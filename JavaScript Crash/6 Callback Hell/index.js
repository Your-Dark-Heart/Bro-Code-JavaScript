const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");


const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    first.style.color = "darkblue";
    setTimeout(() => {
      second.style.color = "blue";
      setTimeout(() => {
        third.style.color = "black";
      }, 3000);
    }, 2000);
  }, 1000);
})
