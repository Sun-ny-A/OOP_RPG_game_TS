import Character from './character'
import Orge from './Orges'
import Peon from './Peons'
import Knight from './Knights'
import Archer from './Archer'
import { typeCharacter, InventoryItem } from './types_inven'

const characters: Character[] = [
    new Orge('Troll', 'Shrek'),
    new Orge('Orge', 'Shrek'),
    new Orge('Commander', 'Shrek'),
    new Knight('Squire', 'Richard'),
    new Knight('Bachelor', 'Richard'),
    new Knight('Champion,', 'Richard'),
    new Archer('Bowman', 'Arjuna'),
    new Archer('Master Bowman', 'Arjuna'),
    new Archer('Grand Master', 'Arjuna'),
    new Peon('title1', 'Peon1'),
    new Peon('title2', 'Peon2'),
    new Peon('title3', 'Peon3') //don't understand that a peon is
]

for( const character of characters ) {
    character.defense()
    character.attack()
  }