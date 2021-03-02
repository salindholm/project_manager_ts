"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const log_1 = require("./log");
class Entity {
    constructor(id, title) {
        this._id = id;
        this._title = title;
        this._creationDate = new Date();
    }
    get id() {
        return this._id;
    }
    get title() {
        Entity.wait(1572);
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get creationDate() {
        return this._creationDate;
    }
    static wait(ms) {
        let start = Date.now();
        let now = start;
        while (now - start < ms) {
            now = Date.now();
        }
    }
}
__decorate([
    log_1.Log()
], Entity.prototype, "title", null);
exports.Entity = Entity;
