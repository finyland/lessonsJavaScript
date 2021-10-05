// syntax
// create object
// object constructor let userInfo = new Object();
// object literal let userInfo = {};

let firstPart = "likes";
let id = Symbol("id");

let userInfo = {
    name: "Bill", // object property
    age: 100, // hanging comma (recommended)
    [firstPart + " " + "js"]: true, // name property
    [firstPart]: "js", // name property
    // in protery I can use names: if, for, let etc...
    let: "10000 fists",
    0: "Hi there!", // 0 = "0". It's string, not number.
    [id]: 1,
};
// in variables I can't use names: if, for, let etc...
console.log(userInfo["likes js"]);
console.log(userInfo.name);
console.log(typeof userInfo['age']);
console.log(userInfo[firstPart]);
console.log(userInfo.let);
console.log(userInfo[0]); // 0 = "0". It's string, not number.
console.log(userInfo["0"]); // 0 = "0". It's string, not number.

// 1. Symbols are used to hide a property
// 2. System symbols

