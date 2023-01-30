interface Employee{
    name: string;
    id: number;
    isManager: boolean;
    getUniqueId: () => string;
}

const linda: Employee = {
    name: "Linda",
    id: 2,
    isManager: false,
    getUniqueId: (): string => {
        let uniqueId = linda.id + "-" + linda.name;
        if(!linda.isManager){
            return "emp-"+uniqueId;
        }
        return uniqueId;
    }
    
}
console.log(linda.getUniqueId());

const Lucy: Employee = {
    name: "Lucy",
    id: 1,
    isManager: true,
    getUniqueId: (): string => {
        let uniqueId = Lucy.id + "-" + Lucy.name;
        if(Lucy.isManager){
            return "mgr-"+uniqueId;
        }
        return uniqueId;
    }
}
console.log(Lucy.getUniqueId());