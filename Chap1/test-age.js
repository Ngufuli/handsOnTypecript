function canDrive(usr) {
    console.log("The name is ", usr.name);
    if (usr.age >= 16) {
        console.log(usr.name, "Can drive a car");
    }
    else {
        console.log(usr.name, "Can not drive a car");
    }
}
var Nick = {
    name: "Nick",
    age: 17
};
canDrive(Nick);
