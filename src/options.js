export let options = {
  barColor: "#457b9d",
  labelColor: "#f7f7f7",
  barSpacing: "5px",
  chartAxis: "horizontal",
  barLabelPosition: "right",
  titleFontSize: 30,
  titleFontColor: "#f7f7f7",
  titleBackgroundColor: "#f7f7f7",
};

export const initOptions = (options) => {
  let title = document.getElementById("barChartTitle");
  title.style.fontSize = options.titleFontSize + "px";
  title.style.backgroundColor = options.titleBackgroundColor;
};
