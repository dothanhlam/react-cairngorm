/**
 * Created by LamDo on 8/1/15.
 */
HTTPService = Class.extend({

    POST: "post",
    GET: "get",

    init: function (gateway, service) {
        this.target = gateway.target;
        this.method = gateway.method;
        this.service = service;
    },

    call: function (params, responder) {

    }
});