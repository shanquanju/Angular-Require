define([
    "angular",
    "angular-ui-router",
    "configs/directiveConfig",
    "configs/appConfig",
    "controllers/index/indexController",
    "services/configService",
    "services/httpService",
    "services/fakeHttpService",
    "services/index/indexService"
], function (
    angular,
    router,
    directiveConfig,
    appConfig,
    indexController,
    configService,
    httpService,
    fakeHttpService,
    indexService
) {
        "use strict";
        var dependency = [
            "ng",
            "ui.router"
        ];

        var app = angular.module("myApp", dependency);
        app.controller("indexCtrl", indexController);
        app.service("config", configService);
        app.service("webApi", httpService);
        app.service("fakeApi", fakeHttpService);
        app.service("indexService", indexService);

        directiveConfig(app);

        appConfig(app);

        return app;
    }
);