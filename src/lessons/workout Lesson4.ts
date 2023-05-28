// class House {
//   private tenants: string[] = [];

//   constructor(private readonly type: string, private street: string) {}

//   public showAddress(this: House) {
//     console.log("Address: " + this.street);
//   }

//   public showType(this: House) {
//     console.log("House Type: " + this.type);
//   }

//   public addTenant(tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants() {
//     console.log(this.tenants);
//   }
// }

// class StoneHouse extends House {
//   private chargeOfTheHouse: string; // Главный в доме

//   constructor(street: string, generalTenant: string) {
//     super("stone", street); // Вызов родительского конструктора

//     // Добавляем владельца квартиры
//     this.chargeOfTheHouse = generalTenant;
//     this.addTenant(generalTenant);
//   }

//   public showTenants() {
//     console.log("General: " + this.chargeOfTheHouse);

//     // Запускаем родительский метод showTenants();
//     super.showTenants();
//   }
// }

// const stoneHouse = new StoneHouse("Stone-world", "Max");

// stoneHouse.addTenant("Anton");
// stoneHouse.addTenant("Nikita");

// stoneHouse.showTenants();
// stoneHouse.showType();
// stoneHouse.showAddress();

// type PersonInformation = {
//   firstName?: string;
//   lastName?: string;
// };

// class Person {
//   private personInfo: PersonInformation = {};

//   set firstName(value: string) {
//     console.log("firstName added");
//     this.personInfo.firstName = value;
//   }

//   set lastName(value: string) {
//     console.log("lastName added");
//     this.personInfo.lastName = value;
//   }

//   get info() {
//     const {personInfo} = this;
//     return `${personInfo.lastName} ${personInfo.firstName}`;
//   }
// }

// const person = new Person();

// person.lastName = "Pupkin";
// person.firstName = "Petha";

// console.log(person.info);

// class UseStatic {
//   private static count = 0;

//   constructor() {
//     UseStatic.count += 1;
//   }

//   public static itStaticMethod() {
//     console.log("Run static method");
//   }

//   public showCount() {
//     console.log(UseStatic.count);
//   }
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// obj3.showCount();

// UseStatic.itStaticMethod();

// //

// //

// //

// //
// // class Zhiguli_8 {
// //   private needRepair = false;
// //   private maxEngineLoad = 3;

// //   /**
// //    * Заводит двигатель машины если это возможно
// //    */
// //   private checkEngine() {
// //     // Проверяем не сломан ли двигатель
// //     if (this.needRepair) {
// //       throw new Error("Engine not work");
// //     }

// //     // Пробуем его завести
// //     const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
// //     if (this.maxEngineLoad === engineLoad) {
// //       this.needRepair = true;
// //       throw new Error("Engine broken again");
// //     }
// //   }

// //   /**
// //    * Завести двигатель
// //    */
// //   public startEngine() {
// //     this.checkEngine();

// //     console.log("Ta-ta-ta-ta");
// //   }

// //   /**
// //    * Ремонт двигателя
// //    */
// //   public repairEngine() {
// //     this.needRepair = false;

// //     console.log("Engine rebuilt");
// //   }
// // }

// // const auto = new Zhiguli_8();

// // try {
// //   auto.startEngine();
// //   auto.startEngine();
// //   auto.startEngine();
// //   auto.startEngine();
// // } catch (e) {
// //   console.log(e);
// //   auto.repairEngine();
// //   auto.startEngine();
// // }

// // ///////////

// // /////////

// // function protectedMethod() {
// //   return "Something";
// // }

// // class myClassJS {
// //   myPublicMethod() {
// //     return protectedMethod();
// //   }
// // }

// // class myClass {
// //   private protectedMethod() {
// //     return "Something";
// //   }

// //   public myPublicMethod() {
// //     return this.protectedMethod();
// //   }
// // }

// // //

// // //

// // //

// // class Animal {
// //   public say() {
// //     console.log("Nothing to say");
// //   }
// // }

// // class Cat extends Animal {
// //   public say() {
// //     console.log("Meow");
// //   }
// // }

// // class Dog extends Animal {
// //   public say() {
// //     console.log("Woof");
// //   }
// // }

// // const cat = new Cat();
// // cat.say(); // Meow

// // const dog = new Dog();
// // dog.say(); // Woof
