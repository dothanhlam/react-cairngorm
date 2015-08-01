/**
 * Created by LamDo on 8/1/15.
 */
HTTPServices = Class.extend({

    init: function () {
        this.services = {};
    },


    getService: function (name) {
        return this.services[name];
    },


    registerService: function (name, service) {
        this.services[name] = service;
    }
});