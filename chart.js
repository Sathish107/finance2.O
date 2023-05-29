const ctx = document.getElementById('myChart');

new Chart (ctx,{
      
    type: 'line',
    data: { 
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [250, 320, 200, 450, 300, 500],
            backgroundColor: 'rgba(0, 123, 255, 0.5)', // Fill color
            borderColor: 'rgba(0, 123, 255, 1)', // Line color
            borderWidth: 2 // Line width
        },
        {
            label: 'Expenses',
            data: [200, 280, 210, 380, 250, 400],
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // Fill color
            borderColor: 'rgba(255, 99, 132, 1)', // Line color
            borderWidth: 2 // Line width
        }
    ]
    },
  options:{
    responsive:true,
    scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      }
}
});

var ctx1 = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
            label: 'Dataset',
            data: [30, 50, 20],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ]
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false
    }
});

// const ctx2 = document.getElementById('expensesChart');
// new Chart (ctx2,{
      
//   type: 'doughnut',
//   data: { 
//       labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//       datasets: [{
//           label: 'Sales',
//           data: [250, 320, 200, 450, 300, 500],
//           backgroundColor: 'rgba(0, 123, 255, 0.5)', // Fill color
//           borderColor: 'rgba(0, 123, 255, 1)', // Line color
//           borderWidth: 2 // Line width
//       },
//       {
//           label: 'Expenses',
//           data: [200, 280, 210, 380, 250, 400],
//           backgroundColor: 'rgba(255, 99, 132, 0.5)', // Fill color
//           borderColor: 'rgba(255, 99, 132, 1)', // Line color
//           borderWidth: 2 // Line width
//       }
//   ]
//   },
// options:{ 
//   responsive: true,
//   maintainAspectRatio: false, 
//   scales: {
//       x: {
//           display: false
//       },
//       y: {
//           display: false
//       }
//     }
// }
// });

// ctx2.style.height="200";
// ctx2.style.width="200";