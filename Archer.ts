import Character from './character'
import {Attack, Defense} from './interface'

export default class Archer extends Character{
    static className = 'Archer'
    
    constructor(title: string, name: string){
        super(name + " " + "the" + title)
    }

    nextLevelname(newName: string) {
        this.name = newName
    }

    displayInfo() {
        console.log(`${Archer.className} ${this.name}`)
    }

    defense():void {
        console.log(`${this.name} defends with a tunic`)
    }

    attack():void {
        console.log(`${this.name} attacks with a bow and arrow`)
    }

}