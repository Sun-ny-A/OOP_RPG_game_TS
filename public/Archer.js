"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = __importDefault(require("./character"));
class Archer extends character_1.default {
    static classType = 'Archer';
    constructor(title, name) {
        super(name + " " + "the" + title);
    }
    nextLevelname(newName) {
        this.name = newName;
    }
    displayInfo() {
        console.log(`${Archer.classType} ${this.name}`);
    }
    defense() {
        console.log(`${this.name} defends with a tunic`);
    }
    attack() {
        console.log(`${this.name} attacks with a bow and arrow`);
    }
}
exports.default = Archer;
//# sourceMappingURL=Archer.js.map