jQuery(document).ready(function ($) {
    $('#configurator').on('click', '.wgCards__buttons--pageToggle', function (e) {
        var self = $(this);
        var container = self.closest('.wgCards__container');

        if (container.hasClass('wgCards__container--open')) {
            container.removeClass('wgCards__container--open');
        }
        else {
            //$('.wgCards__container--open').removeClass('wgCards__container--open');
            container.addClass('wgCards__container--open');

        }
    });
});