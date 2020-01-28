"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var config_1 = __importDefault(require("config"));
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
mongoose_1.default.connect(config_1.default.get("dbUrl"), { useNewUrlParser: true }, function () {
    console.log('db connected');
});
module.exports = mongoose_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL21vbmdvb3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxrREFBNEI7QUFDNUIsc0RBQWdDO0FBRWhDLElBQUksTUFBTSxHQUFHLGtCQUFRLENBQUMsTUFBTSxDQUFDO0FBRTdCLGtCQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxFQUMzRDtJQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFDUCxpQkFBUyxrQkFBUSxDQUFDIn0=