define([
    "routers/demo"
], function () {
    "use strict";

    var configList = arguments;

    var config = [{
        state: "default",
        url: "",
        templateUrl: "views/demo/router1.html",
        controllers:["controllers/demo/router1Controller"],
        services:["services/demo/demoService"],
        styleSheets:["themes/default/css/demo/demo.css"]
    }];

    for (var index = 0; index < configList.length; index++) {
        var element = configList[index];
        config = config.concat(element);
    }

    return config;
});