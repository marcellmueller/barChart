export const barRangeConvert = (numbers, value) => {
  //find the highest and lowest numbers in our array
  let low = numbers[0].number;
  let high = 0;
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].number < low ? (low = numbers[i].number) : null;
    numbers[i].number > high ? (high = numbers[i].number) : null;
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
