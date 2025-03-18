function getEmployeeId(id){

    return {
        name: "John Wick",
        age: 40,
        address: "1071 W Empire Street",
        country: "Canada"
    }
}

const {name:fullName, age} = getEmployeeId(30);
console.log('Employee',fullName,age)