const fs = require("fs");
const filePath = "medium/a.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
    // console.log(data);
    statement = JSON.stringify(data);
    statement = statement.replace(/\s +/g, ' ');
    statement.trim();
    console.log(statement);
})


// let s = "one word two  word";
// s = s.replace(/\s +/g, ' ')
// s = s.replace(/ +/g, ' ')
// console.log(s);

