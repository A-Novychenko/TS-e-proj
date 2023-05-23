const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

let num: number;
num = 10;
// num = "10"; // err

let str11: string;
str = "string only";
// str = 5 //err

const text =
  "if const, then you can not set the type, since it cannot be changed anyway";

let myNme = "Aleksandr"; // explicitly specified data type, will assign this type to the variable
// myNme = 10 // err

let arr: string[] = [];
arr = ["1", "text", "true"];

let arrNum: number[];
arrNum = [1, 2, 3];

let arrAny: any[];
arrAny = [1, "str", true, [], {}];

let arrObj: {name: string}[];
arrObj = [{name: "Nik"}, {name: "Mango"}];
// arrObj = [{ name: "Nik" }, {name: "Mango", age: "test"}] //err

let emptyObj: {};
emptyObj = {name: "Mango"};
// emptyObj.name  //err - an empty object data type is assigned, and an error occurs when accessing because an empty object has no properties there

let obj: {name: string; age?: number};
obj = {name: "Mango", age: 5};

let db: {
  id: string;
  title: string;
  number: number;
  date: Date;
  info?: {
    decr: string;
    isDone: boolean;
  };
};

db = {
  id: "d4frw65ef",
  title: "New task",
  number: 15,
  date: new Date(),
  info: {
    decr: "test",
    isDone: false,
  },
};

db = {
  id: "d4frw65ef",
  title: "New task",
  number: 15,
  date: new Date(),
};

//
/////ani is all data types
let anyType: any;
anyType = 0;
anyType = "str";
anyType = [];
anyType = {};
anyType.name;

let num1: number;
num1 = anyType;

//
// unkwown - unknown data type
let x: unknown;

x = 10;
x = "str";
x = {name: "Kiwi"};
// x.name// err

let str1: string;
// str = x // err - str-type string and x - type unknown
// typeGuard
if (typeof x === "string") str = x;

//
// tuple(кортеж)
let arrFixed: [string, number];
arrFixed = ["test", 5];
// arrFixed = [1, 't'] //err
//  but you can use push, pop ... and the compiler will not track it
arrFixed.push();

//
//enum
enum Toggle {
  ENABLE,
  DISABLE,
}
const services = {
  status: Toggle.ENABLE,
};
if (services.status === Toggle.ENABLE) console.log("It is active!");

//
// union
let varUnion: string | number;
varUnion = 10;
varUnion = "10";
// varUnion = true; // err

let varUnion2: string | number | boolean;
varUnion2 = 10;
varUnion2 = "10";
varUnion2 = true;

const combine = (param1: number | string, param2: number | string) => {
  if (typeof param1 === "string" || typeof param2 === "string") {
    return param1.toString() + param2.toString();
  }
  return param1 + param2;
};
console.log("test UnionNumber", combine(1, 2));
console.log("test UnionString", combine("Hello ", "World"));
console.log("test UnionStringPlusNumber", combine(500, "$"));

//
//literal Type
let action: "start" | "end";

const autoColection: string[] = [];

const updateAutoColection = (
  arr: string[],
  auto: string,
  operation: "addNew" | "carSold"
) => {
  if (operation === "addNew") {
    arr.push(auto);
  } else {
    const idx = arr.indexOf(auto);
    arr.splice(idx, 1);
  }
  return arr;
};

console.log("auto list", updateAutoColection(autoColection, "BMW", "addNew"));

//
//
//function
const foo = (num1: number, num2: number): void => {
  return console.log("foo");
};
const calcSum = (num1: number, num2: number): number => num1 + num2;
const errorMessageSend = (): never => {
  throw new Error("Test Error func");
};
const createAuto = (
  model: string,
  vEngine: number,
  year: number
): {model: string; vEngine: number; year: number} => ({
  model,
  vEngine,
  year,
});

console.log("createAuto()", createAuto("CX-5", 2.5, 2015));
/////////////////////////////
const calcAmount = (num1: number, num2: number): number => num1 + num2;

const calcTotal = (
  num1: number,
  num2: number,
  callback: (n1: number, n2: number) => number
): number => callback(num1, num2);
const total = calcTotal(2, 2, calcAmount);
console.log("total", total);
//
//
///
// Custom type
type autoType = {
  readonly _id: string;
  brand: string;
  model: string;
  price: number;
  isNew: boolean;
  options?: {
    panorama?: boolean;
    music?: boolean;
  };
  showPrice(): void;
};

const lexusIs250: autoType = {
  _id: "2135dsf42",
  brand: "Lexus",
  model: "is250",
  price: 40000,
  isNew: true,
  showPrice() {
    console.log("price", this.model, "", this.price);
  },
};

// console.log("_id 1 ", lexusIs250._id);
// lexusIs250._id = "change";                    //  Cannot assign to '_id' because it is a read-only property.
// console.log("_id 2 ", lexusIs250._id);
const lexusLs450: autoType = {
  _id: "2135dsf42",
  brand: "Lexus",
  model: "ls450",
  price: 30000,
  isNew: false,
  options: {
    music: true,
  },
  showPrice() {
    console.log("price", this.model, "", this.price);
  },
};

lexusIs250.showPrice();
lexusLs450.showPrice();
