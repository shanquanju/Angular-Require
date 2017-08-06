define([
    "language/common"
], function () {
    "use strict";

    var configList = arguments;

    var config = {};

    for (var index = 0; index < configList.length; index++) {
        var element = configList[index];
        config[element.name] = element.language;
    }

    return config;
});