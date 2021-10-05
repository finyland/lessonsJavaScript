// Used to iterate over all properties 

// for (let key in object) {
    //body of cicle
// }

let userInfo = {
    name: "Ahmad Tea",
    age: "1 season",
    address: {
        city: "Solland",
        street: "Solholm",
    }
}

for (let key in userInfo) {
    console.log(key); //key
    console.log(userInfo[key]); // value

}

for (let key in userInfo.address) {
    console.log(key); //key
    console.log(userInfo.address[key]); //value
}