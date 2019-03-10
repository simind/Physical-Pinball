
let System = require('system');

cc.Class({
    extends: System,

    ctor () {
    },

    update (entity, dt) {
        let {pos} = entity.components;
        pos.x += 10;
        pos.y += 10;
    }
});