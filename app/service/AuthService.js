'use strict';

angular.module('myApp').service('AuthService', AuthService);

AuthService.$inject = ['localStorageService'];

function AuthService(localStorageService) {

    function _setExpiresIn(expires) {
        var date = moment(new Date()).add(expires - 30, 'seconds');
        localStorageService.set("expiresIn", date);
    }

    function _getExpiresIn() {
        return localStorageService.get('expiresIn');
    }

    function _clearExpiresIn() {
        localStorageService.remove('expiresIn');
    }

    function _setUserId(id) {
        $cookies.put('userId', id);
    }

    function _getUserId() {
        return localStorageService.get('userId');
    }

    function _clearId() {
        localStorageService.remove('userId');
        return localStorageService.get('userId');
    }

    function _setAccessToken(accessToken) {
        localStorageService.set('accessToken', accessToken);
    }

    function _getAccessToken() {
        var accessToken = localStorageService.get('accessToken');
        return accessToken;
    }

    function _clearAccessToken() {
        localStorageService.remove('accessToken');
    }

    function _setResreshToken(refreshToken) {
        localStorageService.set('refresh_token', refreshToken);
    }

    function _getRefreshToken() {
        var refreshToken = localStorageService.get('refresh_token');
        return refreshToken;
    }

    function _clearRefreshToken() {
        localStorageService.remove('refresh_token');
    }

    function _setDefaultCity(city) {
        localStorageService.set('defaultCity', city);
    }

    function _getDefaultCity() {
        var defaultCity = localStorageService.get('defaultCity');
        return defaultCity;
    }

    function _clearDefaultCity() {
        localStorageService.remove('defaultCity');
    }

    return {
        clearExpiresIn: _clearExpiresIn,
        getExpiresIn: _getExpiresIn,
        setExpiresIn: _setExpiresIn,
        getId: _getUserId,
        setId: _setUserId,
        clearId: _clearId,
        setAccessToken: _setAccessToken,
        getAccessToken: _getAccessToken,
        clearAccessToken: _clearAccessToken,
        setRefreshToken: _setResreshToken,
        getRefreshToken: _getRefreshToken,
        clearRefreshToken: _clearRefreshToken,
        setDefaultCity:_setDefaultCity,
        getDefaultCity:_getDefaultCity,
        clearDefaultCity:_clearDefaultCity
    };
}