class ClassA{
    static typeName: string;

    constructor(){}

    static getFullName(){
        return "ClassA" + ClassA.typeName;
    }
}

const a = new ClassA();
//will fail due to `typeName` being static
ClassA.typeName = "Hello World";
console.log(ClassA.typeName);    