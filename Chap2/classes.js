var Country = /** @class */ (function () {
    function Country(lang) {
        this.lang = lang;
    }
    // lang: string;
    Country.prototype.language = function () {
        console.log(this.lang);
    };
    return Country;
}());
var TZ = new Country("TANZANIA");
// TZ.lang = "Swahili";
TZ.language();
