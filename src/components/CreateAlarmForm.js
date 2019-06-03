import React, { Component } from 'react'
import Datetime from 'react-datetime'
import moment from 'moment';

export default class CreateAlarmForm extends Component {
  constructor(props) {
    super(props)

    this.state = {  
      date: ''
    }

  }

  handleClick = () => {
    let {date: newAlarm} = this.state
    this.props.createAlarm(newAlarm)
  }

  handleDate= (date) => {
      console.log(date)
    this.setState({date: moment(date._d).format('dddd MM/DD/YYYY hh:mm:00 a')}); 
    };

  

  render() {
      // console.log(this.state.date)
    return (
      <div style={{border: '1px solid red', justifyContent: 'center', padding: '10px'}}>
        <Datetime onChange={this.handleDate}/>
        <button onClick={this.handleClick}>Create</button>
      </div>
    )
  }
}

