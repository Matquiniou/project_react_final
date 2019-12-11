import React, {Component} from 'react';
import Chart from 'react-apexcharts';


class App extends Component {

      constructor(props) {
        super(props);

        this.state = {
          options: {
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            title: {
              text: 'Nombre de capteurs par pièce'
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
            xaxis: {
              categories: ['Température', 'Air', 'Humidité'],
            },
            yaxis: {
              title: {
                text: 'Nbre Composants '
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
          series: [{
            name: 'Small',
            data: [44, 55, 57]
          }, {
            name: 'Medium',
            data: [76, 85, 101]
          }, {
            name: 'Big',
            data: [35, 41, 36]
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
