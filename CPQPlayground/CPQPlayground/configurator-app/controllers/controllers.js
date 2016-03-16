'use strict';

var controllers = {
    HomeController: function ($scope, VehicleCategory, Page) {
        $scope.categories = VehicleCategory.GetCategories();
        $scope.page = Page.GetData(1);
    },
    WholeGoodsController: function ($scope, $routeParams, WholeGood, Page) {
        $scope.categories = WholeGood.GetCategories($routeParams.baseSlug);
        $scope.page = Page.GetData(2);
    },
    //CategoryController: function ($scope, $location, $routeParams, categoryFactory, productFactory) {
    //    $scope.categoryId = $routeParams.categoryId;
    //    $scope.categories = categoryFactory.getCategories();
    //    $scope.products = productFactory.getProducts();
    //    $scope.goback = function (category) {
    //        $location.path('/');
    //    };
    //}
};
angular.module('configurator')
    .controller(controllers);