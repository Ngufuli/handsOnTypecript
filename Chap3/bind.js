var One = /** @class */ (function () {
    function One() {
        this.name = 'First';
    }
    One.prototype.go = function () {
        console.log(this.name);
    };
    return One;
}());
var Two = /** @class */ (function () {
    function Two() {
        this.name = 'Second';
    }
    Two.prototype.go = function () {
        console.log(this.name);
    };
    return Two;
}());
var eins = new One();
eins.go();
var twei = new Two();
twei.go();
twei.go = twei.go.bind(eins);
twei.go();
