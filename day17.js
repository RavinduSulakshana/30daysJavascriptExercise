// Exercises: Level 1
/*Store you first name, last name, age, country, city in your browser localStorage.*/

localStorage.setItem("firstName", "Ravindu");
localStorage.setItem("lastName", "Sulakshana");
localStorage.setItem("age", "22");
localStorage.setItem("country", "Sri Lanka");
localStorage.setItem("city", "Piliyandala");

//Exercises: Level 2
/*Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.*/

const student = {
  firstName: "Ravindu",
  lastName: "Sulakshana",
  age: 25,
  skills: ["javascript", "html", "Css", "Node"],
  country: "Sri lanka",
  enrolled: false,
};
localStorage.setItem("student", JSON.stringify(student));

//Exercises: Level 3
/*Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.*/
const personAccount = {
  firstName: "Ravindu",
  lastName: "Sulakshana",
  incomes: [],
  expenses: [],

  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },
  totalIncomes: function () {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },
  totalExpenses: function () {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpenses;
  },
  accountInfo: function () {
    return `Account Information for ${this.firstName} ${this.lastName}:
        Total Income: $${this.totalIncome()}
        Total Expenses: $${this.totalExpense()}
        Account Balance: $${this.accountBalance()}`;
  },
};

// Adding income and expenses
personAccount.addIncome("Salary", 5000);
personAccount.addIncome("Freelance Work", 1000);
personAccount.addExpense("Rent", 1200);
personAccount.addExpense("Groceries", 300);

// Store the personAccount object in localStorage
localStorage.setItem("personAccount", JSON.stringify(personAccount));
localStorage.getItem("personAccount");
