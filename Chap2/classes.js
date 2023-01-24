var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var Nick = new Person("Hello world");
// Nick.msg = "Hellow world";
Nick.speak();
