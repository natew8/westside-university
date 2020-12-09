import axios from 'axios';
import React, { Component } from 'react';

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {}
    }
  }
  componentDidMount = () => {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(info => {
      this.setState({
        studentInfo: info.data
      })
    })
  }

  handleClick = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{this.state.studentInfo.first_name}{this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
        <img onClick={() => this.handleClick()} className='back-arrow' src='https://cdn4.iconfinder.com/data/icons/arrows-245/24/Back-Arrow-Left-chevron-512.png' alt='back' />
      </div>
    )
  }
}