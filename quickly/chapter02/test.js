const obj = {};
obj.foo = 'foo';
obj['bar'] = 'bar';
obj[2] = 2;
obj[{}] = 'someobj';


console.log(obj);

const s1 = Symbol('debug');
const s2 = Symbol('xyz');

console.log(s1 == s2);

const obj2 = {};
const sym = Symbol('the symbol');
obj2[sym] = 'foo';
obj2.bar = 'bar';
console.log(obj2);
console.log(sym in obj2);
console.log(obj2[sym]);
console.log(Object.keys(obj2));


let someVar = null;
console.log(someVar);


var var1;
console.log(var1);


function calcTax(state, income, dependents){
    if (state === 'NY'){
        return income* 0.06 - dependents * 500;
    } else if (state === 'NJ') {
        return income* 0.05 - dependents * 300;
    }
}


let tax = calcTax('NJ', 50000, 'two');
console.log(tax);

console.log(new Number(10) === 10);
console.log(new Number(9) === 9);
// console.log(9 == '9');
// console.log("10" == 10);
// console.log('9' == 9);