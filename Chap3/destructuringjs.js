function getEmployee(id){

    return {
        name: 'Nick',
        age: 35,
        address: '123 Street',
        country: 'Unisted State'
    }
}

function getEmployeeWorkInfo(id){
    return [
        id,
        'Office st',
        'France'
    ]
}

const {name: fullname, age} = getEmployee(22);
console.log('employee', fullname, age);
console.log('________________________');
const [id, officeAddress,ct] = getEmployeeWorkInfo(33);
console.log('employee',ct,id,officeAddress);