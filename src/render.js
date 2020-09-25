import { barRangeConvert } from "./convert.js";

//rendering to DOM related code in here

export const renderChart = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let range = barRangeConvert(numbers, numbers[i].number);
    let barChart = document.getElementById("barChart");
    let bar = document.createElement("div");
    bar.classList.add("bars");
    bar.setAttribute("id", numbers[i].number);
    bar.style.backgroundColor = numbers[i].color;
    bar.style.width = range + "%";
    console.log(range);
    bar.innerHTML = numbers[i].number;
    barChart.appendChild(bar);
  }
};
