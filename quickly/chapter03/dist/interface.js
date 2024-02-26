"use strict";
class Car {
    startEngine() {
        return true;
    }
    stopEngine() {
        return true;
    }
    brake() {
        return true;
    }
    accelerate(speed) {
        console.log(`Driving faster`);
    }
    honk(howLong) {
        console.log(`Beep beep`);
    }
}
const car = new Car();
car.startEngine();
car.honk(555);
