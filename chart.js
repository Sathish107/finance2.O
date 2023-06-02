const ctx = document.getElementById('myChart');

new Chart (ctx,{
      
    type: 'line',
    data: { 
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [250, 320, 200, 450, 300, 500],
            backgroundColor: 'rgba(0, 123, 255, 0.5)', 
            borderColor: 'rgba(0, 123, 255, 1)', 
            borderWidth: 2  
        },
        {
            label: 'Expenses',
            data: [200, 280, 210, 380, 250, 400],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',  
            borderColor: 'rgba(255, 99, 132, 1)', 
            borderWidth: 2  
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

function toggleSideBar(){
  document.getElementById("sideBar").classList.toggle("hideSideBar");
}

function toggleButtonFunc() {
  console.log("SUCCESS");
  document.getElementById("first").classList.toggle("backToggle");
  document.getElementById("main").classList.toggle("colorToggle");
  document.getElementById("payment").classList.toggle("colorToggle");
  document.getElementById("transactions").classList.toggle("containerBg");
  document.getElementById("centreElement").classList.toggle("containerBg");
  document.getElementById("myCards").classList.toggle("containerBg");
  document.getElementById("quickPay").classList.toggle("containerBg");
  document.getElementById("expenses").classList.toggle("containerBg");

}

function callMe(){
  console.log("Hello World!");
}

