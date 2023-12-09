class Person{
    constructor(private msg: string){}

    speak(){
        console.log(this.msg);
    }
}

const tom = new Person("Hellow");
// tom.msg = "Hello";
tom.speak();