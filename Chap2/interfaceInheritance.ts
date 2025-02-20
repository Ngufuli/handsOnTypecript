namespace InterfaceNamespace{
    interface Thing{
        name: string;
        getFullName: () => string;
    }
    
    interface Vehicle extends Thing{
        wheelCount: number;
        updateWheelCount: (newWheelCount: number) => void;
        showNumberOfWheels: () => void;
    }

    class Motorcycle implements Vehicle{
        name: string;
        wheelCount: number;

        constructor (name: string){
            this.name = name;
        }

        updateWheelCount (newWheelCount: number){
            this.wheelCount = newWheelCount;
            console.log(`moved Automibile ${this.wheelCount} miles.`)
        }

        showNumberOfWheels(){
            console.log(`moved Automobile ${this.wheelCount} miles.`)
        }

        getFullName(){
            return "MC-" + this.name;
        }
    }

    const moto = new Motorcycle("Beginner Cycle");
    console.log(moto.getFullName())
}