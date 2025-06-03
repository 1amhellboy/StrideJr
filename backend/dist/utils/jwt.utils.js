"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signJwt = signJwt;
exports.verifyJwt = verifyJwt;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
function signJwt(payload) {
    return jsonwebtoken_1.default.sign(payload, env_1.JWT_SECRET, { expiresIn: '1d' });
}
function verifyJwt(token) {
    return jsonwebtoken_1.default.verify(token, env_1.JWT_SECRET);
}
