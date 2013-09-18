/*global define */
define(["jquery"], function ($) {
    'use strict';

    $.updateEmbeds = function(username) {

        var irc = "<iframe src=\"https://kiwiirc.com/client/irc.speedrunslive.com/#" + username + "\"></iframe>";

        console.log();

        $(".irc")
            .empty()
            .append(irc);


        var twitch = '<object type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=' + username + '" bgcolor="#000000">';
        twitch += '<param name="allowFullScreen" value="true">';
        twitch += '<param name="allowScriptAccess" value="always">';
        twitch += '<param name="allowNetworking" value="all">';
        twitch += '<param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf">';
        twitch += '<param name="flashvars" value="hostname=www.twitch.tv&amp;channel='+username+'&amp;auto_play=true">';
        twitch += '</object>';

        $(".twitchplayer")
            .empty()
            .append(twitch);
    };

    $(window).bind('hashchange', function(){
        $.updateEmbeds(window.location.hash.substring(1));
    });

    $(function() {
        $.updateEmbeds(window.location.hash.substring(1));
    });

});
