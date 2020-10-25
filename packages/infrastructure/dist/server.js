"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = 13001;
var target = path_1.default.join(__dirname, '..', '..', 'website', 'build');
app.use(express_1.default.static(path_1.default.join(target)));
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(target, 'index.html'));
});
app.listen(port, function () {
    return console.debug("server is listening on " + port);
});
