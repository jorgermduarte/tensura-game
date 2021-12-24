import { KaboomCtx,Key } from 'kaboom'
import cfgs from '../../../configurations/main'
import framework from '../../../framework/main'

const playerSpriteImage = cfgs.serverHost + "/static/entities/characters/merlin.png"
let k: KaboomCtx = null;
let player = null;
const playerProperties = {
    speed : 1
}

function playerMovement(){
    const {
        pos,
        sprite,
        origin,
        keyIsDown,
        scale,
    } = k

    const player = k.add([
        k.pos(k.width() * 0.5, k.height()* 0.5),
        k.sprite('player'),
        k.area(),
        k.body({
            solid:true,
            weight: 0
        }),
        k.origin('center')
    ])

    //start in idle facing side
    player.play('idle-side')

    player.action(() => {
        const left = keyIsDown('left')
        const right = keyIsDown('right')
        const up = keyIsDown('up')
        const down = keyIsDown('down')

        const currentAnimation = player.curAnim()
        if(left){
            if(currentAnimation !== 'walk-side')
                player.play('walk-side')
            player.flipX(true)
            player.pos.x -= playerProperties.speed
        }
        else if(right){
            if(currentAnimation !== 'walk-side')
                player.play('walk-side')
            player.flipX(false)
            
            player.pos.x += playerProperties.speed
        }else if(up){
            player.play('walk-side')
            player.pos.y -= playerProperties.speed
        }
        else if(down){
            player.play('walk-side')
            player.pos.y += playerProperties.speed
        }

    })
}

function loadSprite(){
    let kaboom = framework.kaboom;
    kaboom.loadSpriteAtlas(playerSpriteImage,
        {
        "player" : {
            x: 0,
            y: 0,
            //section of atlas for this animation
            //using entire atlas
            width: 192,
            height: 144,
            sliceX: 8,
            sliceY: 6,
            anims: {
                'walk-side': {
                    from: 1,
                    to: 3
                },
                'idle-side':1
            }
        }
    })
}

function loadPlayer() {
    let kaboom = framework.kaboom;
    k = kaboom;

    // compose the player game object from multiple components and add it to the game
    player = [
        kaboom.sprite("player"), // renders as a sprite
        kaboom.pos(120, 80), // position in world
        kaboom.area(), // has a collider
        body(),          // responds to physics and gravity
    ];
    playerMovement()
}

function load(){
    loadSprite()
    loadPlayer()
}

const settings = {
    properties : playerProperties,
    loadSprite : loadSprite,
    loadPlayer : loadPlayer,
    load: load
}

export default settings