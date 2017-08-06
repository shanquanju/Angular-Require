define([

], function () {
    "use strict";

    var lazyLoad = function (params) {
        return ["$q", "$rootScope", function ($q, $rootScope) {
            var deferred = $q.defer();
            var dependency = [];

            if (params.services) {
                if (Array.isArray(params.services)) {
                    dependency = dependency.concat(params.services);
                }
                else {
                    dependency.push(params.services);
                }
            }

            if (params.controllers) {
                if (Array.isArray(params.controllers)) {
                    dependency = dependency.concat(params.controllers);
                }
                else {
                    dependency.push(params.controllers);
                }
            }

            if (params.styleSheets) {
                if (Array.isArray(params.styleSheets)) {
                    var styleSheets = params.styleSheets.map(function (obj) {
                        return "css!" + obj;
                    });
                    dependency = dependency.concat(styleSheets);
                }
                else {
                    dependency.push("css!" + params.styleSheets);
                }
            }

            require(dependency, function () {
                $rootScope.$apply(function () {
                    deferred.resolve();
                });
            });
            return deferred.promise;
        }];
    };

    return {
        lazyLoad: lazyLoad
    };
});