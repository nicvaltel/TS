function getFinalPrice(price : number, discount : number) {
    return price - price / discount;
}
console.log(getFinalPrice(100, 5));

const sym1 = Symbol("orderId");
const sym2 = Symbol("orderId");
console.log(sym1);

const x1 : number = 1;
const x2 : number = 2;

const b : boolean = x1 == x2;
console.log(x1 == x2);

// const ord = Symbol('orderId');

const myOrder = {
    ord: "123"
}

console.log(myOrder['ord']);


let someVar = null;
console.log(someVar);


var var1 : number;
// console.log(var1);

function getName(n : number): string | null {
    if (n > 1) {
        return "Hello";
    } else {
        return null;
    }
}

console.log(getName(2));


const delay = (delayInms: number) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  };
  
const logger : () => Promise<never> = async () => {
    while (true){
        let delayres = await delay(1000);
        console.log("The server is up and running");
    }
};

// logger();


const logger2 : () => never = () => {
    while (true){
        console.log("The server is up and running");
    }
};

// logger2();

function logError(errorMessage : string): void {
    console.error(errorMessage);
    // return undefined;
}

logError("Salam");


let name1 = 'John';
let name2 : string = 'Adam';

const age = 25;

function getTax (income :number): number {
    return income * 0.15;
}

let yourTax = getTax(50000);

let name3 : 'John';

name3 = 'John';

let salary : number;
let isValid : boolean;
let customerName  = null;

console.log(customerName);

let productId = 123;
// productId = null;
// productId = undefined;



function calcTax(state : string, income : number, dependents : number) : number | undefined {
    if (state === 'NY'){
        return income* 0.06 - dependents * 500;
    } else if (state === 'NJ') {
        return income* 0.05 - dependents * 300;
    }
}


let tax = calcTax('NJ', 50000, 2);
console.log(tax);
console.log(calcTax('AA', 50000, 5));

let padding : string | number;

function padLeft(value: string, padding: string | number) : string{
    if (typeof padding === "number"){
        return "1111";
    } else if (typeof padding === "string"){
        return "2222";
    } else {
        return padding; // padding : never;
    }
    // else {
    //     throw new Error(`Expected string or number, got '${padding}'.`);
    // }
    // return "";
}

