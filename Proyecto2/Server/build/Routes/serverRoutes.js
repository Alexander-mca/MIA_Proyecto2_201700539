"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var serverController_1 = require("../Controllers/serverController");
var ServerRoutes = /** @class */ (function () {
    function ServerRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ServerRoutes.prototype.config = function () {
        this.router.get('/', serverController_1.serverController.index);
    };
    return ServerRoutes;
}());
var serverRoutes = new ServerRoutes();
exports.default = serverRoutes.router;
