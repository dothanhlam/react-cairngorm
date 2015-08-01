/**
 * Created by LamDo on 8/1/15.
 */
FrontController = Class.extend({
    init: function () {
        this.commands = {};
    },


    addCommand: function (evType, commandRef) {
        if (evType == null)
            return;

        this.commands[evType] = commandRef;
        EventDispatcher.addEventListener(evType, this);
    },


    removeCommand: function (commandName) {
        if (commandName == null)
            return;

        this.commands[commandName] = null;
        delete this.commands[commandName];
    },

    executeCommand: function (ev) {
        new this.commands[ev.type](ev.data).execute();
    }
});