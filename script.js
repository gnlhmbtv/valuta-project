let leftMoneybuttons = document.querySelectorAll(".buttons-left button");
let rightMoneybuttons = document.querySelectorAll(".buttons-right button");
let leftInput = document.querySelector("#left-input");
let rightInput = document.querySelector("#right-input");
let base;
let convertTo;

function convertLeft() {
  let str;
  let leftvalue = leftInput.value;
  leftMoneybuttons.forEach((e) => {
    var style = window
      .getComputedStyle(e, "")
      .getPropertyValue("background-color");
    if (e.classList.contains("selected")) {
      base = e.innerHTML;
      console.log(base, leftvalue);
    }
  });

  rightMoneybuttons.forEach((e) => {
    var style = window
      .getComputedStyle(e, "")
      .getPropertyValue("background-color");

    if (e.classList.contains("selected")) {
      convertTo = e.innerHTML;
    }
  });

  fetch(
    `https://api.exchangerate.host/latest?base=${base}&symbols=${convertTo}`
  )
    .then((res) => res.json())
    .then((data) => {
      rightInput?.setAttribute(
        "value",
        Object.values(data.rates)[0] * leftvalue
      );
    });
}

function convertRight() {
  let str;
  let rightvalue = rightInput.value;

  rightMoneybuttons.forEach((e) => {
    var style = window
      .getComputedStyle(e, "")
      .getPropertyValue("background-color");
    if (e.classList.contains("selected")) {
      base = e.innerHTML;
      console.log(base, rightvalue);
    }
  });

  leftMoneybuttons.forEach((e) => {
    var style = window
      .getComputedStyle(e, "")
      .getPropertyValue("background-color");
    if (e.classList.contains("selected")) {
      convertTo = e.innerHTML;
      console.log(base, rightvalue);
    }
  });

  fetch(
    `https://api.exchangerate.host/latest?base=${base}&symbols=${convertTo}`
  )
    .then((res) => res.json())
    .then((data) => {
      leftInput?.setAttribute(
        "value",
        Object.values(data.rates)[0] * rightvalue
      );
    });
}

function select(current) {
  const parentNode = current.parentNode;
  const allButtons = document.querySelectorAll(
    `.${parentNode.className} button`
  );

  allButtons.forEach(function resetButton(button) {
    button.classList.remove("selected");
  });
  current.classList.add("selected");
}
