//attributes & css:
$(document).ready(function(){
    $('#render-facts-button').click(function(e){
        e.preventDefault();
        $('.invisible').toggleClass('visibility');
    });
});

$('dt').click(function(){
    $("dt").removeClass('selected');
    $(this).addClass("selected");
});

//traversing:
$('#change-color').click(function (){
    $('ul').each(function(index, element){
        element.lastElementChild.style.backgroundColor = '#FFFF00';
    });
});

$('h3').click(function (){
    $('ul').children().css('font-weight', 'bold');
});

$('li').click(function (){
    $('ul').each(function(index,element){
        element.firstElementChild.style.color = '#0000FF'
    });
});

//bonus:

$('img').click(function (){

    var selectedImage = $(this).attr('src');
    $('#image1').attr('src', selectedImage);
});




