// Task 1: Traffic Signal Management
console.log(`\n ---1: Traffic Signal Management---`);

let signal = prompt('Enter signal color in capital letters');

switch (signal) {
  case 'RED':
    console.log(`Stop the signal is ${signal}`);
    break;
  case 'YELLOW':
    console.log(`start engine the signal is ${signal}`);
    break;
  case 'GREEN':
    console.log(`GO the signal is ${signal}`);
    break;
}

// Task 2: Employee Attendance Report

console.log(`\n ---2: Employee Attendance Report---`);

const employeesData = [
  { id: 1, name: 'Employee 1', status: 'Present' },
  { id: 2, name: 'Employee 2', status: 'Present' },
  { id: 3, name: 'Employee 3', status: 'Present' },
  { id: 4, name: 'Employee 4', status: 'Present' },
  { id: 5, name: 'Employee 5', status: 'Present' },
  { id: 6, name: 'Employee 6', status: 'Present' },
  { id: 7, name: 'Employee 7', status: 'Present' },
  { id: 8, name: 'Employee 8', status: 'Present' },
  { id: 9, name: 'Employee 9', status: 'Present' },
  { id: 10, name: 'Employee 10', status: 'Present' },
  { id: 11, name: 'Employee 11', status: 'Present' },
  { id: 12, name: 'Employee 12', status: 'Present' },
  { id: 13, name: 'Employee 13', status: 'Present' },
  { id: 14, name: 'Employee 14', status: 'Present' },
  { id: 15, name: 'Employee 15', status: 'Present' },
  { id: 16, name: 'Employee 16', status: 'Present' },
  { id: 17, name: 'Employee 17', status: 'Present' },
  { id: 18, name: 'Employee 18', status: 'Present' },
  { id: 19, name: 'Employee 19', status: 'Present' },
  { id: 20, name: 'Employee 20', status: 'Present' },
  { id: 21, name: 'Employee 21', status: 'Present' },
  { id: 22, name: 'Employee 22', status: 'Present' },
  { id: 23, name: 'Employee 23', status: 'Present' },
  { id: 24, name: 'Employee 24', status: 'Present' },
  { id: 25, name: 'Employee 25', status: 'Present' },
  { id: 26, name: 'Employee 26', status: 'Present' },
  { id: 27, name: 'Employee 27', status: 'Present' },
  { id: 28, name: 'Employee 28', status: 'Present' },
  { id: 29, name: 'Employee 29', status: 'Present' },
  { id: 30, name: 'Employee 30', status: 'Present' },
];

for (let i = 0; i < employeesData.length; i++) {
  console.log(employeesData[i].name, ' ', employeesData[i].status);
}

// Task 3: ATM Cash Withdrawal
console.log(`\n ---3: ATM Cash Withdrawal---`);

let customerData = {
  name: 'Rishi',
  accountNumber: 'abc123',
  password: 123456,
  balance: 10000,
};

let currentBalance = Number(customerData.balance);
while (currentBalance > 0) {
  console.log('Successfully withdraw  ₹500');
  console.log('Remaining Balance is ', currentBalance - 500);
  currentBalance -= 500;
}

// Task 4: College Admission Eligibility
console.log(`\n ---4: College Admission Eligibility---`);
const studentDetails = [
  { name: 'Aarav Sharma', age: 18, percentage: 88.5 },
  { name: 'Priya Patel', age: 17, percentage: 92.0 },
  { name: "Liam O'Connor", age: 18, percentage: 59.4 },
  { name: 'Mei Lin', age: 18, percentage: 51.2 },
  { name: 'Samuel', age: 19, percentage: 84.7 },
];

for (let student of studentDetails) {
  if (student.age >= 18 && student.percentage >= 70) {
    console.log(student.name, ' Admission Approved.');
  } else if (student.age < 18 && student.percentage >= 70) {
    console.log(student.name, 'Admission Rejected. Because of age under 18');
  } else if (student.age >= 18 && student.percentage < 70) {
    console.log(student.name, 'Admission Rejected. Because of percentage below 70');
  } else {
    console.log(
      student.name,
      'Admission Rejected. Because of percentage below 70 and age is under 18'
    );
  }
}

// Task 5: Food Delivery Status
console.log(`\n ---5: Food Delivery Status---`);

function foodOrder(name, foodItem, address) {
  console.log(
    `Hi ${name} your order of ${foodItem} is confirmed. It will delivered to ${address} soon \n Thank you for Order`
  );
}

foodOrder('Rishi', 'Cola', 'xxx, yyy ,zzz');

// Task 6: Salary Processing System

console.log(`\n ---6: Salary Processing System---`);

function calculateSalary(amount) {
  return amount;
}

function calculateBonus(percentage, callback) {
  console.log(`Actual salary is ${(1 + percentage / 100) * callback}`);
}

calculateBonus(20, calculateSalary(25000));

// Task 7: E-commerce Discount Engine
console.log(`\n ---7: E-commerce Discount Engine---`);

