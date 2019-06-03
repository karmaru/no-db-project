import React, { Component } from 'react'
import axios from 'axios'


import Alarm from './Alarm'
import Clock from './Clock'
import CreateAlarmForm from './CreateAlarmForm';


export default class Alarms extends Component {
  constructor() {
    super()

    this.state = {
      alarms: [],
      user: 'Todd',
      alrmStatus: true
    }
  }

componentDidMount() {
    axios.get('/api/alarms').then((res) => {
      this.setState({
        alarms: res.data
      })
    }).catch(err => console.log('alarms.js is fubar', err))
  }

createAlarm = alrmTime => {
    console.log(alrmTime)
    let {user, alrmStatus} = this.state
    axios.post('/api/alarms', {alrmTime,user,alrmStatus}).then(res => {
        console.log(res.data)
      this.setState({
        alarms: res.data
      })
    }).catch(err => console.log('This Sucks Butt!'))
  }

deleteAlarm = id => {
    axios.delete(`/api/alarms/${id}`)
      .then(res => this.setState({alarms: res.data}))
      .catch(err => console.log(err))
  }

updateAlarm = (id, alarm) => {
    console.log({alarm})
    console.log(this.state.alarms)
    axios.put(`/api/alarms/${id}`, alarm)
      .then(res => this.setState({ alarms: res.data}))
      .catch(err => console.log(err))
  }




  render() {
    return (
        <div>
            <div style={{background: 'black'}}>
                <CreateAlarmForm style={{width: '70vw'}}createAlarm={this.createAlarm}/>
            </div>
            <div>
            <section style={{border: '1px solid green'}}>
                <div>           
                    <Clock
                        alarm={this.state.alarms}
                    />
                    
                </div>
            </section>
            </div>
            <div style={{overflow: 'auto', background: 'black', height: '35vh'}}>
                <section>    
                    {this.state.alarms.map(alarm => {
                        return (
                             <div style={{backgroundColor: 'grey'}} key={alarm.id}>
                                <Alarm 
                                    key={alarm.id}
                                    alarm={alarm}
                                    deleteAlarm={() => this.deleteAlarm(alarm.id)}
                                    updateAlarm={this.updateAlarm}
                                />
                            </div>
                        )
                    })}
                </section>
            </div>
      </div>
    )
  }

}