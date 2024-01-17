## ARROW Fns

```
// before es6
function sum(a, b){
	return a+b;
}

// arrow implementation
const sum = (a,b) => {
	return a+b;
}
```
- Real Difference  -> usage of `this` 

## Map

```
1. arr
2. transformation function (f)
```

-> map(arr, f) = final output

```
function transform_function(i) {
	return i * 2;
}

const newArray = arr.map(transform_function)
console.log(newArray)
```

The better way of writing map ->

```
const ans = arr.map(function (i) {
	return i * 2
})
console.log(ans)
```

#Question Create a map function that takes 2 inputs and array, and a transformation callback/fn and transforms the array into a new one using the transformation fn

## Filter

