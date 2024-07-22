const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addColor(1000, ".first", "darkblue", "I")
    .then((data) => {
      console.log(data);
      return addColor(3000, ".second", "blue", "love");
    })
    .then((data) => {
      console.log(data);
      return addColor(2000, ".third", "black", "you!");
    })
    .then((data) => console.log(data))
    .catch(error => console.log(error));
});


function addColor(time, selector, color, data) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve(data);
      }, time);
    } else {
      reject(`There is no such element: ${selector}`);
    }
  });
}