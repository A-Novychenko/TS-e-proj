"use strict";
class Key {
    constructor() {
        this.signature = Math.random() * 100;
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error("Door is close");
        }
        this.tenants.push(person);
        console.log("Person inside");
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error("Key to another door");
        }
        return (this.door = true);
    }
}
const key = new Key();
const person = new Person(key);
const myHouse = new MyHouse(key);
myHouse.openDoor(person.getKey());
myHouse.comeIn(person);
//# sourceMappingURL=app.js.map