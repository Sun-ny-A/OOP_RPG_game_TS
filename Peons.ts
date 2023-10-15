import Character from './character'
import {Attack, Defense} from './interface'


export default class Peon extends Character{
    static className = 'Peon'
    
    constructor(title: string, name: string){
        super(name + " " + "the" + title)
    }

    nextLevelname(newName: string) {
        this.name = newName
    }

    displayInfo() {
        console.log(`${Peon.className} ${this.name}`)
    }

    defense():void {
        console.log(`${this.name} defends with a shield`)
    }

    attack():void {
        console.log(`${this.name} attacks with a club`)
    }

}