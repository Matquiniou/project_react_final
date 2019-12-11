import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangepersonsInHouse = this.onChangepersonsInHouse.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangehouseSize = this.onChangehouseSize.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      personsInHouse: 0,
      location: '',
      houseSize:'',
    }
  }

  onChangepersonsInHouse(e) {
    this.setState({
      personsInHouse: e.target.value
    })
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }
  onChangehouseSize(e) {
    this.setState({
      houseSize: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      personsInHouse: this.state.personsInHouse,
      houseSize: this.state.houseSize,
      location: this.state.location
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    window.location = '/';

  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>personsInHouse: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.personsInHouse}
                onChange={this.onChangepersonsInHouse}
                />
          </div>
          <div className="form-group">
            <label>location: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
                />
          </div>
          <div className="form-group">
            <label>house size: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.houseSize}
                onChange={this.onChangehouseSize}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
