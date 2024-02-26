"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getFinalPrice(price, discount) {
    return price - price / discount;
}
console.log(getFinalPrice(100, 5));
const sym1 = Symbol("orderId");
const sym2 = Symbol("orderId");
console.log(sym1);
const x1 = 1;
const x2 = 2;
const b = x1 == x2;
console.log(x1 == x2);
// const ord = Symbol('orderId');
const myOrder = {
    ord: "123"
};
console.log(myOrder['ord']);
let someVar = null;
console.log(someVar);
var var1;
// console.log(var1);
function getName(n) {
    if (n > 1) {
        return "Hello";
    }
    else {
        return null;
    }
}
console.log(getName(2));
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};
const logger = () => __awaiter(void 0, void 0, void 0, function* () {
    while (true) {
        let delayres = yield delay(1000);
        console.log("The server is up and running");
    }
});
// logger();
const logger2 = () => {
    while (true) {
        console.log("The server is up and running");
    }
};
// logger2();
function logError(errorMessage) {
    console.error(errorMessage);
    // return undefined;
}
logError("Salam");
let name1 = 'John';
let name2 = 'Adam';
const age = 25;
function getTax(income) {
    return income * 0.15;
}
let yourTax = getTax(50000);
let name3;
name3 = 'John';
let salary;
let isValid;
let customerName = null;
console.log(customerName);
let productId = 123;
// productId = null;
// productId = undefined;
function calcTax(state, income, dependents) {
    if (state === 'NY') {
        return income * 0.06 - dependents * 500;
    }
    else if (state === 'NJ') {
        return income * 0.05 - dependents * 300;
    }
}
let tax = calcTax('NJ', 50000, 2);
console.log(tax);
console.log(calcTax('AA', 50000, 5));
let padding;
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return "1111";
    }
    else if (typeof padding === "string") {
        return "2222";
    }
    else {
        return padding; // padding : never;
    }
    // else {
    //     throw new Error(`Expected string or number, got '${padding}'.`);
    // }
    // return "";
}
