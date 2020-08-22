/*navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then((stream)=>{console.log(stream) }).catch((err)=>console.log(err))*/

$(document).ready(function(){
    $('#btn_radio').click(function(){
    $('#player').toggleClass('full');
    })
});

    $('#btn_fresh').click(function(){
    $("#player1").load("https://sxe-p.github.io/Romance_U/radio.html");
    })

	$('#btn-inicio').click(function(){
    $(".box1").load("https://sxe-p.github.io/Romance_U/home.html");
    })

	$('#btn-juegos').click(function(){
    $(".box1").load("https://sxe-p.github.io/Romance_U/juegos.html");
    })

	$('#btn-locutores').click(function(){
    $(".box1").load("https://sxe-p.github.io/Romance_U/locutores.html");
    })

	$('#btn-programacion').click(function(){
    $(".box1").load("https://sxe-p.github.io/Romance_U/programacion.html");
    })