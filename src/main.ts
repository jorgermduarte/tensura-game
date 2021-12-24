import kaboom from "kaboom"
import framework from './game/framework/main'
import town from './game/maps/town'

const game = kaboom({
    global: true,
    scale: 3,
    debug: true,
    background: [52,140,49]
})
framework.setKaboom(game)
town.load()