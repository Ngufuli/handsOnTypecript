function getEmployee(id){

    return {
        name: 'Nick',
        age: 35,
        address: '123 Street',
        country: 'Unisted State'
    }
}

const {name: fullname, age} = getEmployee(22);
console.log('employee', fullname, age);