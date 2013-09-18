/*global define */
define(['jquery'], function ($) {
    'use strict';

    var activeTab = 'twitchchat';

    $.updateEmbeds = function() {
        var username = window.location.hash.substring(1);

        if (username !== '') {
            $('.nohash').hide();

            var twitchchat = '<iframe scrolling="no" src="http://twitch.tv/chat/embed?channel=' + username + '&popout_chat=true"></iframe>';
            var ircchat = '<iframe src="https://kiwiirc.com/client/irc.speedrunslive.com/#' + username + '"></iframe>';

            $('#ircchat')
                .empty()
                .append(ircchat);

            $('#twitchchat')
                .empty()
                .append(twitchchat);

            var twitch = '<object type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=' + username + '" bgcolor="#000000">';
            twitch += '<param name="allowFullScreen" value="true">';
            twitch += '<param name="allowScriptAccess" value="always">';
            twitch += '<param name="allowNetworking" value="all">';
            twitch += '<param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf">';
            twitch += '<param name="flashvars" value="hostname=www.twitch.tv&amp;channel='+username+'&amp;auto_play=true">';
            twitch += '</object>';

            $('.twitchplayer')
                .empty()
                .append(twitch);
        } else {
            $('.nohash').show();
        }
    };

    $.updateVisibility = function() {
        $(".chat").hide();
        console.log(activeTab);
        $("#" + activeTab).show();
    }

    $(window).bind('hashchange', function() {
        $.updateEmbeds();
    });

    $("#chatpicker li a").bind('click', function() {
        var clicked = $(this);

        $("#chatpicker li a").removeClass("selected");
        clicked.addClass("selected");

        activeTab = clicked.attr("target");

        $.updateVisibility();

    });

    $('#gobutton').bind('click', function() {
        location.hash = $('#username').val();
    });

    $('#username').keyup(function(event){
        if(event.keyCode === 13){
            $('#gobutton').click();
        }
    });

    $(function() {
        $.updateEmbeds();
    });

});
