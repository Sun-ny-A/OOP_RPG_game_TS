import {v4 as uuidv4} from 'uuid'

export type typeCharacter = {
    id: string
    name: string
    archtype: string
    fightingStyle: 'ranged' | 'melee'
    Inventory: InventoryItem[]
}

export type InventoryItem = {
    id: string
    name: string
    description: string
    value: number
}

function createCharacter(name: string, archtype: string, fightingStyle: 'ranged' | 'melee'): typeCharacter {
    const character: typeCharacter = {
        id: uuidv4(), 
        name,
        archtype,
        fightingStyle,
        Inventory: []
    }
    return character
}

function createInventoryItem(name: string, description: string, value: number): InventoryItem {
    return {
        id: uuidv4(),
        name,
        description,
        value
    }
}

function addToInventory(item: InventoryItem, character: typeCharacter): void {
    character.Inventory.push(item)
}

function removeFromInventory(item: InventoryItem, character: typeCharacter): void {
    character.Inventory = character.Inventory.filter((inventoryItem) => inventoryItem.id !== item.id)
}

function calculateInventoryValue(character: typeCharacter): number {
    return character.Inventory.reduce((total, item) => total + item.value, 0)
}

function printInventory(character: typeCharacter): void {
    console.log(`Inventory for ${character.name}:`)
    character.Inventory.forEach((item) => {
        console.log(`- ${item.name}: ${item.description} (Value: ${item.value})`)
    })
}

export {
    createCharacter,
    createInventoryItem,
    addToInventory,
    removeFromInventory,
    calculateInventoryValue,
    printInventory,
}