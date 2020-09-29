export let options = {
  title: 'Bar Chart Prototype',
  barColor: '#457b9d',
  labelColor: '#f7f7f7',
  barSpacing: '5px',
  chartAxis: 'horizontal',
  barLabelPosition: 'right',
  titleFontSize: 30,
  titleFontColor: '#f7f7f7',
  titleBackgroundColor: '#f7f7f7',
};

export const initOptions = (options) => {
  document.getElementById('barChartTitle').textContent = options.title;
  document.getElementById('barChart').style.transform = 'none';
  let chartTitle = document.getElementById('barChartTitle');
  chartTitle.style.fontSize = options.titleFontSize + 'px';
  chartTitle.style.backgroundColor = options.titleBackgroundColor;
};
