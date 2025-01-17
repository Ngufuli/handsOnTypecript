class Person{
    name: string;
}

const nick: {name: string} = {
    name: "Nick"
};

const person: Person = nick;
console.log(person)