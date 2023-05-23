// Задайте правильні ts типи для класичних js;
var age = 50;
var name1 = "Max";
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) {
    return 100 + a;
};
// Задайте тип для змінної, в яку можна зберегти будь-яке значення.
var anything = -20;
anything = "Text";
anything = {};
// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
var person;
person = ["Max", 21];
// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var service = {
    status: Status.LOADING,
};
if (service.status === Status.LOADING)
    console.log("Завантажується");
// Зробіть змінну, яка може приймати або рядок, або число.
var varNumOrStr;
//
// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
var varSwitch;
// Вкажіть типи для наступних функцій
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    if (typeof num1 === "string" || typeof num2 === "string") {
        return num1.toString + num2.toString();
    }
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
// Створіть свій тип даних на основі наявних даних.
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
var myPage1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
var myPage2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
