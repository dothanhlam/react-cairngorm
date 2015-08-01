/**
 * Created by LamDo on 8/1/15.
 */
ServiceLocator = (function () {
    var httpServices = new HTTPServices();

    return {

        getHttpService: function (name) {
            return httpServices.getService(name);
        },
        registerHttpService: function (name, service) {
            httpServices.registerService(name, service);
        }
    };
})();