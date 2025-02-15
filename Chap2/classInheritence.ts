class Car {
    constructor (protected wheelCount: number) {}

    showNumberOfWheels(){
        console.log(`This has moved ${this.wheelCount} miles.`)
    }
}

class Maserati extends Car{
    constructor(){
        super(2)
    }
    updateWheelCount(newWheelCount: number){
        this.wheelCount = newWheelCount;
    }
}

class VolvoSemi extends Car{
    constructor(){
        super(4)
    }
}

const myMaserati = new Maserati();
myMaserati.showNumberOfWheels();

const myVolvo = new VolvoSemi();
myVolvo.showNumberOfWheels();