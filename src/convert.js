//check to see if bar array is just numbers
//or object format for individual colors
export const checkBarArr = (numbers) => {
  if (numbers[0]["number"]) {
    return true;
  } else {
    return false;
  }
};

export const barRangeConvert = (numbers, value) => {
  //find the highest and lowest numbers in our array
  let low = numbers[0].number;
  let high = 0;
  for (let i = 0; i < numbers.length; i++) {
    //check to see type of number array for input
    let currentNum;
    checkBarArr(numbers)
      ? (currentNum = numbers[i].number)
      : (currentNum = numbers[i]);

    currentNum < low ? (low = currentNum) : null;
    currentNum > high ? (high = currentNum) : null;
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
