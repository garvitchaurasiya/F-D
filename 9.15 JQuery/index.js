// console.log(jQuery) === console.log($)
$('h1').css({
    color: 'red',
    border: '2px solid black'
});

console.log( $('h1').text() );
$('h1').text('Hyyy!');

$('button').click(function(){
    console.log('hello');
})

$('li').click(function(){
    $(this).css('color', 'red');
})