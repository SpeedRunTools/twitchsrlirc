/*global define, Davis */
define(['jquery', 'davis', 'app'], function ($, davis, app) {
    'use strict';
    return new Davis(function() {
        this.configure(function () {
            this.generateRequestOnPageLoad = true;
        });
        this.get('/', function() {
            app.updateEmbeds('');
        });
        this.get('/:username', function(req) {
            app.updateEmbeds(req.params.username);
        });
    });
});