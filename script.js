let moneybuttons = document.querySelectorAll(".buttons-left button");
let leftInput = document.querySelector("#left-input");
let base;
let convertTo;
// moneybutton?.addEventListener('click', () => {
//     console.log('a')
// })
let selected = false;
moneybuttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    selected = true;
  });
});
let currency;

function myFunction(str) {
  let b1 = document.querySelector(".button1");
  let b2 = document.querySelector(".button2");
  let b3 = document.querySelector(".button3");
  let b4 = document.querySelector(".button4");
  if (str == "two") {
    base = "USD";
    b2.style.backgroundColor = "#833ae0";
    b1.style.backgroundColor = "white";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "white";
    b2.style.color = "white";
    b1.style.color = "black";
    b3.style.color = "black";
    b4.style.color = "black";
    fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=RUB`)
      .then((res) => res.json())
      .then((data) => {
        leftInput?.setAttribute("value", Object.values(data.rates)[0]);
      });
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

// var element = document.getElementById("testDiv");
// var style = window.getComputedStyle(element, "");
// var bgColor = style.getPropertyValue("background-color");
// console.log(element, bgColor)


moneybuttons.forEach((b) => {
   if(b.innerHTML == 'RUB'){
     var style = window.getComputedStyle(b, "").getPropertyValue("background-color")
    console.log(b, style)
   }


  // b.addEventListener('click', e => {
  //   console.log(e.target.className);
  //   switch(e.target.className){
  //     case 'button button1 col-lg-3':
  //       e.target.style.backgroundColor === 'red'
  //       console.log(e.target);
  //       break;
  //     default:
  //       break;
  //   }
  // })
  
  
});
