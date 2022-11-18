let moneyBtns = document.querySelectorAll(".btn");
let leftInput = document.querySelector("#left-input");
// moneyBtn?.addEventListener('click', () => {
//     console.log('a')
// })
let selected = false;
moneyBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    selected = true;
  });
});
let currency;

fetch("https://api.exchangerate.host/latest?base=EUR&symbols=RUB")
  .then((res) => res.json())
  .then((data) => {
    leftInput?.setAttribute("value", Object.values(data.rates)[0]);
  });

function myFunction(str) {
  let b1 = document.querySelector(".btn1");
  let b2 = document.querySelector(".btn2");
  let b3 = document.querySelector(".btn3");
  let b4 = document.querySelector(".btn4");
  if (str == "two") {
    b2.style.backgroundColor = "#833ae0";
    b1.style.backgroundColor = "white";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "white";
    b2.style.color = "white";
    b1.style.color = "black";
    b3.style.color = "black";
    b4.style.color = "black";
  } else if (str == "three") {
    b3.style.backgroundColor = "#833ae0";
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "white";
    b4.style.backgroundColor = "white";
    b1.style.color = "black";
    b3.style.color = "white";
    b2.style.color = "black";
    b4.style.color = "black";
  } else if (str == "four") {
    b4.style.backgroundColor = "#833ae0";
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "white";
    b3.style.backgroundColor = "white";
    b1.style.color = "black";
    b4.style.color = "white";
    b2.style.color = "black";
    b3.style.color = "black";
  }
}
