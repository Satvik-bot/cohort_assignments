#Question: Calculate the time it takes between a #setTimeout call and the inner function actually running

#Concept:
#### 1. Date object
```
const start = Date.now();

await functionToBeMeasured();

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
```

Output:
Execution time: 0 ms

#### 2. Console time
```
console.time('Execution Time');

await functionToBeMeasured(); // or
functionToBeMeasured(); // if await-async not imported

console.timeEnd('Execution Time');
```

Output:
Execution time: 0.038800000000264845 ms

#### 3. Performance timers

```
const start = performance.now();

await functionToBeMeasured();

const end = performance.now();
console.log(`Execution time: ${end - start} ms`);
```
-----
If measuring in Node, **process.hrtime.bigint()** returns accuracy in nanoseconds.
```
const start = process.hrtime.bigint();

await functionToBeMeasured();  // or
functionToBeMeasured(); // if await-async not imported

const end = process.hrtime.bigint();
console.log(`Execution time: ${end - start} ms`);
```

Output:
Execution time: 88800 ms

------------------------------------------------------------------------------

#Answer:

```
// Calculate the time it takes between a setTimeout call and the inner function actually running

setInterval(()=> {
    function helper() {
        console.log("hello")
    }  

    const start = process.hrtime.bigint();
    setTimeout(helper, 1*1000);
    const end = process.hrtime.bigint();

    console.log(`Execution time: ${end - start} ms`);

}, 3*1000)
```

