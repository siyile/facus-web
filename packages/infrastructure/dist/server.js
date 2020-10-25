"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = 3001;
app.use(express_1.default.static(path_1.default.join(__dirname)));
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'index.html'));
});
app.listen(port, function () {
    return console.debug("server is listening on " + port);
});
