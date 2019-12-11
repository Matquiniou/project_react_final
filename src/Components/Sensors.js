import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateSensor extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeCreationdate = this.onChangeCreationdate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userID: '',
      location: '',
      creationDate: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user._id),
            username: response.data[0]._id
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUserID(e) {
    this.setState({
      userID: e.target.value
    })
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  onChangeCreationdate(date) {
    this.setState({
      creationDate: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const sensor = {
      userID: this.state.userID,
      location: this.state.location,
      creationDate: this.state.creationDate
    }

    console.log(sensor);

    axios.post('http://localhost:5000/sensor/add', sensor)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>User: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserID}>
              {
                this.state.users.map(function(user) {
                  return <option
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
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
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.creationDate}
              onChange={this.onChangeCreationdate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
