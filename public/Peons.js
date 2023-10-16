"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = __importDefault(require("./character"));
class Peon extends character_1.default {
    static classType = 'Peon';
    constructor(title, name) {
        super(name + " " + "the" + title);
    }
    nextLevelname(newName) {
        this.name = newName;
    }
    displayInfo() {
        console.log(`${Peon.classType} ${this.name}`);
    }
    defense() {
        console.log(`${this.name} defends with a shield`);
    }
    attack() {
        console.log(`${this.name} attacks with a club`);
    }
}
exports.default = Peon;
//# sourceMappingURL=Peons.js.map