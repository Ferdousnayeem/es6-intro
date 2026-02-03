const product = {name: "shirt", price: 500, quantity: 7};

// const discount = product.price*20/100;
// const yourPay = product.price - discount;
// const vatAmount = product.price*7/100;
// const totalPrice = yourPay + vatAmount;

// const price = product.price;

// const discount = product.price*20/100;
// const yourPay = product.price - discount;
// const vatAmount = product.price*7/100;
// const totalPrice = yourPay + vatAmount;

const {name, price, quantity, tax=7} = product;

// console.log(name, price, quantity, tax);


const numbers = [25, 88];
const [first, second] = numbers;

const [math, physics] = [33, 45]

// console.log(first, second);
console.log(math, physics);
