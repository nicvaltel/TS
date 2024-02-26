"use strict";
function greet(who) {
    console.log('Hello ', who);
}
greet('Kolay');
let city = 'new york city';
console.log(city.toUpperCase());
const states = [
    { name: 'Alabama', capital: 'Montgomery' },
    { name: 'Alaka', capital: 'Juneau' },
    { name: 'Arizona', capital: 'Phoenix' }
];
for (const state of states) {
    console.log(state.capital);
}
const x = 2 + '3';
console.log(x);
const y = '2' + 3;
console.log(y);
// const a = null + 7;
// const b = [] + 12;
// alert('Hello','Salam');
const names = ['Alice', 'Bob'];
console.log(names[2].toUpperCase());
