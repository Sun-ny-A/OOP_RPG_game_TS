"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    static className = 'Character';
    _name = '';
    gold = 0;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    constructor(name) {
        this.name = name;
    }
    collects_gold(quantity) {
        this.gold += quantity;
        console.log('Collects gold.');
    }
}
exports.default = Character;
//# sourceMappingURL=character.js.map