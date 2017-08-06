define([

], function () {
    "use strict";

    var subRegRex = /\{\s*([^\|\}]+?)\s*(?:\|([^\}]*))?\s*\}/g;

    /**
     * Restful 参数过滤
     * 如：/api/kkk/{id} 
     */
    var sub = function (target, option) {
        return ((target.replace) ? target.replace(subRegRex, function (match, key) {
            return (!angular.isUndefined(option[key])) ? option[key] : match;
        }) : target);
    };

    var TIME_OUT = 10 * 60 * 1000;

    var service = function ($q) {
        this.get = function (option) {
            var deferred = $q.defer();
            var url = !angular.isString(option.url) ? sub(option.url.target, option.url.option) : option.url;
            var $ajax = $.ajax({
                "type": "GET",
                "contentType": "application/json;charset=UTF-8",
                "timeout": option.timeout || TIME_OUT,
                "url": encodeURI(url),
                "data": option.params || {},
                "async": option.async || true,
                "headers": {},
                "beforeSend": function (request, setting) {
                    if (option.headers) {
                        for (var key in option.headers) {
                            if (option.headers.hasOwnProperty(key)) {
                                var value = option.headers[key];
                                request.setRequestHeader(key, value);
                            }
                        }
                    }
                    option.beforeSend && option.beforeSend(request, setting);
                },
                "complete": function () {

                }
            });
            $ajax.success(function () {
                deferred.resolve.apply(deferred, arguments);
            }).error(function () {
                if (arguments[0].status == 403) {
                    return history.go(0);
                }
                deferred.reject.apply(deferred, arguments);
            });
            return deferred.promise;
        };
        this.post = function (option) {
            var deferred = $q.defer();
            var url = !angular.isString(option.url) ? sub(option.url.target, option.url.option) : option.url;
            var $ajax = $.ajax({
                "type": "POST",
                "contentType": "application/json;charset=UTF-8",
                "timeout": option.timeout || TIME_OUT,
                "url": encodeURI(url),
                "data": option.params || {},
                "async": option.async || true,
                "headers": {},
                "dataType": "json",
                "processData": false,
                "beforeSend": function (request, setting) {
                    if (option.headers) {
                        for (var key in option.headers) {
                            if (option.headers.hasOwnProperty(key)) {
                                var value = option.headers[key];
                                request.setRequestHeader(key, value);
                            }
                        }
                    }
                    option.beforeSend && option.beforeSend(request, setting);
                },
                "complete": function () {

                }
            });
            $ajax.success(function () {
                deferred.resolve.apply(deferred, arguments);
            }).error(function () {
                if (arguments[0].status == 403) {
                    return history.go(0);
                }
                deferred.reject.apply(deferred, arguments);
            });
            return deferred.promise;
        };
        this.put = function (option) {
            var deferred = $q.defer();
            var url = !angular.isString(option.url) ? sub(option.url.target, option.url.option) : option.url;
            var $ajax = $.ajax({
                "type": "PUT",
                "contentType": "application/json;charset=UTF-8",
                "timeout": option.timeout || TIME_OUT,
                "url": encodeURI(url),
                "data": option.params || {},
                "async": option.async || true,
                "headers": {},
                "beforeSend": function (request, setting) {
                    if (option.headers) {
                        for (var key in option.headers) {
                            if (option.headers.hasOwnProperty(key)) {
                                var value = option.headers[key];
                                request.setRequestHeader(key, value);
                            }
                        }
                    }
                    option.beforeSend && option.beforeSend(request, setting);
                },
                "complete": function () {

                }
            });
            $ajax.success(function () {
                deferred.resolve.apply(deferred, arguments);
            }).error(function () {
                if (arguments[0].status == 403) {
                    return history.go(0);
                }
                deferred.reject.apply(deferred, arguments);
            });
            return deferred.promise;
        };
        this.deleter = function (option) {
            var deferred = $q.defer();
            var url = !angular.isString(option.url) ? sub(option.url.target, option.url.option) : option.url;
            var $ajax = $.ajax({
                "type": "DELETE",
                "contentType": "application/json;charset=UTF-8",
                "timeout": option.timeout || TIME_OUT,
                "url": encodeURI(url),
                "data": option.params || {},
                "async": option.async || true,
                "headers": {},
                "beforeSend": function (request, setting) {
                    if (option.headers) {
                        for (var key in option.headers) {
                            if (option.headers.hasOwnProperty(key)) {
                                var value = option.headers[key];
                                request.setRequestHeader(key, value);
                            }
                        }
                    }
                    option.beforeSend && option.beforeSend(request, setting);
                },
                "complete": function () {

                }
            });
            $ajax.success(function () {
                deferred.resolve.apply(deferred, arguments);
            }).error(function () {
                if (arguments[0].status == 403) {
                    return history.go(0);
                }
                deferred.reject.apply(deferred, arguments);
            });
            return deferred.promise;
        };
    };

    service.$injector = ["$q", "$timeout"];

    return service;
});