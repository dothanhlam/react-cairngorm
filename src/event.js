/**
 * Created by LamDo on 8/1/15.
 */
Event = Class.extend({

    init: function (type, data) {
        this.type = type;
        this.data = data || {};
    },

    dispatch: function () {
        return EventDispatcher.dispatchEvent(this);
    }
});