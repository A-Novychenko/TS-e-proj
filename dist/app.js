"use strict";
class Zhiguli_8 {
    constructor() {
        this.needRepair = false;
        this.maxEngineLoad = 3;
    }
    checkEngine() {
        if (this.needRepair) {
            throw new Error("Engine not work");
        }
        const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
        if (this.maxEngineLoad === engineLoad) {
            this.needRepair = true;
            throw new Error("Engine broken again");
        }
    }
    startEngine() {
        this.checkEngine();
        console.log("Ta-ta-ta-ta");
    }
    repairEngine() {
        this.needRepair = false;
        console.log("Engine rebuilt");
    }
}
const auto = new Zhiguli_8();
try {
    auto.startEngine();
    auto.startEngine();
    auto.startEngine();
    auto.startEngine();
}
catch (e) {
    console.log(e);
    auto.repairEngine();
    auto.startEngine();
}
function protectedMethod() {
    return "Something";
}
class myClassJS {
    myPublicMethod() {
        return protectedMethod();
    }
}
class myClass {
    protectedMethod() {
        return "Something";
    }
    myPublicMethod() {
        return this.protectedMethod();
    }
}
class Animal {
    say() {
        console.log("Nothing to say");
    }
}
class Cat extends Animal {
    say() {
        console.log("Meow");
    }
}
class Dog extends Animal {
    say() {
        console.log("Woof");
    }
}
const cat = new Cat();
cat.say();
const dog = new Dog();
dog.say();
//# sourceMappingURL=app.js.map