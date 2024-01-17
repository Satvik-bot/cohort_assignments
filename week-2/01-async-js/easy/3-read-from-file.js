const fs = require("fs");

const start1 = process.hrtime.bigint();
fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(JSON.stringify(data));
    const end1 = process.hrtime.bigint();
    console.log(`read file-> ${end1-start1}`);
})

console.log("done");

var a = 1;
const start = process.hrtime.bigint();
for(var i=0; i<100000000; i++) {
    a++;
}
const end = process.hrtime.bigint();
console.log(`for loop-> ${end-start}`);
console.log(a);