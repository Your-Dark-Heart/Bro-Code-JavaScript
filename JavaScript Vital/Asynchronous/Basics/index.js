setTimeout(() => {console.log("Hello!"); callback()}, 3000);


function callback() {
  console.log(1)
  console.log(2)
  console.log(3)
}
