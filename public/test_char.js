"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_inven_1 = require("./types_inven");
const archer = (0, types_inven_1.createCharacter)('Arjura the Bowman', 'Archer', 'ranged');
const sword = (0, types_inven_1.createInventoryItem)('Sword', 'iron sword', 100);
const bow = (0, types_inven_1.createInventoryItem)('Bow', 'carved bow', 50);
const club = (0, types_inven_1.createInventoryItem)('Club', 'wooden club', 25);
const armor = (0, types_inven_1.createInventoryItem)('Armor', 'metal armor', 150);
console.log('Initial Inventory:');
//# sourceMappingURL=test_char.js.map