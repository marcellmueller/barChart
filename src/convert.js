//check to see if bar array is just numbers
//or object format for individual colors

export const barRangeConvert = (numbers, value) => {
  //find the highest and lowest numbers in our array
  let low = numbers[0];
  let high = 0;
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] < low ? (low = numbers[i]) : null;
    numbers[i] > high ? (high = numbers[i]) : null;
  }
  let percent = percentage(value, low, high);
  percent === 0 ? (percent = 1) : null;
  return percent;
};

//calculates percentage on a value between a range of two numbers
//so we can display our bar chart based on the highest
//and lowest values
const percentage = (value, minRange, maxRange) => {
  let percent = ((value - minRange) / (maxRange - minRange)) * 100;
  return percent;
};

export let convertArr = (numbersArr, numbers) => {
  if (numbersArr[0].number) {
    for (let i = 0; i < numbersArr.length; i++) {
      numbers.push(numbersArr[i].number);
    }
  } else {
    numbers = numbersArr;
  }
};
