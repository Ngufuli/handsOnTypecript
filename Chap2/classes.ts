class Person{
    constructor() {}
    msg: string;
    speak(){
        console.log(this.msg);
    }
}

const Nick = new Person();
Nick.msg = "Hellow world";
Nick.speak();