function generateInvoice(amount) {
  console.log('----Your Invoice----');

  console.log('Your bill amount is : ', amount);
}

function applyDiscount(price, percentage, callback) {
  let finalPrice = price * (1 - percentage / 100);
  generateInvoice(finalPrice);
}

applyDiscount(10000, 10, generateInvoice);

// Task 8: Promotional Offers
console.log(`\n ---8: Promotional Offers---`);

function* offerGenerator() {
  yield '10% OFF';
  yield '20% OFF';
  yield 'Free Delivery';
  yield 'Buy 1 Get 1';
}

const getOffer = offerGenerator();

console.log(getOffer.next().value);
console.log(getOffer.next().value);
console.log(getOffer.next().value);
console.log(getOffer.next().value);

// Task 9: Student Database Merge
console.log(`\n ---9: Student Database Merge---`);

let scienceStudents = ['Rishi', 'Rithulan'];
let commerceStudents = ['Suthir', 'Sarath'];

let merge = [...scienceStudents, ...commerceStudents];

console.log('All students ', merge);

// Task 10: Online Exam System (Rest Operator)
console.log(`\n ---10: Online Exam System---`);

function calculateTotal(studentName, ...marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  console.log(`Student: ${studentName} | Total Marks: ${total}`);
}

calculateTotal('Rishi', 85, 90, 78, 92);

// Task 11: Employee Profile (Object Destructuring)
console.log(`\n ---11: Employee Profile---`);

const employee = {
  name: 'Rahul',
  department: 'IT',
  salary: 50000,
  experience: 3,
};

const { name, department, salary, experience } = employee;

console.log('Name:', name);
console.log('Department:', department);
console.log('Salary:', salary);
console.log('Experience:', experience + ' years');

// Task 12: Product Inventory Filter (Filter Method)
console.log(`\n ---12: Product Inventory Filter---`);

const products = [
  { name: 'Mouse', price: 500 },
  { name: 'Laptop', price: 60000 },
  { name: 'Keyboard', price: 1200 },
  { name: 'Monitor', price: 15000 },
];

const expensiveProducts = products.filter((product) => product.price > 5000);

console.log('Products above ₹5000: ', expensiveProducts);

// Task 13: Find First Premium Customer (Find Method)
console.log(`\n ---13: Find First Premium Customer---`);

const purchaseAmounts = [20000, 45000, 60000, 75000];
const firstPremium = purchaseAmounts.find((amount) => amount > 50000);

console.log('First Premium Customer Purchase:', firstPremium);

// Task 14: Company Expense Tracker (Reduce Method)
console.log(`\n ---14: Company Expense Tracker---`);

const expenses = [5000, 12000, 3000, 8000];
const totalExpense = expenses.reduce((total, expense) => total + expense, 0);

console.log('Total Company Expenses:', totalExpense);

// Task 15: Gaming Tournament Verification (Every Method)
console.log(`\n ---15: Gaming Tournament Verification---`);

const players = [
  { name: 'Rishi', age: 26 },
  { name: 'Suthir', age: 25 },
  { name: 'Kavin', age: 20 },
];

const allAdults = players.every((player) => player.age > 18);

console.log('Are all players above 18?:', allAdults);

// Task 16: Job Portal Search (Some Method)
console.log(`\n ---16: Job Portal Search---`);

const candidates = [
  { name: 'Rahul', skills: ['Python', 'Java'] },
  { name: 'John', skills: ['React', 'Node.js'] },
];

const hasReactExpert = candidates.some((candidate) => candidate.skills.includes('React'));

console.log('Is there a candidate who knows React?:', hasReactExpert);

// Task 17: Mobile Number Validator (String Methods)
console.log(`\n ---17: Mobile Number Validator---`);

function validateMobile(number) {
  let numStr = number.toString();
  let isValid =
    numStr.length === 10 &&
    (numStr.startsWith('6') ||
      numStr.startsWith('7') ||
      numStr.startsWith('8') ||
      numStr.startsWith('9'));
  console.log(`Number ${number} valid:`, isValid);
}

validateMobile('9876543210');

// Task 18: URL Slug Generator (Split + Join)
console.log(`\n ---18: URL Slug Generator---`);

let title = 'Learn JavaScript Complete Course';
let slug = title.toLowerCase().split(' ').join('-');

console.log('Generated Slug:', slug);

// Task 19: Employee Sorting Dashboard (Sort Method)
console.log(`\n ---19: Employee Sorting Dashboard---`);

const emps = [
  { name: 'Rahul', salary: 25000 },
  { name: 'Kavin', salary: 40000 },
  { name: 'John', salary: 30000 },
];

const sorted = [...emps].sort((a, b) => b.salary - a.salary);
console.log('Employees sorted by salary (High to Low):', sorted);

// Task 20: Movie Booking System (Map Method)
console.log(`\n ---20: Movie Booking System---`);

const movies = ['Inception', 'Interstellar', 'Tenet'];
const bookingIds = movies.map((movie, index) => {
  return { id: index + 1, movieName: movie };
});

console.log('Booking IDs:', bookingIds)