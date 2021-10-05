function UserInfo(name) {
    this.name = name;
    this.age = 27;
}

console.log(new UserInfo('Vasya'));
console.log(new UserInfo('Lena'));

let userInfo1 = {
    "13": 'value',
}
let user = userInfo1;
user[13] = "newvalue";
console.log(user[13]);
console.log(userInfo1[13]);