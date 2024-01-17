/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve, reject)=> {
        
        const date = Date.now()+milliseconds;
        let date2 = Date.now();

        while(date2<date)
        {
            date2 = Date.now();
        }
        resolve();
    })
}


module.exports = sleep;
