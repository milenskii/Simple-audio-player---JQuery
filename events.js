$(document).ready(function() {
    let play = $('#play');
    play.on('click', function() {
        play.hide();
        $('.hidden').css('display', 'inline-block');
        // $('.result').hide();
        // $('.input-ctr').append('<input type="text" class="result" disabled value="Music Playing">');
        $('.result').val('Music Playing');
    });

    $('.fa-pause-circle').on('click', function() {
        $('.fa-pause-circle').hide();
        play.show();
        $('.result').val('Music Paused');
    });

    $('#prev').on('click', function() {
        $('.result').val('Previous song');
    });

    $('#next').click(function() {
        $('.result').val('Next song');
    });
});