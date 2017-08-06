define([
    "common/requireHelper",
    "configs/routerConfig",
    "configs/languageConfig"
], function (requireHelper, routerConfig, languageConfig) {
    "use strict";

    var appConfig = function (app) {
        app.config(["$stateProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$provide", "$urlRouterProvider",
            function ($stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $urlRouterProvider) {
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;

                for (var index = 0; index < routerConfig.length; index++) {
                    var element = routerConfig[index];
                    $stateProvider.state(
                        element.state,
                        {
                            url: element.url,
                            templateUrl: element.templateUrl,
                            params: element.params || {},
                            resolve: {
                                deps: requireHelper.lazyLoad(element)
                            }
                        }
                    );
                }

                $stateProvider.state(
                    "404",
                    {
                        url: "404",
                        templateUrl: "views/error/404.html"
                    }
                );

                $urlRouterProvider.otherwise(function ($injector) {
                    $injector.invoke(["$state", function ($state) {
                        $state.go("404", {}, { location: false });
                    }]);
                });

                $provide.value("$lang", languageConfig);
            }
        ]);
    };

    return appConfig;
});