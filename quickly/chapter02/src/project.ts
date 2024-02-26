class Dog {
    name : "dog";
    constructor(){
        this.name = "dog";
    }

    public sayHello():string{
        return "Hello from Dog";
    }
};

class Fish {
    name : "fish";
    constructor(){
        this.name = "fish";
    }

    dive(howDeep : number) : string{
        return "Fish is diving at " + howDeep + " meters"
    }
};

type Pet = Dog | Fish

// const isDog  = (object : any) : object is Pet => !!object && object.name === "Dog"
// const isFish  = (object : any) : object is Pet => !!object && object.name === "Fish"

function talkToPet(pet: Pet): string{
    switch (pet.name){
        case "dog" : return pet.sayHello();
        case "fish" : return "Sorry, fish cannot talk";
    }
}

let myDog : Dog = new Dog();
let myFish : Fish = new Fish();
let myDog2 = null;
console.log(talkToPet(myDog));
console.log(talkToPet(myFish));


type Numbr = {
    adtKind : "Numbr";
    unNumbr : number;
}

type Txt = {
    adtKind : "Txt";
    unTxt : string;
}

type Other = {
    adtKind : "Other";
}

type ADT = Numbr | Txt | Other

// data ADT
//   = Numbr Int
//   | Txt String
//   | Other
//   deriving (Eq, Ord, Show)