
let ECS = require('ecs');
let MoveSystem = require('MoveSystem');

cc.Class({
    extends: cc.Component,

    onLoad () {
        let ecs = new ECS();
        ecs.addSystem(new MoveSystem());
    }
});