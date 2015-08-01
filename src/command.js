/**
 * Created by LamDo on 8/1/15.
 */
Command = Class.extend({

    init: function (data) {
        this.data = data;
    },

    execute: function () {
        console.log("execute");
    },

    onResult: function () {
        console.log("onResult");
    },

    onFault: function () {
        console.log("onFault");
    }
});