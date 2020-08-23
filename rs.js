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

	$('#btn_flash').click(function(){
    $("#xatbox1").load("https://sxe-p.github.io/Romance_U/flash.html");
    })

	$('#btn_html').click(function(){
    $("#xatbox1").load("https://sxe-p.github.io/Romance_U/html5.html");
    })

(function(){
		var actualizarHora = function(){
			var fecha = new Date();
			var utc = fecha.getTime()+fecha.getTimezoneOffset()*-15*1000;
			
			var utc_offset = fecha.getTimezoneOffset();
			fecha.setTime(utc+(utc_offset*60*60*1000));
			var horas = fecha.getHours(),
				ampm,
				minutos = fecha.getMinutes(),
				segundos = fecha.getSeconds();
			
			var pHoras = document.getElementById('horas'),
				pAMPM = document.getElementById('ampm'),
				pMinutos = document.getElementById('minutos'),
				pSegundos = document.getElementById('segundos');
			
			if (horas >= 12) {
				horas = horas - 12;
				ampm = 'PM';
			} else {
				ampm = 'AM';
			}
			
			if (horas == 0){
				horas = 12;
			};
			if (horas < 10 ){ horas = "0" + horas};
			pHoras.textContent = horas;
			pAMPM.textContent = ampm;
			
			if (minutos < 10 ){ minutos = "0" + minutos};
			
			pMinutos.textContent = minutos;
			if (segundos < 10 ){ segundos = "0" + segundos};
			pSegundos.textContent = segundos;
		};
		
		actualizarHora();
		var intervalo = setInterval(actualizarHora, 1000);
	}())

/*
clock=this;function getTime(){
	var date=new Date();
	var nowUTC=date.getTime()+date.getTimezoneOffset()*60*1000;
	
	date.setTime(nowUTC+(utc_offset*60*60*1000));
	var hour=date.getHours();
	if(language=="en"){
		suffix=(hour>=12)?'p.m.':'a.m.';
		hour=(hour>12)?hour-12:hour;hour=(hour=='00')?12:hour
	}
return{
	day:weekdays[date.getDay()],date:date.getDate(),month:months[date.getMonth()],year:date.getFullYear(),hour:appendZero(hour),minute:appendZero(date.getMinutes()),second:appendZero(date.getSeconds())
}}
	function appendZero(num){if(num<10){return "0"+num}
return num
}
	function refreshTime(clock_id){
		var now=getTime();clock=$.find('#'+clock_id);$(clock).find('.date').html(now.day+', '+now.date+'. '+now.month+' '+now.year);$(clock).find('.time').html("<p class='horas'>"+now.hour+"</p>:<span class='minute'>"+now.minute+"</span>:<span class='second'>"+now.second+"</span>");
		if(typeof(suffix)!="undefined"){$(clock).find('.time').append('<strong>'+suffix+'</strong>')}}
	var clock_id=$(this).attr('id');
	refreshTime(clock_id);setInterval(
		function(){refreshTime(clock_id)},1000);*/
