import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Humidite from './Pictures/CapteurHumi.jpg';
import Temperature from './Pictures/CapteurTemp.jpg';
import Air from './Pictures/CapteurPolAir.jpg';




class App extends Component {
  render(){
    return (
<div>
<br/>


<table class="table">

  <thead class="thead-dark">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Type</th>
      <th scope="col">Measure</th>
      <th scope="col">Unity</th>
      <th scope="col">Picture</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">11/12/2019</th>
      <td>Humidty</td>
      <td>300</td>
      <td>g/m3</td>
      <td> <img class="" width="50"  src={Humidite} alt="Card image cap"/> </td>
    </tr>
    <tr>
      <th scope="row">11/12/2019</th>
      <td>Température</td>
      <td>25</td>
      <td>°C</td>
      <td> <img class="" width="50"  src={Temperature} alt="Card image cap"/> </td>
    </tr>
    <tr>
      <th scope="row">06/12/2019</th>
      <td>Pollution de l'air</td>
      <td>260</td>
      <td>ppm</td>
      <td> <img class="" width="50"  src={Air} alt="Card image cap"/> </td>
    </tr>
    <tr>
      <th scope="row">10/12/2019</th>
      <td>Température</td>
      <td>10</td>
      <td>°C</td>
      <td> <img class="" width="50"  src={Temperature} alt="Card image cap"/> </td>
    </tr>
  </tbody>
</table>

</div>



);
}
}


export default App;
