import { typeCharacter, InventoryItem } from './types_inven'

interface Defense{
    defense():void
}

interface Attack{
    defense():void
}
  
interface Gold {
gold(): void
}

export {
Defense,
Attack,
Gold
}