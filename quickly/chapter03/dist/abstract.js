"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    ;
    changeAdress(newAddress) {
        console.log(`Changing address to ${newAddress}`);
    }
    giveDayOff() {
        console.log(`Giving a day off to ${this.name}`);
    }
    promote(percent) {
        this.giveDayOff();
        this.increasePay(percent);
    }
}
class Employe extends Person {
    increasePay(percent) {
        console.log(`Increasing the salary of ${this.name} by ${percent}%`);
    }
}
class Contractor extends Person {
    increasePay(percent) {
        console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
    }
}
const workers = [];
workers[0] = new Employe('John');
workers[1] = new Contractor('Mary');
workers.forEach(worker => worker.promote(5));
