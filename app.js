var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
var num;
num = 10;
// num = "10"; // err
var str;
str = "string only";
// str = 5 //err
var text = "if const, then you can not set the type, since it cannot be changed anyway";
var myNme = "Aleksandr"; // explicitly specified data type, will assign this type to the variable
// myNme = 10 // err
var arr = [];
arr = ["1", "text", "true"];
var arrNum;
arrNum = [1, 2, 3];
var arrAny;
arrAny = [1, "str", true, [], {}];
var arrObj;
arrObj = [{ name: "Nik" }, { name: "Mango" }];
// arrObj = [{ name: "Nik" }, {name: "Mango", age: "test"}] //err
var emptyObj;
emptyObj = { name: "Mango" };
// emptyObj.name  //err - an empty object data type is assigned, and an error occurs when accessing because an empty object has no properties there
var obj;
obj = { name: "Mango", age: 5 };
var db;
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
var anyType;
anyType = 0;
anyType = "str";
anyType = [];
anyType = {};
anyType.name;
var num1;
num1 = anyType;
//
// unkwown - unknown data type
var x;
x = 10;
x = "str";
x = { name: "Kiwi" };
// x.name// err
var str1;
// str = x // err - str-type string and x - type unknown
// typeGuard
if (typeof x === "string")
    str = x;
//
// tuple(кортеж)
var arrFixed;
arrFixed = ["test", 5];
// arrFixed = [1, 't'] //err
//  but you can use push, pop ... and the compiler will not track it
arrFixed.push();
//
//enum
var Toggle;
(function (Toggle) {
    Toggle[Toggle["ENABLE"] = 0] = "ENABLE";
    Toggle[Toggle["DISABLE"] = 1] = "DISABLE";
})(Toggle || (Toggle = {}));
var services = {
    status: Toggle.ENABLE,
};
if (services.status === Toggle.ENABLE)
    console.log("It is active!");
//
// union
var varUnion;
varUnion = 10;
varUnion = "10";
// varUnion = true; // err
var varUnion2;
varUnion2 = 10;
varUnion2 = "10";
varUnion2 = true;
var combine = function (param1, param2) {
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
var action;
var autoColection = [];
var updateAutoColection = function (arr, auto, operation) {
    if (operation === "addNew") {
        arr.push(auto);
    }
    else {
        var idx = arr.indexOf(auto);
        arr.splice(idx, 1);
    }
    return arr;
};
console.log("auto list", updateAutoColection(autoColection, "BMW", "addNew"));
