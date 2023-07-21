const btnNum = [...document.querySelectorAll(".btnNum")];
const btnOp = [...document.querySelectorAll(".btnOp")];
const btnIgual = document.querySelector(".btnIgual");
const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const ac = document.querySelector(".clear");
const back = document.querySelector(".back");

let sinal = false;
let decimal = false;
btnNum.forEach((el) => {
  el.addEventListener("click", (evt) => {
    if (expression.innerHTML === "0") {
      expression.innerHTML = "";
    }
    if (evt.target.innerHTML === ".") {
      if (!decimal) {
        decimal = true;
        console.log(expression.innerHTML);
        if (expression.innerHTML == "") {
          expression.innerHTML = "0.";
        } else {
          expression.innerHTML += evt.target.innerHTML;
        }
      }
    } else {
      expression.innerHTML += evt.target.innerHTML;
      sinal = false;
    }
  });
});

btnOp.forEach((el) => {
  el.addEventListener("click", (evt) => {
    if (!sinal) {
      decimal = false;
      sinal = true;
      if (expression.innerHTML === "0") {
        expression.innerHTML = "";
      }
      expression.innerHTML += evt.target.innerHTML;
    }
  });
});

btnIgual.addEventListener("click", () => {
  let resultado = 0;
  try {
    resultado = eval(expression.innerHTML);
    result.innerHTML = resultado.toFixed(7);
    expression.innerHTML = result.innerHTML;
  } catch {
    result.innerHTML = "Erro";
  } finally {
    decimal = false;
    sinal = false;
  }
});

ac.addEventListener("click", () => {
  expression.innerHTML = "0";
  result.innerHTML = "0";
  sinal = false;
  decimal = false;
});

back.addEventListener("click", (evt) => {
  let str = expression.innerHTML;
  if (str.length !== 1) {
    str = str.substring(0, str.length - 1);
    expression.innerHTML = str;
  } else {
    expression.innerHTML = "0";
  }
});

// try {
//   expression.innerHTML = "45+5*";
//   result.innerHTML = eval(expression.innerHTML);
// } catch {
//   result.innerHTML = "0";
// }

// console.log(btnNum);
// console.log(expression);
// console.log(btnOp);
