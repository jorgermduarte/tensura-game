import { KaboomCtx } from 'kaboom'


let k: KaboomCtx = null

let settings = {
    kaboom : k,
    setKaboom : function(kaboom:KaboomCtx){
        settings.kaboom = kaboom
    }
}

export default settings