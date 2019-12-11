import React, {Component} from 'react';
import Chart from 'react-apexcharts';




class App extends Component{

     constructor(props) {
       super(props);

       this.state = {
         options: {
           plotOptions: {
             bar: {
               horizontal: true,
             }
           },
           dataLabels: {
             enabled: false
           },
           title: {
               text: 'Pollution Air',
               align: 'left'
           },
           grid: {
               row: {
                   colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                   opacity: 0.5
               },
           },
           xaxis: {
             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
           }
         },
         series: [{
           data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
         }],
       }
     }

     render() {
       return (


         <div id="chart">
           <Chart options={this.state.options} series={this.state.series} type="bar" height="350" />
         </div>


       );
     }
   }

     export default App;
