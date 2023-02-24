// optimize code;
let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("number"));

buttons.map((number) => {
  number.addEventListener("click", (e) => {
    calculate(e.target.innerText);
  });
});
document.addEventListener("keypress", function (event) {
  calculate(event.key);
  // console.log(event);
});

function calculate(key) {
  switch (key) {
    case "C":
      display.innerText = "";
      break;
    case "X":
      display.innerText = display.innerText.slice(0, -1);
      break;
    case "=":
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error!"; // for invalid inpult(Ex:- *,/,-*+,++,)
      }
      break;

    //for keypress;
    case "Enter":
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error!"; // for invalid inpult(Ex:- *,/,-*+,++,)
      }
      break;

    default:
      display.innerText += key;
  }
}
