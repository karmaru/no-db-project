import React, { Component } from 'react'
import Datetime from 'react-datetime'
import moment from 'moment';



export default class Alarm extends Component {
  constructor(props) {

    // let {alrmStatus, alrmTime, user} = props.alarm
    super(props)

    this.state = {
      alarm: {},
      alrmStatus: true,
      alrmTime: '',
      user: '',
      edit: false,
      date: ''
    }
  }

  updateStatus = () => {
    let {alarm} = this.props
    const {alarmStatus: updatedStatus} = this.state
    this.props.updateAlarm(alarm.id, updatedStatus)
  }

  toggleStatus = async () => {
    await this.setState({
      alrmStatus: !this.state.alrmStatus
    })
    
    let updatedStatus = {alrmStatus: this.state.alrmStatus,alrmTime: this.props.alarm.alrmTime,
       user: this.props.alarm.user}
    this.props.updateAlarm(this.props.alarm.id, updatedStatus)

    // console.log(5555, this.props.id)
    // console.log(1111, updatedStatus)
    // console.log(2222, this.state)
    // console.log(3333, this.props.alarm)
  }


  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleClick = () => {

    let updatedAlarm = {alrmStatus: this.props.alarm.alrmStatus,alrmTime: this.state.date,
      user: this.props.alarm.user}
      this.props.updateAlarm(this.props.alarm.id, updatedAlarm)
      this.toggleEdit();
  }

  handleDate= (date) => {
    console.log(date)
  this.setState({date: moment(date._d).format('dddd MM/DD/YYYY hh:mm:00 a')}); 
  };

  render() {
    let { alarm } = this.props
    return (
      <div key={alarm.id} style={{ border: '1px solid green', background: 'black', color: 'lightgreen',display: 'flex', flexDirection: 'row'}}>
          <div style={{
              display: 'flex',
              width: '80vw',
              justifyContent: 'right'
          }}>
          <div onClick={this.toggleStatus}>
            {alarm.alrmStatus === true ?
                <p style={{
                    height: '20px',
                    width: '20px',
                    borderRadius: 20/2,
                    backgroundColor: 'green',
                    margin: '10px'
                
                }}
                ></p>
            :
                <p style={{
                    height: '20px',
                    width: '20px',
                    borderRadius: 20/2,
                    backgroundColor: 'red',
                    margin: '10px'
                }}></p>
            }
            </div>  
            
            <div style = {{width: '50vw'}}>
                {this.state.edit ?
                        <div>{<Datetime onChange={this.handleDate}></Datetime>}</div>
                    :
                        <div style={{
                            width: '50vw',
                            backgroundColor: 'black',
                            alignContent: 'center',
                            paddingTop: '10px',
                            display: 'flex'

                    // margin: '30px'
                        }}><span style={{color: 'yellow'}}>Alarm Date/Time:</span> {alarm.alrmTime}
                        </div>
                }
            </div>
            
            {this.state.edit ?
                <p style={{width: '20vw'}}>
                    <button className='buttonRepeat' onClick={this.handleClick}>Save</button>
                    <button className='buttonRepeat' onClick={this.toggleEdit}>Cancel</button>
                </p>
            :
                <p style={{width: '20vw'}}>
                  <button className='buttonRepeat' onClick={this.toggleEdit}>Edit</button>
                  <button className='buttonRepeat' onClick={this.props.deleteAlarm}>Delete</button>
                </p>  
            }
        </div>
        
    </div>
    )
  }

  }