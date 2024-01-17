/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

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