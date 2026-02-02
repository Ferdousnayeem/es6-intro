// function declaration
function add(num1, num2) {
    return num1 + num2;
}

// funtion expression 
const addition = function (num1, num2){
    return num1 + num2;
}

const result = addition(17, 13);
// console.log(result);

// arrow function 

const add2 = (num1, num2) => num1 + num2;

const result2 = add2(3, 2)
// console.log(result2);


// multiline arrow function 
const doubleAdition = (num1, num2) => {
    const makeDouble = num1 * 2;
    const makaeAnotherDouble = num2 * 2;
    const addition = makeDouble + makaeAnotherDouble;
    return addition;
}

const result3 = doubleAdition(2, 3);
console.log(result3);