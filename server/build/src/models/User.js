"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("./mongoose"));
var userScheme = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String
});
var User = mongoose_1.default.model("Users", userScheme);
module.exports = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsd0RBQWtDO0FBQ2xDLElBQU0sVUFBVSxHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUM7SUFDbkMsU0FBUyxFQUFDLE1BQU07SUFDaEIsUUFBUSxFQUFDLE1BQU07SUFDZixRQUFRLEVBQUUsTUFBTTtJQUNoQixLQUFLLEVBQUUsTUFBTTtDQUNoQixDQUFDLENBQUM7QUFDSCxJQUFNLElBQUksR0FBRyxrQkFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakQsaUJBQVMsSUFBSSxDQUFDIn0=