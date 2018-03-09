'use strict'

const [,,...number] = process.argv;

console.log('number', number);

const sumUp = number.reduce((num1,num2) => {
    console.log('Numbers added up',+num1 + +num2);
})