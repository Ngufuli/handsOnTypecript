var Country = /** @class */ (function () {
    function Country() {
    }
    Country.prototype.language = function () {
        console.log(this.lang);
    };
    return Country;
}());
var TZ = new Country;
TZ.lang = "Swahili";
TZ.language();
