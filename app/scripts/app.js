/*global define */
define(['jquery'], function ($) {
    'use strict';

    var activeTab = 'twitchchat';

    $.updateEmbeds = function() {
        var params = window.location.hash.substring(1).split(';');
        var username = params[0];

        var chat = params[0];
        var irc = params[0];

        for (var i = 1; i < params.length; i++) {
            if (params[i] !== undefined && params[i].split !== undefined) {
                var split = params[i].split(':');
                console.log(split);
                if (split[0] === 'chat') {
                    chat = split[1];
                } else if (split[0] === 'irc') {
                    irc = split[1];
                }
            }
        }

        console.log('Twitch: ' + username);
        console.log('Chat: ' + chat);
        console.log('IRC: ' + irc);

        if (username !== '') {
            $('.nohash').hide();
            $('#twitchbutton').text('Twitch: ' + chat);
            $('#ircbutton').text('SRL: ' + irc);

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
            $('#ircchat').empty();
            $('#twitchchat').empty();
            $('.twitchplayer').empty();
            $('.nohash').show();
            $('#twitchbutton').text('Twitch');
            $('#ircbutton').text('SRL');
        }
    };

    $.updateVisibility = function() {
        $('.chat').hide();
        console.log(activeTab);
        $('#' + activeTab).show();
    };

    $(window).bind('hashchange', function() {
        $.updateEmbeds();
    });

    $('#chatpicker li a').bind('click', function() {
        var clicked = $(this);

        $('#chatpicker li a').removeClass('selected');
        clicked.addClass('selected');

        activeTab = clicked.attr('target');

        $.updateVisibility();

    });

    $('#gobutton').bind('click', function() {
        var name = $('#username').val();
        var chat = $('#twitchchannel').val();
        var irc = $('#srlchannel').val();

        var hashstring = [];
        hashstring.push(name);
        if (chat !== '') {
            hashstring.push('chat:' + chat);
        }
        if (irc !== '') {
            hashstring.push('irc:' + irc);
        }

        console.log(hashstring);

        location.hash = hashstring.join(';');
    });

    $('#username').bind('blur', function() {
        var username = $('#username').val();
        $('#twitchchannel').attr('placeholder', username);
        $('#srlchannel').attr('placeholder', username);
    });

    $('input').keyup(function(event){
        if(event.keyCode === 13){
            $('#gobutton').click();
        }
    });

    $(function() {
        $.updateEmbeds();
        var username = $('#username').val();
        $('#twitchchannel').attr('placeholder', username);
        $('#srlchannel').attr('placeholder', username);
    });

});
