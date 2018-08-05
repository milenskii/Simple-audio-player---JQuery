function render() {
    let form = $('form');
    let header = $('<h1>');
    header.addClass('heading')
        .text('Front-End-Player');
    header.appendTo(form);

    let divImg = $('<div>');
    divImg.addClass('img-ctr');
    divImg.appendTo(form);
    let img = $('<img>');
    img.attr('src', 'love-music.png')
        .attr('alt', 'music');
    img.appendTo(divImg);

    let div_ctr = $('<div>');
    div_ctr.addClass('container');
    div_ctr.appendTo(form);


    div_ctr.append('<i id="prev" class="fa fa-step-backward" aria-hidden="true"></i>')
        .append('<i id="play" class="fa fa-play-circle" aria-hidden="true"></i>')
        .append('<i id="pause" class="fa fa-pause-circle hidden" aria-hidden="true"></i>')
        .append('<i id="next" class="fa fa-step-forward" aria-hidden="true"></i>');

    let div_inputctr = $('<div>');
    div_inputctr.addClass('input-ctr')
        .append('<input type="text" class="result" disabled value="Play me !">');
    div_inputctr.appendTo(form);
}

render();