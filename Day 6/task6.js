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

function generateInvoice(amount){
    console.log("----Your Invoice----");
    
    console.log("Your bill amount is : " , amount);
}

function applyDiscount(price,percentage,callback){
    let finalPrice = price * (1 - (percentage/100))
    generateInvoice(finalPrice)
}

applyDiscount(10000,10,generateInvoice)

// Task 8: Promotional Offers
console.log(`\n ---8: Promotional Offers---`);

function* offerGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

const getOffer = offerGenerator();

console.log(getOffer.next().value);
console.log(getOffer.next().value);
console.log(getOffer.next().value);
console.log(getOffer.next().value); 



// Task 9: Student Database Merge
console.log(`\n ---9: Student Database Merge---`);

let scienceStudents = ["Rishi","Rithulan"]
let commerceStudents =["Suthir","Sarath"]

let merge = [...scienceStudents,...commerceStudents]

console.log("All students " , merge);

console.log(`\n --- ---`);
console.log(`\n --- ---`);
console.log(`\n --- ---`);
console.log(`\n --- ---`);
console.log(`\n --- ---`);
console.log(`\n --- ---`);
