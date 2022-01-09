var contents = $('#headline-title').html();
alert(contents);

// $('h1').click(function(){
//     $(this).css('background-color', '#f0f0f0');
// });




$('p').dblclick(function(){
    $(this).css('font-size', '18px');
});

$('li').hover(
    function() {
    $(this).css('color', '#FF0000');
},
    function() {
        $(this).css('color', '#000000')
    });

$('h1, h2').css('color', '#800080');

$('li').css('font-size', '20px');


function grayColor() {
    $('h1').css('background', '#f0f0f0');
}
$('#bind').click(function(){
    $('body').on('click', '#bind', grayColor)
});
$('#unbind').click(function (){
    $('body').off('click', '#unbind', grayColor).find('h1').css('background', '#ffffff');
})

