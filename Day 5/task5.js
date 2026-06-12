// Task 1: Employee Bonus Calculator
console.log(`\n -----1: Employee Bonus Calculator-----`);

const EmployeeDetails = [
    { name: "Alice Johnson", salary: 85000, experience: 5 },
    { name: "Bob Smith", salary: 62000, experience: 2 },
    { name: "Charlie Davis", salary: 32000, experience: 1 },
    { name: "Diana Prince", salary: 95000, experience: 7 }
];

for(let employee of EmployeeDetails){
    if(employee.experience >= 5){
        console.log(`${employee.name} , is eligible for 20% Bonus`);
        console.log(`${employee.name} , final salary is ${employee.salary * 1.2}`);
    }
    else if(employee.experience >= 2){
        console.log(`${employee.name} , is eligible for 10% Bonus`);
        console.log(`${employee.name} , final salary is ${employee.salary * 1.1}`);
    }
    else{
        console.log(`${employee.name} , is eligible for 5% Bonus`);
        console.log(`${employee.name} , final salary is ${employee.salary * 1.05}`);
    }

}

// Task 2: College Admission System
console.log(`\n -----2: College Admission System -----`);
const studentDetails = [
    { name: "Aarav Sharma", age: 16, percentage: 88.5 },
    { name: "Priya Patel", age: 17, percentage: 92.0 },
    { name: "Liam O'Connor", age: 18, percentage: 59.4 },
    { name: "Mei Lin", age: 18, percentage: 51.2 },
    { name: "Samuel", age: 17, percentage: 84.7 }
];

for(let student of studentDetails){

if(student.age >= 17 && student.percentage >= 60){
    console.log(student.name , " Admission Approved.")
}else{
    console.log(student.name , "Admission Rejected.")
    
}
}


// Task 3: Food Delivery Menu
console.log(`\n ----- 3: Food Delivery Menu -----`);
let order = prompt("press 1 for Pizza , press 2 for Burger , press 3 for Shawarma, press 4 for Fried Rice")

switch(order){
    case "1":
        console.log("Order Confirmed : Pizza");
        break;
    case "2":
        console.log("Order Confirmed : Burger");
        break;
    case "3":
        console.log("Order Confirmed : Shawarma");
        break;
    case "4":
        console.log("Order Confirmed :");
        break;
    default:
        console.log("Item not available please select Existing Item");
        
}

// Task 4: Attendance Tracker
console.log(`\n ----- 4: Attendance Tracker -----`);
const studentNames = [
    "Karthik",
    "Priya",
    "Arun",
    "Anitha",
    "Santhosh",
    "Divya",
    "Mugilan",
    "Keerthana",
    "Vijay",
    "Srividya"
];

for(let student of studentNames){
    console.log(student);
    
}
console.log("Student count is ",studentNames.length);

// Task 5: E-Commerce Cart
console.log(`\n ----- 5: E-Commerce Cart -----`);

let cart = [
 { product: "Mobile", price: 15000 },
 { product: "Headset", price: 2000 },
 { product: "Charger", price: 1000 }
]

    let value = 0
    let expensiveProductPrice = 0
    let expensiveProduct = ""
for(let product of cart){

    console.log(product.product);
    value += product.price
    if(product.price>expensiveProductPrice){
        expensiveProductPrice = product.price
        expensiveProduct = product.product
    }

}
console.log("Total cart value : " , value);
console.log("Most expensive product is : " , expensiveProduct);


// Task 6: Bank Account Management
console.log(`\n ----- 6: Bank Account Management -----`);

const customerDetail = {
        name:"Rishi",
        accnum:"abc",
        password:"123",
        balance:10000
    }

let accnumber = prompt("Enter your account number : ") 
let pass = prompt("Enter your account Password : ") 

function deposit(amount){
    if(customerDetail.accnum == accnumber && customerDetail.password == pass){
        console.log(`Your deposit amount of ${amount} is successfully deposited and balance is ${customerDetail.balance + amount} `);
    }
    else{
        console.log("Invalid user name or password");
        
    }
}

function withdraw(amount){
    if(customerDetail.accnum == accnumber && customerDetail.password == pass && customerDetail.balance >= amount){
        console.log(`Your amount of ${amount} is successfully dispatched and balance is ${customerDetail.balance - amount} `);
    }
    else if(customerDetail.accnum == accnumber && customerDetail.password == pass && customerDetail.balance < amount){
        console.log(`Insufficient balance Your current balance is ${customerDetail.balance}`);
        
    }
    else{
        console.log("Invalid user name or password");
    }
}

deposit(1000)
withdraw(11000)


// Task 7: Movie Ticket Booking
console.log(`\n ----- 7: Movie Ticket Booking -----`);

let Age = prompt("Enter your age : ")

if(Age < 5){
    console.log("Free Ticket");   
}
else if(Age > 5 && Age < 18){
    console.log("Ticket Price is : ₹100" );
}
else if(Age > 18 && Age <= 60){
    console.log("Ticket Price is : ₹200" );
}
else{
    console.log("Ticket Price is : ₹120" );
}

// Task 8: Online Shopping Discount
console.log(`\n ----- 8: Online Shopping Discount -----`);

let purchaseAmount = prompt("Enter Actual amount : ")

if(purchaseAmount > 5000){
    console.log(`Original amount is : ${purchaseAmount}` );
    console.log(`Discount amount is : ${purchaseAmount * 0.2}` );
    console.log(`Final amount is : ${purchaseAmount * 0.8}` );   
}
else if(purchaseAmount > 3000){
    console.log(`Original amount is : ${purchaseAmount}` );
    console.log(`Discount amount is : ${purchaseAmount * 0.1}` );
    console.log(`Final amount is : ${purchaseAmount * 0.9}` );   
}
else{
    console.log(`Original amount is : ${purchaseAmount}` );
    console.log(`Discount amount is : ${purchaseAmount * 0.05}` );
    console.log(`Final amount is : ${purchaseAmount * 0.95}` );   
}

// Task 9: Food Inventory System
console.log(`\n ----- 9: Food Inventory System -----`);

const grocery = ["Rice","Oil","Sugar","Milk","Egg"]

console.log(grocery.push("Potato","Tomato"));
console.log(grocery.shift());
console.log(grocery.pop());
console.log(grocery.includes("Milk"));
console.log(grocery)

//  Task 10: Hospital Patient Management
console.log(`\n ----- 10: Hospital Patient Management -----`);
const patientRecords =
    {
        patientName: "Senthil Kumar",
        age: 45,
        disease: "Hypertension",
        doctor: "Dr. Ramesh"
    }

for (let key in patientRecords){
    console.log(`${key} : ${patientRecords[key]}`);
    
}

console.log(`\n ----- destructured -----`);
let {patientName , age ,disease , doctor } = patientRecords
console.log(`Name :  , ${patientName} \nAge :  ${age}  \nDisease :  ${disease}  \nDoctor ${doctor}`);
