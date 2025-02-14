var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(wheelCount) {
        this.wheelCount = wheelCount;
    }
    Car.prototype.showNumberOfWheels = function () {
        console.log("This has moved ".concat(this.wheelCount, " miles."));
    };
    return Car;
}());
var Maserati = /** @class */ (function (_super) {
    __extends(Maserati, _super);
    function Maserati() {
        return _super.call(this, 2) || this;
    }
    return Maserati;
}(Car));
var VolvoSemi = /** @class */ (function (_super) {
    __extends(VolvoSemi, _super);
    function VolvoSemi() {
        return _super.call(this, 4) || this;
    }
    return VolvoSemi;
}(Car));
var myMaserati = new Maserati();
myMaserati.showNumberOfWheels();
var myVolvo = new VolvoSemi();
myVolvo.showNumberOfWheels();
