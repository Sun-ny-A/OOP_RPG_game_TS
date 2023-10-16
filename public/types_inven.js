"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printInventory = exports.calculateInventoryValue = exports.removeFromInventory = exports.addToInventory = exports.createInventoryItem = exports.createCharacter = void 0;
const uuid_1 = require("uuid");
function createCharacter(name, archtype, fightingStyle) {
    const character = {
        id: (0, uuid_1.v4)(),
        name,
        archtype,
        fightingStyle,
        Inventory: []
    };
    return character;
}
exports.createCharacter = createCharacter;
function createInventoryItem(name, description, value) {
    return {
        id: (0, uuid_1.v4)(),
        name,
        description,
        value
    };
}
exports.createInventoryItem = createInventoryItem;
function addToInventory(item, character) {
    character.Inventory.push(item);
}
exports.addToInventory = addToInventory;
function removeFromInventory(item, character) {
    character.Inventory = character.Inventory.filter((inventoryItem) => inventoryItem.id !== item.id);
}
exports.removeFromInventory = removeFromInventory;
function calculateInventoryValue(character) {
    return character.Inventory.reduce((total, item) => total + item.value, 0);
}
exports.calculateInventoryValue = calculateInventoryValue;
function printInventory(character) {
    console.log(`Inventory for ${character.name}:`);
    character.Inventory.forEach((item) => {
        console.log(`- ${item.name}: ${item.description} (Value: ${item.value})`);
    });
}
exports.printInventory = printInventory;
//# sourceMappingURL=types_inven.js.map