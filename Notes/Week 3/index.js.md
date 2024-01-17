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