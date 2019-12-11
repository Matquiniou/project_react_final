import React, {Component} from 'react';
import Chart from 'react-apexcharts';


  class App extends Component {

    constructor(props) {
      super(props);

      this.state = {
        options: {
          labels: ['Canada', 'USA', 'France', 'Italie'],
          title: {
            text: 'Pourcentage de capteurs par pays'
          },
          stroke: {
            width: 0
          },
          fill: {
            opacity: 0.4
          },
          markers: {
            size: 0
          },

          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },



              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249
                }
              }
            }
          }
        },
        series: [33, 17, 20, 30],
      }
    }

    render() {
      return (


        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="radialBar" height="350" />
        </div>


      );
    }
  }

export default App;
