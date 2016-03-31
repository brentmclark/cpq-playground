'use strict';

var factories = {
    VehicleCategory: function () {
        var categories = [
            {
                name: 'Trail'
                , tagline: 'Nullam quis dictum metus, a sagittis orci. Quisque sodales diam nec luctus accumsan. In fringilla ante eget efficitur iaculis. Etiam porta volutpat lacus vel hendrerit.'
                , vehicles: [
                    { id: 1, name: 'RZR 570', price: '$10,299', baseSlug: 'rzr-570', imageName: 'rzr-570.png', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                    , { id: 2, name: 'RZR 900', price: '$12,799', baseSlug: 'rzr-900', imageName: 'rzr-900.png', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                    , { id: 3, name: 'RZR 900 EPS XC Edition', baseSlug: 'rzr-900-eps-xc-edition', price: '$17,799', imageName: 'rzr-900-eps-xc-edition.png', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                ]
            },
            {
                name: 'High Performance'
                , tagline: 'Suspendisse eget nisl felis. Proin tempus, ex eu pellentesque commodo, magna eros suscipit odio, ut fringilla justo nunc ac arcu.'
                , vehicles: [
                    { id: 4, name: 'RZR S 900', price: '$14,699', baseSlug: 'rzr-s-900', imageName: 'rzr-s-900.png', features: ['50" Trail Capable', '11" Ground Clearance*', 'Another Cool Thing'] }
                    , { id: 5, name: 'RZR S 1000 EPS', price: '$17,999', baseSlug: 'rzr-s-1000-eps', imageName: 'rzr-s-1000-eps.png', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                    , { id: 6, name: 'RZR XP 1000 EPS', price: '$20,299', baseSlug: 'rzr-xp-1000-eps', imageName: 'rzr-xp-1000-eps.png', features: ['50" Trail Capable', '11" Ground Clearance*', 'Another Cool Thing', 'and another cool thing'] }
                    , { id: 7, name: 'RZR XP Turbo EPS', price: '$24,999', baseSlug: 'rzr-xp-turbo-eps', imageName: 'rzr-xp-turbo-eps.png', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                ]
            },
            {
                name: 'Multi-Passenger'
                , tagline: 'Phasellus eleifend est ut justo luctus tincidunt. Suspendisse tempor elementum rhoncus. Integer venenatis aliquet laoreet. Etiam non ex vitae lacus tincidunt euismod eget id urna. Sed volutpat ac dui vel vulputate.'
                , vehicles: [
                    { id: 8, name: 'RZR 4 900 EPS', price: '$18,299', baseSlug: 'rzr-4-900-eps', imageName: 'rzr-4-900-eps.png', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                    , { id: 9, name: 'RZR XP 4 1000 EPS', price: '$22,299', baseSlug: 'rzr-xp-4-1000-eps', imageName: 'rzr-xp-4-1000-eps.png', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                    , { id: 10, name: 'RZR XP 4 Turbo EPS', price: '$27,499', baseSlug: 'rzr-xp-4-turbo-eps', imageName: 'rzr-xp-4-turbo-eps.png', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                ]
            },
            {
                name: 'Special Edition'
                , tagline: 'Phasellus eleifend est ut justo luctus tincidunt. Suspendisse tempor elementum rhoncus. Integer venenatis aliquet laoreet. Etiam non ex vitae lacus tincidunt euismod eget id urna. Sed volutpat ac dui vel vulputate.'
                , vehicles: [
                    { id: 11, name: 'RZR 900 EPS Trail', price: '$15,799', baseSlug: 'rzr-900-eps-trail', imageName: 'rzr-900-eps-trail.png', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                    , { id: 12, name: 'RZR XP 1000 EPS', price: '$23,499', baseSlug: 'rzr-xp-1000-eps', imageName: 'rzr-xp-1000-eps.png', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                    , { id: 13, name: 'RZR XP 4 1000 EPS', price: '$25,699', baseSlug: 'rzr-xp-4-1000-eps', imageName: 'rzr-xp-4-1000-eps.png', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                ]
            }
        ];
        var factory = {
            GetCategories: function () {
                return categories;
            }
        };
        return factory;
    },
    WholeGood: function () {
        var categories = [
            {
                name: 'Base'
                , tagline: 'Nullam quis dictum metus, a sagittis orci. Quisque sodales diam nec luctus accumsan. In fringilla ante eget efficitur iaculis. Etiam porta volutpat lacus vel hendrerit.'
                , vehicles: [
                    { id: 1, name: 'White Lightning', price: '$12,799', color: 'E2E2E2', imageName: 'white-lightning.jpg', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                ]
            },
            {
                name: 'EPS (Electric Power Steering)'
                , tagline: 'Suspendisse eget nisl felis. Proin tempus, ex eu pellentesque commodo, magna eros suscipit odio, ut fringilla justo nunc ac arcu.'
                , vehicles: [
                    { id: 2, name: 'Havasu Red Pearl', price: '$13,799', color: 'FF0000', imageName: 'havasu-red-pearl.jpg', features: ['50" Trail Capable', '11" Ground Clearance*', 'Another Cool Thing'] }
                    , { id: 3, name: 'Matte Turbo Silver', price: '$14,799', color: 'CCCCCC', imageName: 'matte-turbo-silver.jpg', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                    , { id: 4, name: 'Pursuit Camo', price: '$14,999', color: '228b22', imageName: 'pursuit-camo.jpg', features: ['50" Trail Capable', '11" Ground Clearance*', 'Another Cool Thing', 'and another cool thing'] }
                    , { id: 5, name: 'Stealth Black', price: '$14,799', color: '000000', imageName: 'stealth-black.jpg', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                ]
            },
            {
                name: 'Special Edition'
                , tagline: 'Phasellus eleifend est ut justo luctus tincidunt. Suspendisse tempor elementum rhoncus. Integer venenatis aliquet laoreet. Etiam non ex vitae lacus tincidunt euismod eget id urna. Sed volutpat ac dui vel vulputate.'
                , vehicles: [
                    { id: 6, name: 'Fox Edition LE Matte White Lightning', price: '$15,799', color: 'E2E2E2', imageName: 'fox-edition-le.jpg', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                    , { id: 7, name: 'Highlifter Edition', price: '$23,499', color: 'FF0000', imageName: 'highlifter-edition.jpg', features: ['50" Trail Capable', '11" Ground Clearance*'] }
                ]
            }
        ];
        var factory = {
            GetCategories: function (baseSlug) {
                console.log('base slug provided was: ' + baseSlug);
                return categories;
            }
        };
        return factory;
    },
    Page: function () {
        var pageData = [
            { id: 1, title: 'Pick a RZR Model' },
            { id: 2, title: 'Pick a RZR 900 Trim & Color' },
        ];
        var factory = {
            GetData: function (pageId) {
                var page = pageData.filter(function (page) {
                    return page.id === pageId;
                });

                return page[0];
            }
        }
        return factory;
    }
};

angular.module('configurator')
    .factory(factories);