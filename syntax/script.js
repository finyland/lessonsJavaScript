'use strict';
// values

let integerLiteral = 3;
let fractionalLiteral = 0.1;
let stringLiteralOne = "string 1";
let stringLiteralTwo = 'string 2';
let stringLiteralThree = `string ${integerLiteral}`;
let arrayLiteral = [1, 2, 3];
let objectLiteral = {
    name: 'Igor',
    age: 27, // hanging comma
};

console.log(integerLiteral);
console.log(typeof integerLiteral);

console.log(fractionalLiteral);
console.log(typeof fractionalLiteral);

console.log(stringLiteralOne);
console.log(typeof stringLiteralOne);

console.log(stringLiteralTwo);
console.log(typeof stringLiteralTwo);

console.log(stringLiteralThree);
console.log(typeof stringLiteralThree);

console.log(arrayLiteral);
console.log(typeof arrayLiteral);

console.log(objectLiteral);
console.log(typeof objectLiteral);

console.log('Value = ' + integerLiteral);