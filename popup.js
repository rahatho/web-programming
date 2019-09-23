$(function(){
    $('#name').keyup(function(){
        $('#topdemo').text('Hi '+ $('#name').val())
    })
});