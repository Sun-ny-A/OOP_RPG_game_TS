//abstract class that blueprints the four characters

export default abstract class Character {
    static className = 'Character'
    protected _name: string //give each character a name?
    protected gold: number = 0 //each character collects gold so start from 0

    //not sure if get/set needed for name but later might want to change char name based on leveling up/amount of gold collected/etc
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