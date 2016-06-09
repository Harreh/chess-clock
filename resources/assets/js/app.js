$(document).ready(function() {
    $('.player-button').click(function() {
        var clickedPlayer = $(this).attr('data-player');
        var unclickedPlayer = 1;

        if (clickedPlayer == 1) {
            unclickedPlayer = 2;
        }


        var player;
        var playerTime;

        if ($('.player-active').length == 0) {
            player = $('#player-' + unclickedPlayer + '-container');
            playerTime = $('#player-' + unclickedPlayer + '-container .player-time');
        } else {
            // we need to know who was clicked
        }

        setActive(player);
        setInterval(function() {
            subtractSecond(playerTime);
        }, 1000);
    });

    function subtractSecond(playerTimeContainer) {
        var time = new Date();

        var currentTime = playerTimeContainer.html();

        currentTime = currentTime.split(':');

        time.setMinutes(currentTime[0]);
        time.setSeconds(currentTime[1]);

        time = new Date(time.getTime() - 1000);

        playerTimeContainer.html(time.getMinutes() + ':' + time.getSeconds());
    }

    function setActive(playerContainer) {
        playerContainer.addClass('player-active');
    }

});

