import React, {Component} from 'react'
import moment from 'moment'
import swal from 'sweetalert';
// import axios from 'axios'


export default class AlarmClock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentTime: '',
        alarmMessage: '',
        alarmTime: '',
        formattedTime: ''
      };
    }
    
    componentDidMount(){
        this.clock = setInterval(
          () => this.setCurrentTime(),
          1000
        )
        this.interval = setInterval(
            () => this.checkAlarmClock(),
          1000)
    }

    setCurrentTime(){
        this.setState({
          currentTime: new Date().toLocaleTimeString('en-US', { hour12: true }),
          formattedTime: new moment().format('dddd MM/DD/YYYY hh:mm:ss a')
        });
        // console.log(this.alarms)
      }

    checkAlarmClock(){
        let { alarm } = this.props
        // console.log(this.props)
        alarm.forEach(time => {
          console.log(time.alrmTime, this.state.formattedTime)
            if ((time.alrmTime === this.state.formattedTime) && (time.alrmStatus === true)) {
              swal({
                title: "Wake Up!",
                // text: "You clicked the button!",
                icon: "success",
                button: "Okies",
              });
             }
        })
          
        }   
      

      render() {
          
        return (
            <div style= {{
                justifyContent: 'center'
            }}>
            <h2 style={{fontSize: '100px', border: '1px solid black',
            padding: '20px', margin: '10px', marginBottom: '10px',background: 'black',color: 'lightgreen',
            fontFamily: 'Orbitron, sans-serif'
                        
            }}>{this.state.currentTime}</h2>
            </div>
        );
      }
    }
