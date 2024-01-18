
#### In this, we have the primitive way of performing:
1. user authentication
2. using middleware to get the total number of responses

```
const express = require("express");
const app = express();

let count = 0;
function totalNumberOfRequests(req, res, next) {
  count++;
  console.log(count);
  next();
}

app.use(totalNumberOfRequests);

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyID = req.query.kidneyID;

  if (username === "admin" && password === "admin") {
    if (kidneyID == 1 || kidneyID == 2) {
      res.json({
        msg: "Kidney is fine",
      });
    }
  }
  res.status(400).json({
    msg: "Input wrong",
  });
});

app.listen(3000);

```

#### Better way: 
```
const express = require("express");
const app = express();
const zod = require('zod'); 

// 1. Using zod to create a schema
const schema = zod.object ({
	 password: zod.string(),
	 username: zod.string(),
	 kidneys: zod.array(zod.number())
})

// 2. Middleware -> Total Requests
let count = 0;
app.use(function (req, res, next) {
  count++;
  next();
});

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyID = req.query.kidneyID;

  const response = schema.safeParse({
	  password: password,
	  username: username,
	  kidneyID: kidneyID,
  })
  
  if(response) {
	  res.json({
		  "msg": "Kidney is fine!"
	  })
  }

  res.status(400).json({
    msg: "Input wrong",
  });
});

app.listen(3000);

```