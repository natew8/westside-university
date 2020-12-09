import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }

  }
  componentDidMount = () => {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(results => {
      this.setState({
        students: results.data
      })
    })
  }
  handleClick = () => {
    this.props.history.push(`/`)
  }
  render() {
    const studentsMap = this.state.students.map((student, index) => {
      return (
        <Link key={index} to={`/student/${student.id}`} >
          <h3>
            {student.first_name}{student.last_name}
          </h3>
        </Link>
      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentsMap}
        <img onClick={() => this.handleClick()} className='back-arrow' src='https://cdn4.iconfinder.com/data/icons/arrows-245/24/Back-Arrow-Left-chevron-512.png' alt='back' />
      </div>
    )
  }
}