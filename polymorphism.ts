import Character from './character'
import Orge from './Orges'
import Peon from './Peons'
import Knight from './Knights'
import Archer from './Archer'

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
    new Peon('Level1', 'Peon1'),
    new Peon('Level2', 'Peon2'),
    new Peon('Level3', 'Peon3')
]

for( const character of characters ) {
    character.defense()
    character.attack()
  }