// nesting

let userInfo = {
    name: "Bulgur",
    age: 30,
    address: {
        city: "Allohagrad",
        street: "Rose Luksinburg str.",
    }
}

console.log(userInfo);
console.log(userInfo.name);
console.log(userInfo.address.city);

function makeUserInfo(name, age) {
    return {
        name: name,
        age: age,
    }
}

let user = makeUserInfo("Vasya", 40);
console.log(user);

function makeUserInfo2(name, age) {
    return {
        name: name,
        age: age,
    }
    
}

let user2 = makeUserInfo2("Vasya2", 42);
console.log(user2);