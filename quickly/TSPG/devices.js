"use strict";
// export interface Device{
//     name: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCall = exports.Phone = void 0;
class Phone {
    constructor(n) {
        this.name = n;
    }
}
exports.Phone = Phone;
function call(phone) {
    console.log("Make a call by", phone.name);
}
exports.makeCall = call;
