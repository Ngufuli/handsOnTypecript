class Company{
    constructor(private msg: string){}
    // msg: string;

    price(){
        console.log(this.msg)
    }
}

const NMB = new Company("IPO offered at 1000/-")
// NMB.msg = "Initial Public Offering at 1000";
NMB.price();