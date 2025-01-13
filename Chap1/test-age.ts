interface Usr{
    name: string,
    age: number
}

function canDrive(usr: Usr){
    console.log("The name is ", usr.name)

    if(usr.age >= 16){
        console.log(usr.name, "Can drive a car")
    }else{
        console.log(usr.name, "Can not drive a car")
    }
}

const Nick: Usr = {
    name: "Nick",
    age: 17
}

canDrive(Nick)