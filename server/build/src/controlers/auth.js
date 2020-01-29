"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var User_1 = __importDefault(require("../models/User"));
var bycrypt_1 = __importDefault(require("../modules/bycrypt"));
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.register = function (data) {
        return new Promise(function (resolve, reject) {
            bycrypt_1.default.createHash(data.password).then(function (hashPassword) {
                data.password = hashPassword;
                var user = new User_1.default(data);
                user.save(function (res, err) {
                    resolve(res);
                });
            });
        });
    };
    Auth.prototype.login = function (data) {
        return new Promise(function (resolve, reject) {
            try {
                User_1.default.findOne({ email: data.email }, function (err, user) {
                    if (user) {
                        bycrypt_1.default.checkPassword(data.password, user).then(function (status) {
                            resolve(status);
                        });
                    }
                    else {
                        resolve(false);
                    }
                });
            }
            catch (err) {
                resolve(err);
            }
        });
    };
    return Auth;
}());
module.exports = new Auth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sZXJzL2F1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHdEQUFvQztBQUNwQywrREFBeUM7QUFRekM7SUFBQTtJQStCQSxDQUFDO0lBOUJHLHVCQUFRLEdBQVIsVUFBUyxJQUFjO1FBQ25CLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixpQkFBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsWUFBb0I7Z0JBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO2dCQUM3QixJQUFJLElBQUksR0FBRyxJQUFJLGNBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVEsRUFBRSxHQUFRO29CQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxvQkFBSyxHQUFMLFVBQU0sSUFBYztRQUNoQixPQUFPLElBQUksT0FBTyxDQUFVLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDeEMsSUFBSTtnQkFDQSxjQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUFjO29CQUN0RCxJQUFJLElBQUksRUFBRTt3QkFDTixpQkFBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQVc7NEJBQ3hELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDcEIsQ0FBQyxDQUFDLENBQUE7cUJBQ0w7eUJBQ0k7d0JBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNsQjtnQkFDTCxDQUFDLENBQUMsQ0FBQTthQUNMO1lBQ0QsT0FBTyxHQUFHLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUFDRCxpQkFBUyxJQUFJLElBQUksRUFBRSxDQUFDIn0=