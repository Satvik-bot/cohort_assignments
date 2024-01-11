/**
Create an in memory hospital
    - Create 4 routes (4 things the hospital can do)
1. GET - User can check how many kidneys they have and their health
2. POST - User can add a new kidney
3. PUT - User can replace a kidney, make it healthy
4. DELTE - User can remove a kidney
**/

// in memory
const bodyParser = require('body-parser');
const express = require("express")
const app = express();

const port = 3000

const users = [{
    nam: "stvk",
    kidney: [{
        healthy: true
    }]
}];

app.get('/', (req, res) => {
    const mykidney = users[0].kidney
    const numberOfKidneys = mykidney.length
    const HealhtyKidneys = mykidney.filter((kidney) => { kidney.healthy === true })
    let numberOfHealhtyKidneys = HealhtyKidneys.length
    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealhtyKidneys
    res.json({
        numberOfKidneys,
        numberOfHealhtyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put('/', (req, res) => {

})

app.delete('/', (req, res) => {

})

app.listen(port)