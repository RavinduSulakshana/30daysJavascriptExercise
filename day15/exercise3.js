class Statistics {
  constructor(arr) {
    this.arr = arr;
  }
  count() {
    return this.arr.length;
  }
  sum() {
    return this.arr.reduce((acc, cur) => acc + cur, 0);
  }
  min() {
    return Math.min(...this.arr);
  }
  max() {
    return Math.max(...this.arr);
  }
  range() {
    return this.max() - this.min();
  }
  mean() {
    return this.sum() / this.count();
  }
  median() {
    const sortedAges = [...this.arr].sort((a, b) => a - b);
    const middle = Math.floor(this.count() / 2);
    if (this.count % 2 === 0) {
      return (sortedAges[middle - 1] + sortedAges[middle]) / 2;
    } else {
      return sortedAges[middle];
    }
  }
  mode() {
    const frequency = {};
    this.arr.forEach((element) => {
      frequency[element] = (frequency[element] || 0) + 1;
    });
    let maxFrequency = 0;
    let mode = [];
    for (const key in frequency) {
      if (frequency[key] > maxFrequency) {
        mode = [Number(key)];
        maxFrequency = frequency[key];
      } else if (frequency[key] === maxFrequency) {
        mode.push(Number(key));
      }
    }
    return { mode, count: maxFrequency };
  }
  var() {
    const meanValue = this.mean();
    const variance = this.arr.reduce(
      (acc, cur) => acc + Math.pow(cur - meanValue, 2),
      0
    );
    return variance;
  }
  std() {
    return Math.sqrt(this.var());
  }
}
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
const statistics = new Statistics(ages);

console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.var()); // 17.5
console.log("Standard Deviation: ", statistics.std()); // 4.2

/* Create a class called PersonAccount.
It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, 
accountInfo,addIncome, addExpense and accountBalance methods.
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/

class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = [];
    this.expenses = [];
  }
  totalIncome() {
    return this.incomes.reduce((acc, cur) => acc + cur.income, 0);
  }
  totalExpense() {
    return this.expenses.reduce((acc, cur) => acc + cur.expense, 0);
  }
  accountInfo() {
    return `fullname : ${this.firstname} ${this.lastname}`;
  }
  addIncome(description, income) {
    this.incomes.push({ description, income });
  }
  addExpense(description, expense) {
    this.expenses.push({ description, expense });
  }
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
}
const person = new PersonAccount("John", "Doe");

person.addIncome("Salary", 3000);
person.addIncome("Freelance", 1200);
person.addExpense("Rent", 1000);
person.addExpense("Groceries", 300);
console.log("Account Balance:", person.accountBalance());

