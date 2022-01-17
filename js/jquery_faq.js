$('#change-color').click(function (){
    $('ul').each(function(index, element){
        element.lastElementChild.style.backgroundColor = '#FFFF00';
    });
});


