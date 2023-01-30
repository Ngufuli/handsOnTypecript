var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.getFullName = function () {
        return "ClassA" + ClassA.typeName;
    };
    return ClassA;
}());
var a = new ClassA();
//will fail due to `typeName` being static
ClassA.typeName = "Hello World";
console.log(ClassA.typeName);
