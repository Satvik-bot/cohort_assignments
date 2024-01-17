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
    name: "stvk",
    kidneys: [{
        healthy: false
    }]
}];

app.get('/', (req, res) => {
    const mykidney = users[0].kidneys
    const numberOfKidneys = mykidney.length
    // const HealthyKidneys = mykidney.filter((kidney) => kidney.healthy === true);

    const HealthyKidneys = mykidney.filter((kidney) => kidney.healthy === true);
    let numberOfHealhtyKidneys = HealthyKidneys.length
    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealhtyKidneys
    res.json({
        numberOfKidneys,
        numberOfHealhtyKidneys,
        numberOfUnhealthyKidneys
    })
})

// post is adding a new kidney i.e, either healthy or unhealthy depending on body
// middlewares
app.use(express.json())
app.post('/', (req, res) => {
    // console.log(req.body) // parsing with app.use(express.json)

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

// Updating all kidneys to true -> Repairing kidneys
app.put('/', (req, res) => {
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

// remove all unhealthy kidnyes
app.delete('/', (req, res) => {
    // wrong input - to delete 0 unhealthy kidneys
    const hasUnhealthyKidney = users[0].kidneys.some(kidney => !kidney.healthy);
    if(users[0].kidneys.length == 0) {
        res.status(411).send("No kidneys found")
    }

    if(hasUnhealthyKidney) {
        let newKidneys = []
        newKidneys =  users[0].kidneys.filter((kidney) => kidney.healthy === true)
        users[0].kidneys = newKidneys
        res.json({msg:"done"})
    }

    else{
        res.status(411).send("No unhealty kidneys")
    }
})

// infect virus - making all healthy kidneys - unhealthy
app.patch('/', (req,res) => {
    if(users[0].kidneys.length == 0) {
        res.status(411).send("No kidney to infect")
    }
    else {
        let infectedKidneys = users[0].kidneys
        infectedKidneys.forEach(kidney => {
            kidney.healthy = false
        })
        users[0].kidneys = infectedKidneys
        
        res.json({msg: "Infected!"})
    }
})

app.listen(port)