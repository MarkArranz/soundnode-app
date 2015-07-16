'use strict'

app.directive('song', function ($rootScope, $window, playerService) {
    return {
        restrict: 'A',
        link: function ($scope, elem, attrs ) {
            var url, thumbnail, title, user
                , currentEl;

            elem.bind('click', function () {
                currentEl = this;
                url = attrs.songUrl + '?client_id=' + $window.scClientId;
                thumbnail = attrs.songThumbnail.replace('large',  'crop');
                title = attrs.songTitle;
                user = attrs.songUser;

                currentEl.nextAll();

                playerService.songClicked(currentEl, url, thumbnail, title, user);
            });

        }
    }
});