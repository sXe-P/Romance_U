$(document).ready(function(){
    $('#btn_radio').click(function(){
    $('#player').toggleClass('full');
    })
    
    $('#btn_fresh').click(function(){
    $("#player1").load("radio.html");
    })
});
