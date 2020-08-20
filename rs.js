$(document).ready(function(){
    $('#btn_radio').click(function(){
    $('#player').toggleClass('full');
    })
    
    $('#btn_fresh').click(function(){
    $("#player1").load("https://sxe-p.github.io/Romance_U/radio.html");
    })
});
