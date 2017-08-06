define([

], function () {
    'use strict';

    var directive = function ($timeout) {
        return {
            restrict: "A",
            link: function (scope, element, attr) {
                $timeout(function () {
                    scope.$eval(attr["ngRenderFinish"], {});
                }, 100);
            }
        };
    };

    return {
        name: "ngRenderFinish",
        directive: directive
    }
});