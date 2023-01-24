var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var Nick = new Person();
Nick.msg = "Hellow world";
Nick.speak();
