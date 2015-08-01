EventDispatcher = (function () {
    var listeners = {};

    return {
        addEventListener: function (type, listener) {
            if (type != null && typeof listener.executeCommand == 'function') {
                listeners[type] = listener;
            }
        },

        dispatchEvent: function (ev) {
            if (listeners[ev.type] != null) {
                listeners[ev.type].executeCommand(ev);
            }
        }
    };
})();