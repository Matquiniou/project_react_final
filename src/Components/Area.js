
import React, {Component} from 'react';
import Chart from 'react-apexcharts';




class App extends React.Component {

      constructor(props) {
        super(props);

        this.state = {
          options: {
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            title: {
                text: 'Humidité',
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
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            }
          },
          series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]

          }],
        }
      }

      render() {
        return (


          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="area" height="350" />
          </div>


        );
      }
    }

    export default App;
