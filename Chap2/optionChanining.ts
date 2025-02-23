namespace OptionalChainingNG{
    interface Wheels{
        count?:number;
    }

    interface Vehicle{
        wheels?: Wheels;
    }

    class Automibile implements Vehicle{
        constructor(public wheels?: Wheels){}
    }

    const car: Automibile = new Automibile({
        count: undefined
    })

    console.log("car" + car);
    console.log("wheels" + car?.wheels);
    console.log("count" + car?.wheels?.count)
}