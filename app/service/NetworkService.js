'use strict';

angular.module('myApp').service('NetworkService', NetworkService);

NetworkService.$inject = ['$http', '$q', 'Constant', 'AuthService'];

function NetworkService($http, $q, Constant, AuthService) {
    $http.defaults.useXDomain = true;
    $http.defaults.withCredentials = false;
    delete $http.defaults.headers.common['X-Requested-With'];

    function _get(url, authType, params) {
        var deferred = $q.defer();

        var cancel = function () {
            deferred.resolve();
        };

        params = params || {};

        var req = {
            method: 'GET',
            params: params,
            url: url,
            headers: _getHeadersByAuthType(authType)
        };

        $http(req)
            .then(function (data) {
                deferred.resolve(data);
            }, function (response, status) {
            });

        return {
            promise: deferred.promise,
            cancel: cancel
        };
    }

    function _put(url, data, authType, params) {
        authType = authType || Constant.AuthType.BASIC;
        var deferred = $q.defer();

        var cancel = function () {
            deferred.resolve();
        };

        params = params || {};
        params.access_token = AuthService.getAccessToken();

        var req = {
            method: 'PUT',
            url: url,
            params: params,
            headers: _getHeadersByAuthType(authType),
            data: data
        };

        $http(req).success(function (data) {
            deferred.resolve(data);
        }).error(function (xhr, status) {
            deferred.reject(status);
        });

        return {
            promise: deferred.promise,
            cancel: cancel
        };
    }

    function _post(url, data, authType, params) {
        // authType = authType || Constant.AuthType.BASIC;
        var deferred = $q.defer();

        var cancel = function () {
            deferred.resolve();
        };

        params = params || {};
        //
        // if (authType != Constant.AuthType.REG && authType != Constant.AuthType.AUTH) {
        //     params.access_token = AuthService.getAccessToken();
        // }
        if (data != null) {
            var req = {
                method: 'POST',
                url: url,
                params: params,
                headers: _getHeadersByAuthType(authType),
                data: data
            };
        } else {
            var req = {
                method: 'POST',
                url: url,
                params: params,
                headers: _getHeadersByAuthType(authType)
            };
        }


        $http(req)
            .then(function (data) {
                deferred.resolve(data);
            }, function (response, status) {
            });

        return {
            promise: deferred.promise,
            cancel: cancel
        };
    }

    function _delete(url, data, authType, params) {
        authType = authType || Constant.AuthType.BASIC;
        var deferred = $q.defer();

        var cancel = function () {
            deferred.resolve();
        };

        params = params || {};

        var req = {
            method: 'DELETE',
            url: url,
            params: params,
            headers: _getHeadersByAuthType(authType),
            data: data
        };


        $http(req).success(function (data) {
            deferred.resolve(data);
        }).error(function (xhr, status) {
            deferred.reject(status);
        });

        return {
            promise: deferred.promise,
            cancel: cancel
        };
    }

    function _getHeadersByAuthType(authType) {
        switch (authType) {
            case Constant.AuthType.BASIC:
                return {
                    'Content-Type': 'application/json'
                };
            case Constant.AuthType.AUTH:
                return {
                    'Authorization': 'Basic ' + Constant.Auth.clientHash,
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
            case Constant.AuthType.REG:
                return {
                    'Content-Type': 'application/json'
                };
            case Constant.AuthType.BEARER:
                return {
                    'Authorization': 'Bearer ' + AuthService.getAccessToken(),
                    'Content-Type': 'application/json'
                };
        }
    }

    function _authorisation(data, additionalUrl) {
        var url = Constant.APIBaseUrl + additionalUrl;
        var params = {};
        return _post(url, data, Constant.AuthType.AUTH, params);
    }

    function _refreshAuth(additionalUrl, data) {
        var url = Constant.APIBaseUrl + additionalUrl;
        var params = {};
        return _post(url, data, Constant.AuthType.AUTH, params);
    }

    function _registration(data, additionalUrl) {
        var url = Constant.APIBaseUrl + additionalUrl;
        var params = {};
        return _post(url, data, Constant.AuthType.REG, params);
    }

    function _addCity(data, additionalUrl) {
        var url = Constant.APIBaseUrl + additionalUrl;
        var params = {};
        return _post(url, data, Constant.AuthType.BASIC, params);
    }

    function _getWeather(additionalUrl, city) {
        var url = Constant.APIBaseUrl + additionalUrl;
        var params = {
            page: 0,
            size: 10,
            city: city
        };
        return _get(url, Constant.AuthType.BASIC, params);
    }

    function _getCities(additionalUrl, city) {
        var url = Constant.APIBaseUrl + additionalUrl;
        var params = {
            page: 0,
            size: 10,
            city: city
        };
        return _get(url, Constant.AuthType.BASIC, params);
    }

    function _addCityToUser(data, additionalUrl) {
        var url = Constant.APIBaseUrl + additionalUrl;
        var params = {};
        return _post(url, data, Constant.AuthType.BEARER, params);
    }

    function _getUserInfo(additionalUrl) {
        var url = Constant.APIBaseUrl + additionalUrl;
        var params = {};
        return _get(url, Constant.AuthType.BEARER, params);
    }

    return {
        authorisation: _authorisation,
        refreshAuth: _refreshAuth,
        registration: _registration,
        addCity: _addCity,
        getWeather: _getWeather,
        getCities: _getCities,
        addCityToUser: _addCityToUser,
        getUserInfo:_getUserInfo
    }

}