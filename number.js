const score =  4000
console.log(score);

const balance = new Number(1000)
console.log(balance);

const frction = new Number (445.9938)

console.log(frction.toFixed(2));
console.log(frction.toPrecision(4));

const hunder = new Number(10000000)

console.log(hunder.toLocaleString('en-IN'));




// ++++++++++  maths +++++++++++++++++++//
console.log(Math.abs(-4));

console.log(Math.round(4.6));
console.log(Math.floor(4.9));


console.log(Math.floor(Math.random()*10) + 1);


const min = 10 
const max = 20 

console.log(Math.floor(Math.random()) * (max - min +1 ) + min)