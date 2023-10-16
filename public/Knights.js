"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = __importDefault(require("./character"));
class Knight extends character_1.default {
    static classType = 'Knight';
    constructor(title, name) {
        super(name + " " + "the" + title);
    }
    nextLevelname(newName) {
        this.name = newName;
    }
    displayInfo() {
        console.log(`${Knight.classType} ${this.name}`);
    }
    defense() {
        console.log(`${this.name} defends with armor`);
    }
    attack() {
        console.log(`${this.name} attacks with a sword`);
    }
}
exports.default = Knight;
//# sourceMappingURL=Knights.js.map