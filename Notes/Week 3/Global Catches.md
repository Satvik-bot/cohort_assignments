
If the server goes down, the error message should not be available to users.
- Optional Errors
- Programmer Errors
There errors should **NOT** be exposed to the user.

Hence we have something called as **Global Catches**
It is another Middleware that you put at the **END**.


```
app.use()

//routes
app.post()..
app.get()..

// global catches
app.use(function(err, req, res, next))
```

If on any of the routes, there is an exception : 
- it will either reach the enduser 
	OR
- the global catch function change the output message to enduser 

ex:
```
// routes
...

// global catches
let errorcount = 0
app.use(function(err, req, res, next) {
	errorcount++   // for the developer
	res.json({
		msg: "Sorry, the server is down :("
	})
})
```


#Concept **Error-Handling Middleware**
This is a special type of middleware function in Express that has four arguments instead of three
(`(err, req, res, next)`). 
Express recognizes it as an error-handling middleware because of these four arguments.
