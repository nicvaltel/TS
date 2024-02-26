
type Foot = number;

type Pound = number;

type Patient = {
    name: string;
    height : Foot;
    weight: Pound | null;
}

let patient : Patient = {
    name: 'John',
    height: 4,
    weight: null
}

console.log(patient);

class  FormControl {
    constructor(initValue :string , validator: ValidatorFn | null){};
}

type ValidatorFn = (c: FormControl) => {[key: string] : any } | null;


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
    readonly nonce: number;
    readonly hash: string;

    constructor(
        readonly index: number,
        readonly previousHash : string,
        readonly timestamp : number,
        readonly data : string
    ) {
        const {nonce, hash} = this.mine();
        this.nonce = nonce;
        this.hash = hash;
    }
    mine(): { nonce: any; hash: any; } {
        throw new Error("Method not implemented.");
    }
}


interface Person {
    firstName: string,
    lastName: string,
    age: number
}

function savePerson(person: Person) : void{
    console.log('saving', person);
}

const p : Person = {
    firstName : "John",
    lastName : "Smith",
    age : 25
}

savePerson(p);


class KiloWatt {
    constructor(public volume : number){};
}

class MegaWatt {
    constructor(public volume : number){};
}

let energy1: KiloWatt = new KiloWatt(15);
let energy2: MegaWatt = new MegaWatt(5);

let energy3 : MegaWatt = energy1;

console.log(energy3);