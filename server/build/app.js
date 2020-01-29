"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var config_1 = __importDefault(require("config"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use('/user', require('./src/routes/user'));
app.listen(config_1.default.get('port'), function () {
    console.log("Server work");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQThCO0FBQzlCLDhDQUF3QjtBQUN4QixrREFBNEI7QUFDNUIsNERBQXFDO0FBQ3JDLElBQUksR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuRCxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUMxQixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksRUFBRSxDQUFDLENBQUE7QUFDZixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0FBRTlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQyJ9