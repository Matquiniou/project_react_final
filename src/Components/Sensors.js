import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateSensor extends Component {
  constructor(props) {
    super(props);

    this.onChangeuserID = this.onChangeuserID.bind(this);
    this.onChangelocation = this.onChangelocation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
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

  onChangeuserID(e) {
    this.setState({
      userID: e.target.value
    })
  }

  onChangelocation(e) {
    this.setState({
      location: e.target.value
    })
  }


  onChangeDate(creationDate) {
    this.setState({
      creationDate: creationDate
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

    axios.post('http://localhost:5000/sensors/add', sensor)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New sensor Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>userID: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeuserID}>
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
              onChange={this.onChangelocation}
              />
        </div>
        <div className="form-group">
        <label>creationDate: </label>
        <div>
          <DatePicker
            selected={this.state.creationDate}
            onChange={this.onChangeDate}
          />
        </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create sensor Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
