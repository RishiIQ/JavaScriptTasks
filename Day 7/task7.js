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

const passedStudents = students.filter(student => student.mark >= 40);

const failedStudents = students.filter(student => student.mark < 40);


const gradeList = students.map(student => {
    let grade;
    if (student.mark >= 80) grade = "A";
    else if (student.mark >= 40) grade = "B";
    else grade = "Fail";
    
    return { name: student.name, grade: grade };
});

console.log("Passed Students:", passedStudents);
console.log("Failed Students:", failedStudents);
console.log("Grade List:", gradeList);



console.log(`\n --- ---`);
console.log(`\n --- ---`);
console.log(`\n --- ---`);
console.log(`\n --- ---`);
console.log(`\n --- ---`);
console.log(`\n --- ---`);