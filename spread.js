const numbers = [87, 8, 5, 91];
// console.log(numbers);
// console.log(...numbers);


// const first = [1,2,3,4,5];
// const second = first;
// second.push(6);
// console.log(first);


const first = [1,2,3,4,5];
const second = [0, ...first, 97, 45, 12];
second.push(6);
// console.log(first);
// console.log(second);


const ages = [45, 45, 1];
const prices = [98, 45, 65];
const all = [...ages, 555, ...prices];
// console.log(all);


const person = {name: "Mizan", age: 25};
const employee = {designation: "dev", ...person};
// console.log(employee)

const total = (a, b, c) => a + b + c;
const result = total(4, 4, 2);
const digits = [5, 5, 10];
// console.log(result);
const result2 = total(digits);
const result3 = total(...digits);
// console.log(result2);
// console.log(result3);