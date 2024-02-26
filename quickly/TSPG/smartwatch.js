"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Salam = exports.SmartWatch = void 0;
class SmartWatch {
    constructor(model) {
        this.model = model;
    }
    printModel() {
        console.log(`Model: ${this.model}`);
    }
}
exports.SmartWatch = SmartWatch;
class Salam {
    constructor(model) {
        this.model = model;
    }
    printModel() {
        console.log(`Salam: ${this.model}`);
    }
}
exports.Salam = Salam;
