export const renderChart = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let barChart = document.getElementById("barChart");
    let bar = document.createElement("div");
    bar.classList.add("bars");
    bar.setAttribute("id", numbers[i].number);
    bar.style.backgroundColor = numbers[i].color;
    bar.innerHTML = numbers[i].number;
    barChart.appendChild(bar);
  }
};
