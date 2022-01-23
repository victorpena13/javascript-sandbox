$(document).ready(function(){
    $('#render-facts').click(function(e){
        e.preventDefault();
        $('.invisible').toggleClass('visibility');
    })
})



$('#change-color').click(function (){
    $('ul').each(function(index, element){
        element.lastElementChild.style.backgroundColor = '#FFFF00';
    });
});

$('h3').click(function (){
    $('ul').children().css('font-weight', 'bold');
})

$('li').click(function (){
    $('ul').each(function(index,element){
        element.firstElementChild.style.color = '#0000FF'
    })
})


