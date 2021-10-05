let userInfo = {
    name: "Leo",
}
console.log(userInfo.name);

userInfo.age = 27;
console.log(userInfo);

userInfo["likes JS"] = true;
console.log(userInfo);

userInfo.addres = {
    city: "Oulu",
    street: "Lenina str",
};
console.log(userInfo);

delete userInfo.age;
console.log(userInfo);

userInfo.name = "Fender";
console.log(userInfo.name);

const chillOut = {
    "Are you fine?": true,
}
chillOut["Are you fine?"] = false;
console.log(chillOut["Are you fine?"]);