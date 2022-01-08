"use strict";
$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});

var contents = $('#title').html();
alert(contents);

$('#divOne').css('font-size', '14px');