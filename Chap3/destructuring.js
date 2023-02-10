function getEmployee(id) {
    return {
        name: "Dell",
        age: 35,
        address: "123 st",
        country: "United State"
    };
}
var _a = getEmployee(22), fullName = _a.name, age = _a.age;
console.log('employee', fullName, age);
