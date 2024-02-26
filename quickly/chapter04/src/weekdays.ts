enum Weekdays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}


let dayOff = Weekdays.Tuesday;

console.log(dayOff);
console.log(Weekdays[3]);


enum TempDirection {
    FtoC,
    CtoF
}

function convertTemperature(temp : number, fromTo: TempDirection): number {
    
    switch (fromTo) {
        case TempDirection.FtoC : return (temp - 32) * 5.0 / 9.0;
        case TempDirection.CtoF : return temp * 9.0 / 5.0 + 32;
    }

    // return (fromTo === 'FtoC') ? 
    //     (temp - 32) * 5.0 / 9.0 :
    //     temp * 9.0 / 5.0 + 32;
}

console.log(`70F is ${convertTemperature(70, TempDirection.FtoC)}C`);
console.log(`21C is ${convertTemperature(21, TempDirection.CtoF)}F`);
// console.log(`35C is ${convertTemperature(0,  2)}F`);



enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}