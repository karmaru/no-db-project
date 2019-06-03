let id = 1;
// let d = new Date('dddd MM/DD/YYYY hh:mm a');
// let current = d.toLocaleString();
// let current = d.toLocaleString();
// moment(d).format('dddd MM/DD/YYYY hh:mm a')


let alarms = [
    {
        id: id++,
        alrmTime: 'Monday 05/29/2019 02:00 pm',
        alrmStatus: true,
        user: "Todd"
    },
    {
        id: id++,
        alrmTime: 'Monday 06/03/2019 04:00 pm',
        alrmStatus: false,
        user: "Todd"
    },
    {
        id: id++,
        alrmTime: 'Monday 06/02/2019 09:00 am',
        alrmStatus: false,
        user: "Bob"
    },
    {
        id: id++,
        alrmTime: 'Monday 06/03/2019 10:00 am',
        alrmStatus: false,
        user: "Bob"
    }
]

module.exports = {
    read: (req, res) => res.send(alarms),
    create: (req, res) => {
        console.log(req.body)
        let newAlarm = req.body
        newAlarm.id = id++
        alarms.push(newAlarm)
    
        res.status(200).send(alarms)
      },
    update: (req, res) => {
        let { id } = req.params
        console.log(id)
        let updatedAlarm = req.body
        updatedAlarm.id = id
        let index = alarms.findIndex(alarm => +alarm.id === +id)
        alarms.splice(index, 1, updatedAlarm)
        res.send(alarms)
        },
    
    delete: (req, res) => {
        let { id } = req.params
        let index = alarms.findIndex(alarm => +alarm.id === +id)
        alarms.splice(index, 1)
        res.send(alarms)
    }

}