"use strict";
class House {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
    }
    showAddress() {
        console.log("Address: " + this.street);
    }
    showType() {
        console.log("House Type: " + this.type);
    }
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
class StoneHouse extends House {
    constructor(street, generalTenant) {
        super("stone", street);
        this.chargeOfTheHouse = generalTenant;
        this.addTenant(generalTenant);
    }
    showTenants() {
        console.log("General: " + this.chargeOfTheHouse);
        super.showTenants();
    }
}
const stoneHouse = new StoneHouse("Stone-world", "Max");
stoneHouse.addTenant("Anton");
stoneHouse.addTenant("Nikita");
stoneHouse.showTenants();
stoneHouse.showType();
stoneHouse.showAddress();
class Person {
    constructor() {
        this.personInfo = {};
    }
    set firstName(value) {
        console.log("firstName added");
        this.personInfo.firstName = value;
    }
    set lastName(value) {
        console.log("lastName added");
        this.personInfo.lastName = value;
    }
    get info() {
        const { personInfo } = this;
        return `${personInfo.lastName} ${personInfo.firstName}`;
    }
}
const person = new Person();
person.lastName = "Pupkin";
person.firstName = "Petha";
console.log(person.info);
class UseStatic {
    constructor() {
        UseStatic.count += 1;
    }
    static itStaticMethod() {
        console.log("Run static method");
    }
    showCount() {
        console.log(UseStatic.count);
    }
}
UseStatic.count = 0;
const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();
obj1.showCount();
obj2.showCount();
obj3.showCount();
UseStatic.itStaticMethod();
//# sourceMappingURL=app.js.map