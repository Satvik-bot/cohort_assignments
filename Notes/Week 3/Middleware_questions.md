#Question 
1. Count the number of requests
2. Find the average time your server is taking to handle requests

#Answer : 
1. Create a function called totalNumberOfRequests with the logic and it should execute everytime any route gets called.
2. Hence, the use of app.use()
```
let count = 0
function totalNumberOfRequests(req, res, next) {
  count++
  console.log(count)
  next()
}

app.use(totalNumberOfRequests)
```

#Answer 
```
const express = require('express');
const bodyParser = require('body-parser');
const responseTime = require('response-time');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(responseTime()); // Middleware to measure response time

const todo = [];

// Your existing routes...

// Middleware to calculate and

```