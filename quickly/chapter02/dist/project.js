"use strict";
class Dog {
    constructor() {
        this.name = "dog";
    }
    sayHello() {
        return "Hello from Dog";
    }
}
;
class Fish {
    constructor() {
        this.name = "fish";
    }
    dive(howDeep) {
        return "Fish is diving at " + howDeep + " meters";
    }
}
;
// const isDog  = (object : any) : object is Pet => !!object && object.name === "Dog"
// const isFish  = (object : any) : object is Pet => !!object && object.name === "Fish"
function talkToPet(pet) {
    switch (pet.name) {
        case "dog": return pet.sayHello();
        case "fish": return "Sorry, fish cannot talk";
    }
}
let myDog = new Dog();
let myFish = new Fish();
let myDog2 = null;
console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
// data ADT
//   = Numbr Int
//   | Txt String
//   | Other
//   deriving (Eq, Ord, Show)
