import {KaboomCtx} from 'kaboom'
import framework from '../../framework/main'
import configurations from '../../configurations/main'

let k: KaboomCtx = null
const spriteLocation = configurations.serverHost + '/static/objects/tilesets/nature_tileset.png'

function loadSprite(){
    k = framework.kaboom
    k.loadSprite('nature-tiles',spriteLocation, {
        sliceX: 20,
        sliceY: 9
    })
}

let tilesSettings = {

    wallcornerright: function(){
        return[
            k.sprite('nature-tiles',{frame: 77}),
            k.area(),
            k.solid()
        ]
    },
    wallcornerleft: function(){
        return[
            k.sprite('nature-tiles',{frame: 75}),
            k.area(),
            k.solid()
        ]
    },
    wallleft: function(){
        return[
            k.sprite('nature-tiles',{frame: 95}),
            k.area(),
            k.solid()
        ]
    },
    walltop: function(){
        return[
            k.sprite('nature-tiles',{frame: 76}),
            k.area(),
            k.solid()
        ]
    },
    test : function(){
        return[
            k.sprite('nature-tiles',{frame: 40}),
            k.area(),
            k.solid()
        ]
    },
    grass : function(){
        return[
            k.sprite('nature-tiles',{frame: 40}),
        ]
    },
    bush : function(){
        return[
            k.sprite('nature-tiles',{frame: 21}),
            k.area(),
            k.solid()
        ]
    },
    mushrooms : function(){
        return[
            k.sprite('nature-tiles',{frame: 23}),
        ]
    },
    rock : function(){
        return[
            k.sprite('nature-tiles',{frame: 22}),
            k.area(),
            k.solid()
        ]
    },
    sign : function(){
        return [
            k.sprite('nature-tiles',{frame:2}),
            k.area(),
            k.solid()
        ]
    },
    log : function(){
        return [
            k.sprite('nature-tiles',{frame:4}),
            k.area({height:20, scale:0.9}),
            k.solid()
        ]
    },
    tree: function(){
        return[
            k.sprite('nature-tiles',{frame: 20}),
            k.area(),
            k.solid()
        ]
    },
    treetop : function(){
        return[
            k.sprite('nature-tiles',{frame: 0}),
        ]
    }
}

let settings = {
    loadSprite : loadSprite,
    tiles : tilesSettings
}

export default settings