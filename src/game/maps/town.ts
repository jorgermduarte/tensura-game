import kaboom from '../framework/main'
import nature from '../assets/tilesets/nature'
import character from '../assets/entities/character/player'


let townMap = [
	'ggggggggggggggggggggg',
	'ggggggggggggggggggggg',
	'ggggggggggggggggggggg',
	'ggggggggggggggggggggg',
	'ggggggggggggggggggggg',
	'ggggggggggggggggggggg',
	'ggggggggggggggggggggg',
	'ggggggggggggggggggggg',
	'ggggggggggggggggggggg',
	'ggggggggggggggggggggg',
	'ggggggggggggggggggggg',
	'ggggggggggggggggggggg',
	'ggggggggggggggggggggg',
	'ggggggggggggggggggggg'
]
let overlayMapOne = [
	'                  o  ',
	'    s        b     o  ',
	'  m             .   m  ',
	'   o     m    =        ',
	'    s      .     =     ',
	'    m          o    m  ',
]
let overlayMapOverCharacter = [
	'l--------------------',
	'|               !    ',
	'|                    ',
	'|          !         ',
	'|                    ',
	'|                    ',
	'|                    ',
	'|                    ',
	'|                    ',
	'|                    ',
	'|                    ',
	'|                    ',
	'|                    ',
	'|                    ',
	'|                    ',
]

function load() {
	let k = kaboom.kaboom;
	nature.loadSprite()
	character.loadSprite()

	const config = {
		width:30,
		height:30,
		't': () => nature.tiles.test(), 
		'g': () => nature.tiles.grass(), 
		'b': () => nature.tiles.bush(), 
		'm': () => nature.tiles.mushrooms(), 
		'o': () => nature.tiles.rock(), 

		'l': () => nature.tiles.wallcornerleft(), 
		'r': () => nature.tiles.wallcornerright(), 
		'-': () => nature.tiles.walltop(), 
		'|' : () => nature.tiles.wallleft(), 
		's': () => nature.tiles.sign(), 
        '=': () => nature.tiles.log(),
		'!': () => nature.tiles.treetop(),
		'.': () => nature.tiles.tree()

	}
	k.scene('starter-town', () => {
		k.addLevel(townMap,config)
		k.addLevel(overlayMapOne,config)
		character.loadPlayer()
		k.addLevel(overlayMapOverCharacter,config)

	})

	
	k.go('starter-town')

}

export default {
    load : load
}