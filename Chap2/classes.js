// class Person{
//     constructor(private msg: string) {}
//     speak(){
//         console.log(this.msg);
//     }
// }
// const Nick = new Person("Hello world");
// // Nick.msg = "Hellow world";
// Nick.speak();
// As readonly
var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
    }
    Person.prototype.speak = function () {
        this.msg = "speak" + this.msg;
        console.log(this.msg);
    };
    return Person;
}());
var Nick = new Person("New tech!");
Nick.speak();
