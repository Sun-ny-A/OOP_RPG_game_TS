import Character from './character'

export default class Orge extends Character{
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