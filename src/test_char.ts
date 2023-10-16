import {createCharacter, createInventoryItem, addToInventory, removeFromInventory, calculateInventoryValue, printInventory} from "./types_inven"


const archer = createCharacter('Arjura the Bowman', 'Archer', 'ranged')

const sword = createInventoryItem('Sword', 'iron sword', 100)
addToInventory(sword, archer)
console.log(printInventory(archer))

const bow = createInventoryItem('Bow', 'carved bow', 50)
addToInventory(bow, archer)
console.log(printInventory(archer))

const club = createInventoryItem('Club', 'wooden club', 25)
addToInventory(club, archer)
console.log(printInventory(archer))

const armor = createInventoryItem('Armor', 'metal armor', 150)
addToInventory(armor, archer)
console.log(printInventory(archer))

removeFromInventory(sword, archer)
console.log('Total Inventory:', calculateInventoryValue(archer))






