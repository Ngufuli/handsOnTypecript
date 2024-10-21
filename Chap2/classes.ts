class Company{
    constructor(){}
    msg: string;

    price(){
        console.log(this.msg)
    }
}

const NMB = new Company()
NMB.msg = "Initial Public Offering at 1000";
NMB.price();