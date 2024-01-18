## Why Middlewares

- Eliminates **DRY**
- Ex: User validation

```
 app.get('/', fn1, fn2, finalFn)
```

There can be more than 1 callback functions in app.get

```
app.get('/', function(req, res){
	console.log("hi from fn1")
}, function(req, res) {
	console.log("hi from fn2")
})
```

On executing the above codeblock, we receive:

```
hi from fn1
```

hi from fn2 does not get executed! 
The reason for that is, the function nearest to app.get gets executed first.

⭐ If there are more than 1 fn, we use **next()** as the 3rd argument
⭐ **next()** routes the request to the next function if everything goes correct (no error in fn1)

```
app.get('/', function(req, res, next){
	console.log("hi from fn1")
	next()
}, function(req, res) {
	console.log("hi from fn2")
})
```

The last function should not have next as an argument.

## app.use

```
const app = express()
app.use(express.json())
```

To use any middleware for every route existing below it

we make use of `app.use()` 
example:
```
app.use(fn1)

app.get(function(req, res) {
	console.log("hi from fn2")
	res.json({
	msg: "done"
	})
})

```

output : 
```
hi from fn1
hi from fn2
```


## express.json() 

⭐ Extracts the body for `req.body`
⭐ Not required for req.params, req.query, etc., because 'body' can be anything ranging from : 
- Text
- Javascript
- JSON
- HTML
- XML
Hence, we need to specify using express.json() for an expected body with any of the above inputs. 

#Assignments: 
1. Count the number of requests
2. Find the average time your server is taking to handle requests
Answer [[Middleware_questions]]
------


------

#Answer :
1. 