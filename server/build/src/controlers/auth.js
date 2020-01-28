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
            User_1.default.findOne({ email: data.email }, function (user, err) {
                resolve(data.email);
                // if (user) {
                //     bycrypt.checkPassword(data.password, user.password).then((status) => {
                //         resolve(status);
                //     })
                // }
                // else{
                //     resolve(false);
                // }
            });
        });
    };
    return Auth;
}());
module.exports = new Auth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sZXJzL2F1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHdEQUFvQztBQUNwQywrREFBeUM7QUFRekM7SUFBQTtJQTJCQSxDQUFDO0lBMUJHLHVCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2YsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxZQUFvQjtnQkFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7Z0JBQzdCLElBQUksSUFBSSxHQUFHLElBQUksY0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUSxFQUFFLEdBQVE7b0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELG9CQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ1osT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLGNBQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUc7Z0JBQzVDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BCLGNBQWM7Z0JBQ2QsNkVBQTZFO2dCQUM3RSwyQkFBMkI7Z0JBQzNCLFNBQVM7Z0JBQ1QsSUFBSTtnQkFDSixRQUFRO2dCQUNSLHNCQUFzQjtnQkFDdEIsSUFBSTtZQUNSLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUFDRCxpQkFBUyxJQUFJLElBQUksRUFBRSxDQUFDIn0=