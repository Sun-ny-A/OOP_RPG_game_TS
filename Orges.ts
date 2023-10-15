import Character from './character'
import {Attack, Defense} from './interface'

export default class Orge extends Character implements Attack, Defense {
    static className = 'Orge'
    
    constructor(title: string, name: string){
        super(name + " " + "the" + title)
    }

    nextLevelname(newName: string) {
        this.name = newName
    }

    displayInfo() {
        console.log(`${Orge.className} ${this.name}`)
    }

    defense():void {
        console.log(`${this.name} defends with a shield`)
    }

    attack():void {
        console.log(`${this.name} attacks with a club`)
    }

}