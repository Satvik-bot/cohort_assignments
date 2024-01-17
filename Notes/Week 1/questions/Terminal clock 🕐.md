#Question: Create a terminal clock (HH:MM:SS)

#Concept:
```
var Day = new Date()
Day.getHours()
Day.getMinutes()
Day.getSeconds()
```

-------------

#Answer:

``` 
setInterval (()=>{
    var currentHour = new Date().getHours()
    var currentMinutes = new Date().getMinutes()
    var currentSeconds = new Date().getSeconds()

	console.log(`Current Time is: ${currentHour}:${currentMinutes}:${currentSeconds}`);
}, 1*1000)
```


Output:
*Current Time is: 16:49:45
Current Time is: 16:49:46
Current Time is: 16:49:47
Current Time is: 16:49:48
Current Time is: 16:49:49*