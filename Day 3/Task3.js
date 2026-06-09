//Task 1: Employee Salary Calculator Scenario

let basicSalary = 25000;
let HRA = 25000 * (20/100)
let Bonus = 25000 * (10/100)
let Tax = (basicSalary+ HRA + Bonus) * (5/100)
let finalSalary = basicSalary+ HRA + Bonus - Tax

console.log("Basic Salary : ",basicSalary)
console.log("HRA : " , HRA)
console.log("Bonus : ", Bonus );
console.log("Tax : " , Tax)
console.log("Final Salary : ", finalSalary)


// Task 2: Student Grade System
// Scenario


let mark = prompt("Enter your mark : ");

if (mark >= 90 && mark <= 100) {
    console.log("A+");
} else if (mark >= 80 && mark < 90) {
    console.log("A");
} else if (mark >= 70 && mark < 80) {
    console.log("B");
} else if (mark >= 60 && mark < 70) {
    console.log("C");
} else if (mark < 60) {
    console.log("Fail");
} else {
    console.log("Invalid mark");
}

// Task 3: Login Authentication System
// Scenario

let data = {
    name:"admin",
    password:"12345"
}

let name = prompt("Enter your name : ")
let password = prompt("Enter your password : ")

if(name == data.name && password == data.password){
    console.log("Hi " , name , " welcome back");   
}
else if(name!= data.name){
    console.log("Invalid Username");
    
}

else if(password!= data.password){
    console.log("Invalid Password");
    
}

// Task 4: ATM Withdrawal Machine
// Scenario

let balance = 5000
let amount = prompt("Enter your amount : ")

if(amount > balance){
    console.log("Insufficient Balance");
    console.log("Balance Amount : " , balance);
    
}
else{
    console.log("Withdrawal Success");
    console.log("Balance amount : " , balance - amount)
}


// Task 5: E-Commerce Discount System
// Scenario


let purchase = 12000;
let discount = 0;

if (purchase >= 10000) {
    discount = purchase * 0.20;
} else if (purchase >= 5000) {
    discount = purchase * 0.10;
} else if (purchase >= 2000) {
    discount = purchase * 0.05;
} else {
    discount = 0;
}

let finalAmount = purchase - discount;

console.log("Original Amount: ₹" + purchase);
console.log("Discount: ₹" + discount);
console.log("Final Amount: ₹" + finalAmount);


// Task 6: Traffic Fine Checker
// Scenario

let helmet = "No";
let license = "No";
let fine = 0;

if (helmet === "No" && license === "No") {
    fine = 3000;
} else if (helmet === "No") {
    fine = 1000;
} else if (license === "No") {
    fine = 2000;
} else {
    fine = 0;
}

console.log("Total Fine: ₹" + fine);

// Task 7: Employee Attendance Tracker
// Scenario

let attendance = ["P", "P", "A", "P", "A", "P", "P"];
let present = 0;
let absent = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {
        present++;
    } else {
        absent++;
    }
}

console.log("Present Days : " + present);
console.log("Absent Days : " + absent);

// Task 8: Product Inventory Management
// Scenario

let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};

for (let key in product) {
    console.log(key + " : " + product[key]);
}

// Task 9: Cab Fare Calculator
// Scenario

let distance = 12;
let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
} else if (distance <= 10) {
    fare = (5 * 20) + ((distance - 5) * 15);
} else {
    fare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);
}

console.log("Total Fare : ₹" + fare);

// Task 10: Mini Employee Management System (Real Company Task)
// Requirements


let employees = [
    {id: 1, name: "Rahul", salary: 25000},
    {id: 2, name: "Kiran", salary: 30000},
    {id: 3, name: "Navi", salary: 40000}
];

let highest = employees[0];
let lowest = employees[0];
let totalSalary = 0;

console.log("--- All Employees ---");
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name + " - Salary: " + employees[i].salary);
    
    // Total Salary
    totalSalary = totalSalary + employees[i].salary;
    
    // Find Highest
    if (employees[i].salary > highest.salary) {
        highest = employees[i];
    }
    
    // Find Lowest
    if (employees[i].salary < lowest.salary) {
        lowest = employees[i];
    }
}

console.log("Highest Salary: " + highest.name + " (" + highest.salary + ")");
console.log("Lowest Salary: " + lowest.name + " (" + lowest.salary + ")");
console.log("Total Employees: " + employees.length);
console.log("Total Salary Expenditure: " + totalSalary);