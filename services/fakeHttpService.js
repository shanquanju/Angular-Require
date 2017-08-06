define([

], function () {
    "use strict";

    var service = function ($q, $timeout) {
        this.get = function (option) {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve({});
            }, 300);
            return deferred.promise;
        };
        this.post = function (option) {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve({});
            }, 300);
            return deferred.promise;
        };
        this.put = function (option) {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve({});
            }, 300);
            return deferred.promise;
        };
        this.deleter = function (option) {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve({});
            }, 300);
            return deferred.promise;
        };
    };

    // 本地服务标志
    service.prototype.local = true;
    service.$injector = ["$q", "$timeout"];

    return service;
});