/*navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then((stream)=>{console.log(stream) }).catch((err)=>console.log(err))*/

$(document).ready(function(){
    $('#btn_radio').click(function(){
    $('#player').toggleClass('full');
    })
});
	$(".box1").load("https://romanceuniversal.top.mx/index.html");
    $('#btn_fresh').click(function(){
    $("#player1").load("player1.html");
    })

	$('#btn-inicio').click(function(){
    $(".box1").load("https://romanceuniversal.top.mx/index.html");
    })

	$('#btn-juegos').click(function(){
    $(".box1").load("p/juegos.html");
    })

	$('#btn-locutores').click(function(){
    $(".box1").load("/locutores.html");
    })

	$('#btn-programacion').click(function(){
    $(".box1").load("/programacion.html");
    })