const fs = require("fs");


var p = new Promise((resolve, reject) => 
{
    let data = "abcds"
    fs.writeFile('b.txt',(err, data) => 
    {
        console.log("s");
    }, function er() {console.log("er");}
});

p.then(
    
    fs.readFile('b.txt', "utf-8", (data,err) => {
        console.log(JSON.stringify(data));
        if(err) {
            console.log("Error1");
        }
    })
)
