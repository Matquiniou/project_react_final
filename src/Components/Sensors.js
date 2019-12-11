import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateSensor extends Component {
  constructor(props) {
    super(props);

    this.onChangetype = this.onChangetype.bind(this);
    this.onChangevalue = this.onChangevalue.bind(this);
    this.onChangeuserID = this.onChangeuserID.bind(this);
    this.onChangecreationDate = this.onChangecreationDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: '',
      value: '',
      userID: '',
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

  onChangetype(e) {
    this.setState({
      type: e.target.value
    })
  }

  onChangevalue(e) {
    this.setState({
      value: e.target.value
    })
  }

  onChangeuserID(e) {
    this.setState({
      userID: e.target.value
    })
  }

  onChangecreationDate(creationDate) {
    this.setState({
      creationDate: creationDate
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      type: this.state.type,
      value: this.state.value,
      userID: this.state.userID,
      creationDate: this.state.creationDate
    }

    console.log(exercise);

    axios.post('http://localhost:5000/sensors/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>sensor name: </label>
          <select
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
          <label>value: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.value}
              onChange={this.onChangevalue}
              />
        </div>
        <div className="form-group">
          <label>type</label>
          <input
              type="text"
              className="form-control"
              value={this.state.type}
              onChange={this.onChangetype}
              />
        </div>
        <div className="form-group">
          <label>creationDate: </label>
          <div>
            <DatePicker
              selected={this.state.creationDate}
              onChange={this.onChangecreationDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create measure Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
