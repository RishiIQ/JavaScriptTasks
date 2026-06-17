// Task 1: Employee Salary Management

console.log(`\n ---Task 1: Employee Salary Management---`);

const employeeData = [
 {id: 1, name: "Rahul", salary: 25000},
 {id: 2, name: "Kavin", salary: 50000},
 {id: 3, name: "John", salary: 75000}
];


const highEarners = employeeData.filter(e => e.salary > 40000);

for(let emp of highEarners) {
    console.log(`Employee whose salary is above ₹40,000: ${emp.name}`);
}

const highSalaried = employeeData.filter(e => e.salary > 60000);
console.log(`First employee whose salary is above ₹60,000 : ${highSalaried[0].name}`);

const totalExpense = employeeData.reduce((acc, emp) => acc + emp.salary, 0);
console.log("Total company salary expense:", totalExpense);

const employeeNames = employeeData.map(emp => emp.name);
console.log("List of employee names:", employeeNames);

// Task 2: College Admission Form
console.log(`\n ---Task 2: College Admission Form---`);
const studentDetails = [
  { name: 'Aarav Sharma', age: 18, percentage: 88.5 },
  { name: 'Priya Patel', age: 17, percentage: 92.0 },
  { name: "Liam O'Connor", age: 18, percentage: 59.4 },
  { name: 'Mei Lin', age: 18, percentage: 51.2 },
  { name: 'Samuel', age: 19, percentage: 84.7 },
];

for (let student of studentDetails) {
  if (student.age >= 18 && student.percentage >= 60) {
    console.log(student.name, ' Admission Approved.');
  } else if (student.age < 18 && student.percentage >= 60) {
    console.log(student.name, 'Admission Rejected. Because of age under 18');
  } else if (student.age >= 18 && student.percentage < 60) {
    console.log(student.name, 'Admission Rejected. Because of percentage below 60');
  } else {
    console.log(
      student.name,
      'Admission Rejected. Because of percentage below 60 and age is under 18'
    );
  }
}

// Task 3: E-Commerce Cart
console.log(`\n ---Task 3: E-Commerce Cart---`);

const cart = [
 {product:"Shoes",price:2000,qty:2},
 {product:"Watch",price:1500,qty:1},
 {product:"Bag",price:1000,qty:3}
]

let totalAmount = cart.reduce((amount,data) => amount + data.price,0)
console.log("Total bill amount : ", totalAmount);

const mostExpensive = cart.reduce((prev, current) => {
    return (current.price > prev.price) ? current : prev;
});

console.log("The most expensive product is:", mostExpensive);

const productNames = cart.map(item => item.product);

console.log("All product names : " , productNames);

// Task 5: Student Result Processing
console.log(`\n ---Task 5: Student Result Processing---`);

const studentData = [
 {name:"A",mark:95},
 {name:"B",mark:45},
 {name:"C",mark:80},
 {name:"D",mark:30}
]

const passedStudents = studentData.filter(student => student.mark >= 40);

const failedStudents = studentData.filter(student => student.mark < 40);


const gradeList = studentData.map(student => {
    let grade;
    if (student.mark >= 80) grade = "A";
    else if (student.mark >= 40) grade = "B";
    else grade = "Fail";
    
    return { name: student.name, grade: grade };
});

console.log("Passed Students:", passedStudents);
console.log("Failed Students:", failedStudents);
console.log("Grade List:", gradeList);

// Task 6: Online Food Delivery
console.log(`\n ---Task 6: Online Food Delivery---`);
function placeOrder(customerName, ...items) {
    console.log(`--- Order Details ---`);
    console.log(`Customer Name: ${customerName}`);
    
    console.log(`Ordered Items: ${items.join(", ")}`);
    
    console.log(`Total Item Count: ${items.length}`);
}
placeOrder("Rishi", "Pizza", "Burger", "Coke");
placeOrder("Kowsalya", "Pasta", "Garlic Bread");


// Task 7: Bank Account System
console.log(`\n ---Task 7: Bank Account System---`);

let balance = 1000;

function deposit(amount) {
balance += amount;
return balance;
}

function withdraw(amount) {
if (amount <= balance) {
balance -= amount;
}
return balance;
}

function checkBalance() {
return balance;
}

console.log("Deposit 500:", deposit(500));
console.log("Withdraw 200:", withdraw(200));
console.log("Current Balance:", checkBalance());

// Task 8: Movie Ticket Booking
console.log(`\n ---Task 8: Movie Ticket Booking---`);

let bookedSeats = ["A1", "B2", "C3"];
function bookSeat(seat) {
if (!bookedSeats.includes(seat)) {
bookedSeats.push(seat);
console.log(seat, "booked successfully.");
} else {
console.log(seat, "is already booked.");
}
}
bookSeat("D4");
bookSeat("A1");
console.log("All booked seats:", bookedSeats);

// Task 9: User Login Validation
console.log(`\n ---Task 9: User Login Validation---`);

function validateLogin(username, password, email) {
let isValid = true;
if (username.includes(" ")) isValid = false;
if (password.length < 8) isValid = false;
if (!email.includes("@")) isValid = false;
return isValid;
}
console.log("Login valid:", validateLogin("Rishi", "password123", "rishi@gmail.com"));
 
// Task 10: Product API Dashboard
console.log(`\n ---Task 10: Product API Dashboard---`);

async function fetchProducts() {
const response = await fetch('https://fakestoreapi.com/products');
const products = await response.json();
products.forEach(p => console.log("Title:", p.title));
const expensive = products.filter(p => p.price > 1000);
console.log("Products above 1000:", expensive.length);
console.log("Total products:", products.length);
}
fetchProducts();

// Task 11: Birthday Day Finder
console.log(`\n ---Task 11: Birthday Day Finder---`);

function getDOBDetails(dobString) {
const dob = new Date(dobString);
console.log("Day:", dob.getDate());
console.log("Month:", dob.getMonth() + 1);
console.log("Year:", dob.getFullYear());
console.log("Weekday:", dob.toLocaleDateString('en-US', { weekday: 'long' }));
}
getDOBDetails("1999-07-11");

// Task 12: Netflix Subscription System
console.log(`\n ---Task 12: Netflix Subscription System---`);

let plan = "Premium";
let benefits = plan === "Mobile" ? "480p" : plan === "Basic" ? "720p" : plan === "Standard" ? "1080p" : "4K+HDR";
console.log("Plan:", plan, "| Benefits:", benefits);

// Task 13: Hospital Patient Management
console.log(`\n ---Task 13: Hospital Patient Management---`);

const patients = [{id: 1, name: "A", critical: true}, {id: 2, name: "B", critical: false}];
console.log("Critical:", patients.filter(p => p.critical));
console.log("Patient ID 1:", patients.find(p => p.id === 1));
console.log("Total:", patients.length);

// Task 14: Inventory Management System
console.log(`\n ---Task 14: Inventory Management System---`);

const inv1 = [{name: "Laptop", price: 50000}];
const inv2 = [{name: "Mouse", price: 500}];
const merged = [...inv1, ...inv2];
const { name, price } = merged[0];
const newInv = [...merged, {name: "Keyboard", price: 1000}];
console.log(newInv);

// Task 15: WhatsApp Group Management
console.log(`\n ---Task 15: WhatsApp Group Management---`);

let group = ["Rishi", "Kowsalya"];
group.push("Mohan");
group.pop();
group.shift();
group.unshift("Sugapriya");
group.splice(1, 0, "Shubham");
console.log("Final List:", group)