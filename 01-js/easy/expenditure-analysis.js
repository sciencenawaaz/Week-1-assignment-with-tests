/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let result = []
  

  for (let i = 0; i < transactions.length; i++) {
    const newCategory = transactions[i].category
    const newPrice = transactions[i].price
  
    let obj1 = result.find((b) => b.category === newCategory)
   
    if (!obj1) {
      result.push({category: newCategory , totalSpent: newPrice})
    } else {
      obj1.totalSpent += newPrice;
    }
    
  }
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
