#Question Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter and return a list of objects where each object is unique category-wise and has total price spent as its value.
Transactions is an array where each transaction - an object like

```
{
id: 1,
timestamp: 1656076800000,
price: 10,
category: 'Food',
itemName: 'Pizza',
}
```

  Output - [{ category: 'Food', totalSpent: 10}]  - Can have multiple categories, only one example is mentioned here
  
```
function calculateTotalSpentByCategory(transactions) {
  return [];
}

module.exports = calculateTotalSpentByCategory;
```


example transactions-

	{
		{
			price:10,
			category: 'Food',
		},
		{
			price:10,
			category: 'Food',
		},
		{
			price:20,
			category: 'Clothes',
		},
		{
			price:10,
			category: 'Food',
		}
	}

example answer-

	{
		{
			totalSpent:30,
			category: 'Food',
		},
		{
			totalSpent:20,
			category: 'Clothes'
		}
	}


#logic:  
- save the first category in `currentCategory` and save the price in `currentPrice` 
- continue the loop and check for similar category
- maintain a `used` array
- continue if `currentCategory` exists in `used` array 

#Answer:
```
function calculateTotalSpentByCategory(transactions) {

  let answer = [];
  let used = [];

  for(let i=0; i<transactions.length; i++) {

    let currentCategory = transactions[i].category
    let currentPrice = transactions[i].price  

    if(used.includes(transactions[i].category)) continue;  

    for(let j=i+1; j<transactions.length; j++) {
      if(transactions[j].category === currentCategory) {
        currentPrice += transactions[j].price
      }
    }

    used.push(currentCategory);
	answer.push({"category":currentCategory, "totalSpent":currentPrice});
  }
  
  return answer;
}

module.exports = calculateTotalSpentByCategory;
```

#Concept 
.includes() -- The **`includes()`** method of [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) instances determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate. 
    `if(used.includes(transactions[i].category)) continue`;
    