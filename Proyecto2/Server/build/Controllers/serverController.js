"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverController = void 0;
var ServerController = /** @class */ (function () {
    function ServerController() {
    }
    ServerController.prototype.index = function (req, res) {
        res.json({ text: 'Bienvenido' });
    };
    return ServerController;
}());
exports.serverController = new ServerController();
