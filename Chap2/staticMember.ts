class myClassA{
    static typeName: string;

    constructor(){}

    static getFullName(){
        return "Class A" + myClassA.typeName;
    }
}

const a = new myClassA();

console.log(myClassA.getFullName)