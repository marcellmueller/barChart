import { barRangeConvert } from './convert.js';
import { options, initOptions } from './options.js';
//rendering to DOM related code in here

export const renderChart = (numbers, numbersArr) => {
  initOptions(options);
  for (let i = 0; i < numbers.length; i++) {
    let range = barRangeConvert(numbers, numbers[i]);
    let barChart = document.getElementById('barChart');
    let bar = document.createElement('div');
    bar.classList.add('bars');

    bar.style.color = options.labelColor;
    bar.style.backgroundColor = barColor(numbersArr, i, options);
    bar.style.width = range + '%';
    bar.style.textAlign = options.barLabelPosition;
    bar.innerHTML = numbers[i];
    barChart.appendChild(bar);
  }
};

//checks if individual bar colors are definied in numbers array
//else all bars are set to color defined in options.js
const barColor = (numbersArr, i, options) => {
  let color;
  if (numbersArr[0]['color']) {
    color = numbersArr[i].color;
  } else {
    color = options.barColor;
  }
  return color;
};
