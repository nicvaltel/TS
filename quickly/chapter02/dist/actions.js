"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFailedAction = exports.SearchSuccessAction = exports.SearchAction = void 0;
class SearchAction {
    constructor(payload) {
        this.payload = payload;
        this.actionType = "SEARCH";
    }
}
exports.SearchAction = SearchAction;
class SearchSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.actionType = "SEARCH_SUCCESS";
    }
}
exports.SearchSuccessAction = SearchSuccessAction;
class SearchFailedAction {
    constructor() {
        this.actionType = "SEARCH_FAILED";
    }
}
exports.SearchFailedAction = SearchFailedAction;
function area(shape) {
    switch (shape.kind) {
        case "rectangle": return shape.height * shape.width;
        case "circle": return Math.PI * shape.radius ** 2;
    }
}
const myRect = { kind: "rectangle", width: 5, height: 7 };
console.log(area(myRect));
const myCircle = { kind: "circle", radius: 10 };
console.log(area(myCircle));
;
;
function foo(x) {
    if ("a" in x) {
        return x.a;
    }
    else {
        return x.b;
    }
}
let aaa = { a: 42 };
let bbb = { b: "hello" };
console.log(foo(aaa));
console.log(foo(bbb));
let person1;
person1 = JSON.parse(' {"adress" : "25 Brodway"} ');
console.log(person1.address);
let person2;
person2 = JSON.parse(' {"adress" : "25 Brodway"} ');
// console.log(person2.address);
const isPerson = (object) => !!object && "address" in object;
person2 = null;
if (isPerson(person2)) {
    console.log(person2.address);
}
else {
    console.log("person2 is not a Person");
}
