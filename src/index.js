import { renderChart } from "./render.js";
import { convertArr } from "./convert.js";

let numbersArr = [
  { number: 1, color: "#ffc93c" },
  { number: 2, color: "#fac945" },
  { number: 3, color: "#f5ca4f" },
  { number: 4, color: "#f0ca58" },
  { number: 5, color: "#ebcb62" },
  { number: 6, color: "#e6cc6b" },
  { number: 7, color: "#e1cc75" },
  { number: 8, color: "#dccd7f" },
  { number: 9, color: "#d7ce88" },
  { number: 10, color: "#d2ce92" },
  { number: 11, color: "#cecf9b" },
  { number: 12, color: "#c9cfa5" },
  { number: 12, color: "#c4d0ae" },
  { number: 12.5, color: "#bfd1b8" },
  { number: 15, color: "#bad1c2" },
  { number: 16, color: "#b5d2cb" },
  { number: 17, color: "#b0d3d5" },
  { number: 18, color: "#abd3de" },
  { number: 19, color: "#a6d4e8" },
  { number: 20, color: "#a2d5f2" },
  { number: 1, color: "#ffc93c" },
  { number: 2, color: "#fac945" },
  { number: 3, color: "#f5ca4f" },
  { number: 4, color: "#f0ca58" },
  { number: 5, color: "#ebcb62" },
  { number: 6, color: "#e6cc6b" },
  { number: 7, color: "#e1cc75" },
  { number: 8, color: "#dccd7f" },
  { number: 9, color: "#d7ce88" },
  { number: 10, color: "#d2ce92" },
  { number: 11, color: "#cecf9b" },
  { number: 12, color: "#c9cfa5" },
  { number: 12, color: "#c4d0ae" },
  { number: 12.5, color: "#bfd1b8" },
  { number: 15, color: "#bad1c2" },
  { number: 16, color: "#b5d2cb" },
  { number: 17, color: "#b0d3d5" },
  { number: 18, color: "#abd3de" },
  { number: 19, color: "#a6d4e8" },
  { number: 20, color: "#a2d5f2" },
];

// let numbers = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
// ];

let numbers = [];

convertArr(numbersArr, numbers);
renderChart(numbers, numbersArr);

check = document.getElementById("check");
check.addEventListener("change", (event) => {
  if (event.target.checked) {
    document.getElementById("barChart").style.transform = "none";
  } else {
    document.getElementById("barChart").style.transform = "rotate(-90deg)";
  }
});
