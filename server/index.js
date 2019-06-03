const express = require('express')

const AlarmCtrl = require('./controllers/alarms')

const app = express()
const port = 5150

app.use(express.json())  


app.get('/api/alarms', AlarmCtrl.read)
app.post('/api/alarms', AlarmCtrl.create)
app.delete('/api/alarms/:id', AlarmCtrl.delete)
app.put('/api/alarms/:id', AlarmCtrl.update)

app.listen(port, () => {
    console.log('dis mother be up on port ', port)
})