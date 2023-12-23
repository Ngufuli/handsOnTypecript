var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.getFullName = function () {
        return "ClassA " + ClassA.typeName;
    };
    ClassA.typeName = "Nick";
    return ClassA;
}());
var a = new ClassA();
console.log(ClassA.typeName);
