class ClassA{
    static typeName: string;

    constructor(){}

    static getFullName(){
        return "ClassA" + ClassA.typeName;
    }
}

const a = new ClassA();
//will fail due to `typeName` being static
console.log(a.typeName);