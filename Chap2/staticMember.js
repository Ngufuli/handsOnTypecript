var myClassA = /** @class */ (function () {
    function myClassA() {
    }
    myClassA.getFullName = function () {
        return "Class A" + myClassA.typeName;
    };
    return myClassA;
}());
var a = new myClassA();
console.log(myClassA.getFullName);
