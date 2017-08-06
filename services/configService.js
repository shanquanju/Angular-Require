define([

], function () {
    "use strict";

    var config = function () {
        // API 地址 Host
        var host = "http://" + window.location.host;

        this.DOMAIN = host;
    };

    config.$injector = [];

    return config;
});