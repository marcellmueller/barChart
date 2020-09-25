let numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

let displayChart = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let barChart = document.getElementById("barChart");

    let bar = document.createElement("div");
    bar.classList.add("bars");
    bar.setAttribute("id", numbers[i]);
    bar.innerHTML = numbers[i];
    barChart.appendChild(bar);
  }
};

displayChart(numbers);
