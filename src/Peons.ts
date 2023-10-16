import Character from './character'
import { typeCharacter, InventoryItem } from './types_inven'
import { Attack, Defense, Gold } from './interface'

export default class Peon extends Character implements Attack, Defense{
    static classType = 'Peon'
    
    constructor(title: string, name: string){
        super(name + " " + "the" + title)
    }

    nextLevelname(newName: string) {
        this.name = newName
    }

    displayInfo() {
        console.log(`${Peon.classType} ${this.name}`)
    }

    defense():void {
        console.log(`${this.name} defends with a shield`)
    }

    attack():void {
        console.log(`${this.name} attacks with a club`)
    }

}