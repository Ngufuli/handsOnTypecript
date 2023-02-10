function getEmployee(id){
    return{
        name: "Dell",
        age: 35,
        address: "123 st",
        country: "United State"
    }
}

const {name: fullName, age} = getEmployee(22);
console.log('employee', fullName,age);