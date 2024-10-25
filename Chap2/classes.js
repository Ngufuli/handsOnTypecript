var Company = /** @class */ (function () {
    function Company(msg) {
        this.msg = msg;
    }
    // msg: string;
    Company.prototype.price = function () {
        console.log(this.msg);
    };
    return Company;
}());
var NMB = new Company("IPO offered at 1000/-");
// NMB.msg = "Initial Public Offering at 1000";
NMB.price();
