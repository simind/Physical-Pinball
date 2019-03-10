

cc.Class({
    extends: cc.Component,

    properties: {
        /**
         * Frequency of update execution, a frequency of `1` run the system every
         * update, `2` will run the system every 2 updates, ect.
         */
        frequency: 1,

        /**
         * Entities of the system.
         */
        entities: [cc.Node],
    },

    /**
     * Add an entity to the system entities.
     */
    addEntity (entity) {
        this.entities.push(entity);
    },
});