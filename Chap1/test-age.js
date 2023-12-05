function canDrive(usr) {
    console.log("User is ", usr.name);
    if (usr.age >= 16) {
        console.log("Allow to drive");
    }
    else {
        console.log("Do not allow to drive");
    }
}
var tom = {
    name: "Tom",
    age: 21
};
canDrive(tom);
