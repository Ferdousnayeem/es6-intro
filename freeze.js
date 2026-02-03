const employee = {
    name : "karim",
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

Object.freeze(employee);

delete employee.age;
delete employee.designation;

employee.salary = employee.salary + 5000;
employee.location = 'Dhaka';
employee.salary = 15000;

console.log(employee);