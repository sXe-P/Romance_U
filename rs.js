/*navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then((stream)=>{console.log(stream) }).catch((err)=>console.log(err))*/

    $('#btn_radio').click(function(){
    $('#player').toggleClass('full');
    })

    $('#btn_fresh').click(function(){
    $("#player1").load("https://romanceuniversal.top.mx/p/radio.html");
    })

	$('#btn-inicio').click(function(){
    $(".box1").load("https://romanceuniversal.top.mx/index.html");
    })

	$('#btn-juegos').click(function(){
    $(".box1").load("https://romanceuniversal.top.mx/p/juegos.html");
    })

	$('#btn-locutores').click(function(){
    $(".box1").load("https://romanceuniversal.top.mx/p/locutores.html");
    })

	$('#btn-programacion').click(function(){
    $(".box1").load("https://romanceuniversal.top.mx/p/programacion.html");
    })