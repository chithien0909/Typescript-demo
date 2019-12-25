"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("faker");
var User = /** @class */ (function () {
    function User() {
        this.color = 'red';
        this.name = faker_1.default.name.findName();
        this.location = {
            lat: parseFloat(faker_1.default.address.latitude()),
            lng: parseFloat(faker_1.default.address.longitude())
        };
    }
    User.prototype.markerContent = function () {
        return "\n      <div>\n        <h3>User name: " + this.name + "</h1>\n      </div>\n    ";
    };
    return User;
}());
exports.User = User;
