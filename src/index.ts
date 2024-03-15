import { concatFn } from "./concatenation";

const btnElem = document.querySelector("button")!;

const inputElem = document.querySelector("input")!;

if (btnElem && inputElem) {
  btnElem.addEventListener("click", () => {
    concatFn(inputElem.value, "concatination word!");
  });
}
