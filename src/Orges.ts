import Character from './character'
import { typeCharacter, InventoryItem } from './types_inven'
import { Attack, Defense, Gold } from './interface'

export default class Orge extends Character implements Attack, Defense{
    static classType = 'Orge'
    
    constructor(title: string, name: string){
        super(name + " " + "the" + title)
    }

    nextLevelname(newName: string) {
        this.name = newName
    }

    displayInfo() {
        console.log(`${Orge.classType} ${this.name}`)
    }

    defense():void {
        console.log(`${this.name} defends with a shield`)
    }

    attack():void {
        console.log(`${this.name} attacks with a club`)
    }

}