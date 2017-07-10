
class Car{       
    name:string;
    acceleration: number;
    constructor(name:string , acceleration: number = 0){
        this.name = name;
        this.acceleration = acceleration;
    }
    honk() {
        console.log(`${this.name} is saying: Toooooooooot!`);
    };
    accelerate(speed : number) {
        this.acceleration = this.acceleration + speed;
    };
}


let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);