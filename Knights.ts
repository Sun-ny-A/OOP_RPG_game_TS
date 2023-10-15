import Character from './character'
import {Attack, Defense} from './interface'

export default class Knight extends Character{
    static className = 'Knight'
    
    constructor(title: string, name: string){
        super(name + " " + "the" + title)
    }

    nextLevelname(newName: string) {
        this.name = newName
    }

    displayInfo() {
        console.log(`${Knight.className} ${this.name}`)
    }

    defense():void {
        console.log(`${this.name} defends with armor`)
    }

    attack():void {
        console.log(`${this.name} attacks with a sword`)
    }

}