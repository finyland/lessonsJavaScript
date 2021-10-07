//true: abc, abc123, $abc, _abc.
//false: 123abc, a-bc.

// name the variables clearly
// use the loverCamelCase style

// reserved names: let, for, break etc. https://html5css.ru/js/js_reserved.php



// variable declaration

let var1;
var1 = 1;

let var2 = 2; // дословно: пусть var2 будет равна 2

console.log(var1);
console.log(var2);


let firstName = 'Igor',
    age = 26,
    height = 192,
    city = 'Saint-Petersburg';

console.log(`My name is ${firstName}. Me ${age}. My height is ${height} cm. I live in ${city}.`)




// area of visibility

let visibility = 'external variable';

function internalVar() {
    let visibility = 'internal variable';
    console.log(visibility);
}
internalVar();
console.log(visibility);




// constant with a known value

const ABC = 10;
const COLOR_WHITE = '#ffffff';

console.log(ABC);
console.log(COLOR_WHITE);

// constant with calculated value

const abc = 1 + 9;
console.log(abc);

// I can change the value of a constant, but not the data type

const userData = {
    name: 'Igor',
    age: 100,
}
console.log(userData);

userData.age = 27
console.log(userData);




// key word var

// the variable can be used before it is declared

ageVar = 27;
console.log(ageVar);

var ageVar;

if (true) {
    let sizeLet = 50;
}
//console.log(sizeLet);

if (true) {
    var sizeVar = 50;
}
console.log(sizeVar);