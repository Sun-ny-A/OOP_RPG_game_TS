"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Orges_1 = __importDefault(require("./Orges"));
const Peons_1 = __importDefault(require("./Peons"));
const Knights_1 = __importDefault(require("./Knights"));
const Archer_1 = __importDefault(require("./Archer"));
const characters = [
    new Orges_1.default('Troll', 'Shrek'),
    new Orges_1.default('Orge', 'Shrek'),
    new Orges_1.default('Commander', 'Shrek'),
    new Knights_1.default('Squire', 'Richard'),
    new Knights_1.default('Bachelor', 'Richard'),
    new Knights_1.default('Champion,', 'Richard'),
    new Archer_1.default('Bowman', 'Arjuna'),
    new Archer_1.default('Master Bowman', 'Arjuna'),
    new Archer_1.default('Grand Master', 'Arjuna'),
    new Peons_1.default('title1', 'Peon1'),
    new Peons_1.default('title2', 'Peon2'),
    new Peons_1.default('title3', 'Peon3') //don't understand that a peon is
];
for (const character of characters) {
    character.defense();
    character.attack();
}
//# sourceMappingURL=polymorphism.js.map