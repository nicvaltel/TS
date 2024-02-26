"use strict";
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 7] = "Sunday";
})(Weekdays || (Weekdays = {}));
let dayOff = Weekdays.Tuesday;
console.log(dayOff);
console.log(Weekdays[3]);
var Direction;
(function (Direction) {
    Direction[Direction["FtoC"] = 0] = "FtoC";
    Direction[Direction["CtoF"] = 1] = "CtoF";
})(Direction || (Direction = {}));
function convertTemperature(temp, fromTo) {
    switch (fromTo) {
        case Direction.FtoC: return (temp - 32) * 5.0 / 9.0;
        case Direction.CtoF: return temp * 9.0 / 5.0 + 32;
    }
    // return (fromTo === 'FtoC') ? 
    //     (temp - 32) * 5.0 / 9.0 :
    //     temp * 9.0 / 5.0 + 32;
}
console.log(`70F is ${convertTemperature(70, Direction.FtoC)}C`);
console.log(`21C is ${convertTemperature(21, Direction.CtoF)}F`);
console.log(`35C is ${convertTemperature(0, 0)}F`);
