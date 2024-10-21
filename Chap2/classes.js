var Company = /** @class */ (function () {
    function Company() {
    }
    Company.prototype.price = function () {
        console.log(this.msg);
    };
    return Company;
}());
var NMB = new Company();
NMB.msg = "Initial Public Offering at 1000";
NMB.price();
