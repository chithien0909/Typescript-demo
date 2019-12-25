"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("faker");
var Company = /** @class */ (function () {
    function Company() {
        this.color = 'blue';
        this.companyName = faker_1.default.company.companyName();
        this.catchPhrase = faker_1.default.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1.default.address.latitude()),
            lng: parseFloat(faker_1.default.address.longitude())
        };
    }
    Company.prototype.markerContent = function () {
        return "\n      <div>\n        <h3>User name: " + this.companyName + "</h1>\n        <h5>Catchphrase: " + this.catchPhrase + "</h3>\n      </div>\n    ";
    };
    return Company;
}());
exports.Company = Company;
