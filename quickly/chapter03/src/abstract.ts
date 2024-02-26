abstract class  Person {
    constructor(public name: string) {};

    changeAdress(newAddress : string){
        console.log(`Changing address to ${newAddress}`);
    }

    giveDayOff(){
        console.log(`Giving a day off to ${this.name}`);
    }

    promote(percent: number){
        this.giveDayOff();
        this.increasePay(percent);
    }

    abstract increasePay(percent: number): void;
}

class Employe extends Person {
    increasePay(percent: number): void {
        console.log(`Increasing the salary of ${this.name} by ${percent}%`);
    }
}

class Contractor extends Person {
    increasePay(percent: number): void {
        console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
    }    
}


const workers: Person[] = [];

workers[0] = new Employe('John');
workers[1] = new Contractor ('Mary');

workers.forEach(worker => worker.promote(5));