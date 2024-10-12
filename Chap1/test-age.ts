interface User{
    name: string,
    age: number
}

function canDrive(usr: User){
    console.log(usr.name);

    if(usr.age >= 16){
        console.log(usr.name, " can drive");
    }else{
        console.log(usr.name, " can NOT driver")
    }
}

const tom:User = {
    name: 'Tom',
    age: 26
}

canDrive(tom)