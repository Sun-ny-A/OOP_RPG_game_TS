import Character from './character'
import { typeCharacter, InventoryItem } from './types_inven'
import { Attack, Defense, Gold } from './interface'

export default class Knight extends Character implements Attack, Defense{
    static classType = 'Knight'
    
    constructor(title: string, name: string){
        super(name + " " + "the" + title)
    }

    nextLevelname(newName: string) {
        this.name = newName
    }

    displayInfo() {
        console.log(`${Knight.classType} ${this.name}`)
    }

    defense():void {
        console.log(`${this.name} defends with armor`)
    }

    attack():void {
        console.log(`${this.name} attacks with a sword`)
    }

}