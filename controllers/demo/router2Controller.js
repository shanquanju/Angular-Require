define([], function () {
    "use strict";

    var ctrl = ["$scope", "demoService", function ($scope, demoService) {
        $scope.fn = {
            onRenderFinish: function () {
                $scope.demo.update();
            }
        };

        $scope.demo = {
            data: {
                value: 0
            },
            update: function () {
                var demo = this;
                demoService.getData().then(function (result) {
                    demo.data = result;
                });
            }
        }
    }];

    var app = angular.module("myApp");
    app.controller("router2Ctrl", ctrl);
});
