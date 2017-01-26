'use strict';

angular.module('myApp')
    .constant('Constant', {
        MyId: '',
        SearchReqText: '',
        ToastMsg: '',
        UploadedImgID: null,
        APIBaseUrl: 'http://localhost:8080',
        WeatherAPIUrl: 'http://api.openweathermap.org/data/2.5/forecast',
        Auth: {
            clientHash: "bXktY2xpZW50LWlkOm15LWNsaWVudC1zZWNyZXQ=",
        },
        AuthType: {
            AUTH: 'Auth',
            REG: 'Reg',
            NONE: 'None',
            BASIC: 'Basic',
            OAUTH: 'Oauth',
            BEARER: 'Bearer'
        },
        Events: {
            REFRESHALLAUDIOS: 'REFRESHALLAUDIOS',
            REFRESHNEWS: 'REFRESHNEWS',
            MYPROFILE: 'MYPROFILE',
            FRIENDPROFILE: 'FRIENDPROFILE',
            UPDATEMESSAGES: 'UPDATEMESSAGES',
            UPDATEGROUPLIST: 'UPDATEGROUPLIST',
            LOADDIALOG: 'LOADDIALOG',
            STOPTIMER: 'STOPTIMER',
            VIDEOUPDATE: 'VIDEOUPDATE',
            AUDIOUPDATE: 'AUDIOUPDATE',
            REFRESHBLIST: 'REFRESHBLIST',
            REFRESHPOSTS: 'REFRESHPOSTS',
            REFRESHIDPOSTS: 'REFRESHIDPOSTS',
            REFRESHGPOSTS: 'REFRESHGPOSTS',
            UPDATEFRIEND: 'UPDATEFRIEND',
            UPDATEPSEARCH: 'UPDATEPSEARCH',
            UPDATEFRIENDS: 'UPDATEFRIENDS',
            UPDATEGROUP: 'UPDATEGROUP',
            UPDATEGSEARCH: 'UPDATEGSEARCH'
        }
    });