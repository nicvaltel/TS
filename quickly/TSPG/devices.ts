// export interface Device{
//     name: string;
// }

// export class Phone implements Device {
//     name: string;
//     constructor(n:string){
//         this.name = n;
//     }
// }

// export function call(phone: Phone){
//     console.log("Make a call by", phone.name);
// }

interface Device{
    name: string;
}

class Phone implements Device {
    name: string;
    constructor(n:string){
        this.name = n;
    }
}

function call(phone: Phone){
    console.log("Make a call by", phone.name);
}

export {Device, Phone, call as makeCall};