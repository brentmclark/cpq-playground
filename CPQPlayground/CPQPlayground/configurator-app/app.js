'use strict';



window.configurator = angular.module('configurator', ['ngRoute']);

function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    

    $routeProvider
        .when('/',
            {
                controller: 'HomeController',
                templateUrl: '/configurator-app/views/pick-a-base.html'
            })
        .when('/:baseSlug',
            {
                controller: 'WholeGoodsController',
                templateUrl: '/configurator-app/views/pick-a-model.html'
            })
        .otherwise({ redirectTo: '/' });
};

configurator.config(routes);