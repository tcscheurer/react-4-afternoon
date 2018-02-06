import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students : []
    }
    
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(response => {
        this.setState({
          students : response.data
        })
      })
  }

  render() {
    let mapped = this.state.students.map((curr,index)=>{
      <Link  key={index} to={`/student/${curr.id}`}><h3>{curr.first_name} {curr.last_name}</h3></Link>
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
          {mapped}
      </div>
    )
  }
}