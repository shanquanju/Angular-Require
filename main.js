var languageToken = "zh-cn";

require.config({
    baseUrl: "./",
    paths: {
        "angular": "./libs/angular-1.6.3/angular.min",
        "angular-ui-router": "./libs/angular-ui-router/angular-ui-router.min",
        "common": "./common",
        "configs": "./configs",
        "controllers": "./controllers",
        "directives": "./directives",
        "language": "./i18n/" + languageToken,
        "libs": "./libs",
        "routers": "routers",
        "services": "./services",
        "themes": "./themes",
        "views": "./views"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-ui-router": {
            deps: ["angular"]
        }
    },
    map: {
        '*': {
            'css': './libs/require-css/css'
        }
    }
});

require([
    "app"
], function (app) {
    angular.element(document).ready(function () {
        angular.bootstrap(window.document, [app.name]);
    });
});