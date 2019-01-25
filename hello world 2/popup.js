$(function(){
    $('#inputName').keyup(function(){
        $('#helloText').text('hello ' + $('#inputName').val())
    })
})