"use strict";
var bcrypt = require('bcrypt');
var saltRounds = 10;
var HashPassword = /** @class */ (function () {
    function HashPassword() {
    }
    HashPassword.prototype.createHash = function (password) {
        return new Promise(function (resolve, reject) {
            bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    resolve(hash);
                });
            });
        });
    };
    HashPassword.prototype.checkPassword = function (password, hash) {
        return new Promise(function (resolve, reject) {
            bcrypt.compare(password, hash, function (err, res) {
                if (res)
                    resolve(true);
                else
                    resolve(false);
            });
        });
    };
    return HashPassword;
}());
module.exports = new HashPassword();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnljcnlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2J5Y3J5cHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEI7SUFBQTtJQW9CQSxDQUFDO0lBbkJHLGlDQUFVLEdBQVYsVUFBVyxRQUFnQjtRQUN2QixPQUFPLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBVSxHQUFRLEVBQUUsSUFBWTtnQkFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsR0FBUSxFQUFFLElBQVk7b0JBQ3hELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELG9DQUFhLEdBQWIsVUFBYyxRQUFnQixFQUFFLElBQVk7UUFDeEMsT0FBTyxJQUFJLE9BQU8sQ0FBVSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEdBQVEsRUFBRSxHQUFRO2dCQUN2RCxJQUFJLEdBQUc7b0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztvQkFFZCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFDRCxpQkFBUyxJQUFJLFlBQVksRUFBRSxDQUFDIn0=