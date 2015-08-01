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
        params = params || "";

        if ( this.method == this.GET ) {

        }
        else if (this.method == this.POST) {

        }
    },

    get: function (params, onLoad, onError) {
        var url = params.url || "/";
        var data = params.data || {"rand": Math.random()};
        var requestParams  = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&');
        var request = new XMLHttpRequest();
        request.open('GET', url + "?" + requestParams, true);
        request.onload = onLoad;
        request.onerror = onError;
        request.send();
    },

    post: function(params, onLoad, onError) {
        var url = params.url || "/";
        var data = params.data || {};
        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.onload = onLoad;
        request.error = onError;
        request.send(data);
    }
});