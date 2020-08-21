/*navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then((stream)=>{console.log(stream) }).catch((err)=>console.log(err))*/

$(document).ready(function(){
    $('#btn_radio').click(function(){
    $('#player').toggleClass('full');
    })
    
    $('#btn_fresh').click(function(){
    $("#player1").load("p/player1.html");
    })
	
	$('#btn-inicio').click(function(){
    $(".box1").load("index.html");
    })
	
	$('#btn-juegos').click(function(){
    $(".box1").load("p/juegos.html");
    })
	
	$('#btn-locutores').click(function(){
    $(".box1").load("p/locutores.html");
    })
	
	$('#btn-programacion').click(function(){
    $(".box1").load("p/programacion.html");
    })
});