import Character from './character'
import { typeCharacter, InventoryItem } from './types_inven'
import { Attack, Defense, Gold } from './interface'

export default class Archer extends Character implements Attack, Defense {
    static classType = 'Archer'
    
    constructor(title: string, name: string){
        super(name + " " + "the" + title)
    }

    nextLevelname(newName: string) {
        this.name = newName
    }

    displayInfo() {
        console.log(`${Archer.classType} ${this.name}`)
    }

    defense():void {
        console.log(`${this.name} defends with a tunic`)
    }

    attack():void {
        console.log(`${this.name} attacks with a bow and arrow`)
    }

}