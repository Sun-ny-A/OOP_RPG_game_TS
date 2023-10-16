import { typeCharacter, InventoryItem } from './types_inven'

export default abstract class Character {
    static className = 'Character'
    protected _name: string = '' 
    protected gold: number = 0 

    
    get name(): string {
        return this._name
    }

    set name(value: string) {
    this._name = value
    }

    constructor(name: string){
        this.name = name
    }

    abstract defense():void //each char defends in a different way

    abstract attack():void //each char attacks in a different way

    collects_gold(quantity: number):void{ //all char collects gold
        this.gold += quantity
        console.log('Collects gold.')
    }

}