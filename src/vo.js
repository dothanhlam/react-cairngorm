/**
 * Created by LamDo on 8/1/15.
 */
VO = Class.extend({
    id: GUID(),

    init: function () {
    },

    toJSON: function () {
        var jsonObj = {};

        for (var i in this)
            if (typeof this[i] != "function")
                jsonObj[i] = this[i];

        return jsonObj;
    },
    toJSONStr: function () {
        var jsonStr = "{";

        for (var i in this.toJSON()) {
            if (jsonStr.length != 1)
                jsonStr += ",";

            jsonStr += '"' + i + '": "' + this[i] + '"';
        }

        jsonStr += "}";

        return jsonStr;
    },
    toBase64: function () {
        return Base64.encode(this.toJSONStr());
    }
});