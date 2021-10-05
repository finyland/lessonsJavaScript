let userInfo = {
    name: "Vasya",
    age: 100,
    address: {
        city: "Code-City",
        street: "String str",
    },
    showInfo: function() {
        console.log(`${this.name}, ${this.age} y.o. Address: ${this.address.city}, ${this.address.street}.`);
        let show = () => console.log(`${this.name}, just ${this.name}.`); //for arrow function there is no its own "this".
        show();
    },
}
userInfo.showInfo();

let user = userInfo;
userInfo = null;
user.showInfo();