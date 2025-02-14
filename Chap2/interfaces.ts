interface Student{
    name: string,
    id: number,
    isCS: boolean,
    getUniqueID: () => string;
}

const nick: Student = {
    name: "Nick",
    id:3,
    isCS: true,
    getUniqueID: (): string => {
        let uniqueid = nick.id + "-" + nick.name;

        if(!nick.isCS){
            return "std-" + uniqueid;
        }
        return uniqueid;
    }
}

console.log(nick.getUniqueID())