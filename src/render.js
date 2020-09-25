import { barRangeConvert, checkBarArr } from "./convert.js";
import { options } from "./options.js";

//rendering to DOM related code in here

export const renderChart = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let currentNum;
    checkBarArr(numbers)
      ? (currentNum = numbers[i].number)
      : (currentNum = numbers[i]);

    let range = barRangeConvert(numbers, currentNum);
    let barChart = document.getElementById("barChart");
    let bar = document.createElement("div");
    bar.classList.add("bars");
    bar.setAttribute("id", currentNum);

    bar.style.backgroundColor = barColor(numbers, i, options);
    bar.style.width = range + "%";
    bar.innerHTML = currentNum;
    barChart.appendChild(bar);
  }
};

//checks if individual bar colors are definied in numbers array
//else all bars are set to color defined in options.js
const barColor = (numbers, i, options) => {
  let color;
  if (numbers[0]["color"]) {
    color = numbers[i].color;
  } else {
    color = options.barColor;
  }
  return color;
};
