"use strict";
let patient = {
    name: 'John',
    height: 4,
    weight: null
};
console.log(patient);
class FormControl {
    constructor(initValue, validator) { }
    ;
}
// type Mom = {
//     name : String
// }
// type Dad = {
//     name : String
// }
// type Parent = Mom | Dad
// type Preparent = {
//     parent : Parent
// }
// type Ancestor = Parent | Preparent
// class Person {
//     constructor(public firstName : string, private lastName : string, protected age : number){};
// }
// const p = new Person ("John", "Smith",25);
// p.firstName = "Adam";
// console.log(p);
class Block {
    constructor(index, previousHash, timestamp, data) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        const { nonce, hash } = this.mine();
        this.nonce = nonce;
        this.hash = hash;
    }
    mine() {
        throw new Error("Method not implemented.");
    }
}
function savePerson(person) {
    console.log('saving', person);
}
const p = {
    firstName: "John",
    lastName: "Smith",
    age: 25
};
savePerson(p);
class KiloWatt {
    constructor(volume) {
        this.volume = volume;
    }
    ;
}
class MegaWatt {
    constructor(volume) {
        this.volume = volume;
    }
    ;
}
let energy1 = new KiloWatt(15);
let energy2 = new MegaWatt(5);
let energy3 = energy1;
console.log(energy3);
