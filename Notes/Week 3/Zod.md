This is Input Validation Library.

#Concept **Input Validation** 
This is a necessary step as the backend should be able to TACKLE all types of data being fed from the enduser and respond accordingly.

For eg: in the name field user inputs a json, or a number, or leaves it blank
or types 50MB text

- Anything that can crash the server

ex:
for `kidneys = [1,2]`  this is a array of number

Syntax:
```
// calling the library
const zod = require('zod')

// creating a schema
const schema = zod.array(zod.number())

// validating with safeParse function
const response = schema.safeParse(kidneys)
```

#Concept **Schema**
Schema is a fundamental concept used for defining the expected structure and constraints of your data.
In simpler terms, a Schema is a BLUEPRINT for the validation rules which one input should follow.

implementation:
```
const express = require('express');
const app = express();
const zod = require('zod');

const schema = zod.array(zod.number()) // blueprint

app.use(express.json())

app.post('/', () => {
	const kidneys = req.body.kidneys
	const response = schema.safeParse(kidneys) // main validation
	res.send({
		response
	})
})

app.listen(3000)
```

A better way to define a schema for more number of input fields such as 
1. email
2. password
3. country ("IN" OR "US")
4. kidneys

```
const schema = zod.object ({
	 email: zod.string(),
	 password: zod.string(),
	 country: zod.literal("IN").or(zod.literal("US")),
	 kidneys: zod.array(zod.number())
})
```

⭐ Inbuilt functions of zod:

`z.string().email()`
`z.string().min(8)` -> password minimum 8 characters