var data = {
  oil: [
    { year: 2010, month: 'Jan', price: 2.8 },
    { year: 2010, month: 'Feb', price: 3.2 },
    { year: 2010, month: 'Mar', price: 3.1 },
    { year: 2010, month: 'Apr', price: 3.3 },
    { year: 2010, month: 'May', price: 3.2 },
    { year: 2010, month: 'June', price: 3.5 },
    { year: 2015, month: 'Apr', price: 3.1 },
    { year: 2015, month: 'May', price: 3.6 },
    { year: 2015, month: 'Jun', price: 3.0 },
    { year: 2020, month: 'Aug', price: 3.4 },
    { year: 2020, month: 'Sep', price: 3.3 },
    { year: 2020, month: 'Oct', price: 3.2 },
  ],
};


// Calculate animation speed based on the number of data points and chart width
// function getResponsiveAnimationSpeed() {
//   var chartWidth = document.querySelector('#chart').offsetWidth;
//   var baseSpeed = 300;
//   return Math.max(baseSpeed, chartWidth / data.oil.length);
// }

var options = {
  chart: {
    height: 380,
    toolbar: { show: false },
    fontFamily: 'Rubik',
    width: '100%',
    type: 'line',
    animations: {
      enabled: false, // Disable initial animations
    },
    redrawOnWindowResize: true,
  },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'center',
    markers: {
      width: 12,
      height: 12,
      radius: 6,
    },
  },
  series: [
    {
      name: 'Custom Name for Oil Price',
      data: data.oil.map((row) => ({ x: `${row.year} ${row.month}`, y: row.price })),
    },
  ],
  colors: ['#ffc107'],
  stroke: {
    width: 1,
    curve: 'smooth',
  },
  xaxis: {
    categories: data.oil.map((row) => `${row.year} ${row.month}`),
    tickAmount: 3,
    labels: {
      style: {
        colors: '#fff',
      },
    },
    tooltip: {
      enabled: false, // Disable X-axis hover box
    },
    crosshairs: {
      show: false, // Disable the vertical crosshair line
    },
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 1,
      borderColor: '#fff',
    },
    strokeDashArray: 5,
  },
  yaxis: {
    tickAmount: 2,
    labels: {
      formatter: function (value) {
        return '$' + value;
      },
      style: {
        colors: '#fff',
      },
    },
  },
  tooltip: {
    shared: true, // Tooltip only shows on the line, not on the crosshair
    intersect: false,
  },
};

var chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

// Gradually add data points to create a left-to-right drawing effect
// let index = 1; // Start from the second data point
// let interval = setInterval(() => {
//   if (index < data.oil.length) {
//     chart.updateSeries([
//       {
//         name: 'Custom Name for Oil Price',
//         data: data.oil.slice(0, index + 1).map((row) => ({ x: `${row.year} ${row.month}`, y: row.price })),
//       },
//     ]);
//     index++;
//   } else {
//     clearInterval(interval);
//   }
// }, getResponsiveAnimationSpeed());

// Recalculate animation speed on window resize for a responsive effect
// window.addEventListener('resize', () => {
//   clearInterval(interval);
//   index = 1;
//   chart.updateSeries([{ name: 'Custom Name for Oil Price', data: [{ x: `${data.oil[0].year} ${data.oil[0].month}`, y: data.oil[0].price }] }]);

//   // Restart the interval with updated speed
//   interval = setInterval(() => {
//     if (index < data.oil.length) {
//       chart.updateSeries([
//         {
//           name: 'Custom Name for Oil Price',
//           data: data.oil.slice(0, index + 1).map((row) => ({ x: `${row.year} ${row.month}`, y: row.price })),
//         },
//       ]);
//       index++;
//     } else {
//       clearInterval(interval);
//     }
//   }, getResponsiveAnimationSpeed());
// });