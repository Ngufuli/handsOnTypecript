class Person{
    constructor(private msg: string) {}
    
    speak(){
        console.log(this.msg);
    }
}

const Nick = new Person("Hello world");
// Nick.msg = "Hellow world";
Nick.speak();