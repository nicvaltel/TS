export class SearchAction {
    actionType = "SEARCH";

    constructor(readonly payload:{searchQuery: string}){}
}

export class SearchSuccessAction {
    actionType = "SEARCH_SUCCESS";

    constructor(public payload:{searchResults: string[]}){}
}

export class SearchFailedAction {
    actionType = "SEARCH_FAILED";
}

export type SearchActions = SearchAction | SearchSuccessAction | SearchFailedAction


interface Rectangle {
    kind : "rectangle";
    width : number;
    height : number;
}

interface Circle {
    kind : "circle";
    radius : number
}

type Shape = Rectangle | Circle


function area(shape : Shape) : number {
    switch (shape.kind) {
        case "rectangle" : return shape.height * shape.width;
        case "circle" : return Math.PI * shape.radius ** 2;
    }
}

const myRect : Rectangle = {kind: "rectangle", width : 5, height : 7};
console.log(area(myRect));

const myCircle : Circle = {kind : "circle", radius : 10 };
console.log(area(myCircle));


type Person = {
    address : string;
}


interface A {a : number};
interface B {b : string};

function foo(x: A | B) : number | string {
    if ("a" in x){
        return x.a
    } else {
        return x.b
    }
}

let aaa : A = {a : 42};
let bbb : B = { b : "hello"};
console.log(foo(aaa));
console.log(foo(bbb));



let person1: any;
person1 = JSON.parse(' {"adress" : "25 Brodway"} ');
console.log(person1.address);


let person2: unknown;
person2 = JSON.parse(' {"adress" : "25 Brodway"} ');
// console.log(person2.address);


const isPerson = (object : any) : object is Person => !!object && "address" in object;


person2 = null;
if (isPerson(person2)) {
    console.log(person2.address);
} else {
    console.log("person2 is not a Person")
}
