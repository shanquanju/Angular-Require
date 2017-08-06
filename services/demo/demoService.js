define([

], function () {
    "use strict";

    var service = ["$q", "fakeApi", "webApi", "config", function ($q, fakeApi, webApi, config) {
        this.getData = function () {
            var deferred = $q.defer();
            var data = {};
            var postData = {
                url: config.DOMAIN + "",
                params: data
            }
            fakeApi.post(postData).then(function (result) {
                // 测试数据，部署时删掉
                var result = { value: 3 };

                deferred.resolve(result);
            }, function (error) {
                deferred.reject(error.responseText);
            });

            return deferred.promise;
        };
    }];

    var app = angular.module("myApp");
    app.service("demoService", service);
});