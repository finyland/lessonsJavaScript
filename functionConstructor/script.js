function UserInfo(name) {
    this.name = name;
    this.age = 27;
}

console.log(new UserInfo('Vasya'));
console.log(new UserInfo('Lena'));

let userInfo1 = {
    "100": 'value',
}
let user = userInfo1;
user[100] = "newvalue";
console.log(user[100]);
console.log(userInfo1[100]);