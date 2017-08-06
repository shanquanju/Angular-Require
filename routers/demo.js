define([

], function (require, factory) {
    "use strict";

    var config = [{
        state: "router1",
        url: "/router1",
        templateUrl: "views/demo/router1.html",
        controllers: ["controllers/demo/router1Controller"],
        services: ["services/demo/demoService"],
        styleSheets: ["themes/default/css/demo/demo.css"]
    },
    {
        state: "router2",
        url: "/router2",
        templateUrl: "views/demo/router2.html",
        controllers: ["controllers/demo/router2Controller"],
        services: ["services/demo/demoService"],
        styleSheets: ["themes/default/css/demo/demo.css"]
    }];

    return config;
});