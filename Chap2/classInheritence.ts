class Car {
    constructor (private wheelCount: number) {}

    showNumberOfWheels(){
        console.log(`This has moved ${this.wheelCount} miles.`)
    }
}

class Maserati extends Car{
    constructor(){
        super(2)
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