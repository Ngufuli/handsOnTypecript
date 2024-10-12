function canDrive(usr) {
    console.log(usr.name);
    if (usr.age >= 16) {
        console.log(usr.name, " can drive");
    }
    else {
        console.log(usr.name, " can NOT driver");
    }
}
var tom = {
    name: 'Tom',
    age: 26
};
canDrive(tom);
