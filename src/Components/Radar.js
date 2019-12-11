import React, {Component} from 'react';
import Chart from 'react-apexcharts';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
        options: {
          chart: {
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1
            },
          },
          labels: ['LivingRoom', 'Entrance', 'Bedroom', 'Bathroom', 'Kitchen'],
          title: {
            text: 'Type de capteur par pièce'
          },
          stroke: {
            width: 0
          },
          fill: {
            opacity: 0.4
          },
          markers: {
            size: 0
          }
        },
        series: [{
            name: 'Température',
            data: [80, 50, 30, 40, 100],
        }, {
            name: 'Humidité',
            data: [20, 30, 40, 80, 20],
        }, {
            name: 'Pollution Air',
            data: [44, 76, 78, 13, 43],
        }]
      }
    }

    render() {
      return (


          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="radar" height="350" />
          </div>


        );
      }
    }

export default App;
