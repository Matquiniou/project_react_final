import React, {Component} from 'react';
import Chart from 'react-apexcharts';



class App extends Component {

      constructor(props) {
        super(props);

        this.state = {
          options: {
            chart: {
                  zoom: {
                      enabled: false
                  }
              },
              dataLabels: {
                  enabled: false
              },
              stroke: {
                  curve: 'straight'
              },
              title: {
                  text: 'Température',
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
              name: "Desktops",
              data: [10, 11, 15, 20, 24, 25, 30, 35, 28]
          }],
        }
      }

      render() {

        return (


          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="line" height="350" />
          </div>


        );
      }
    }

    export default App;
