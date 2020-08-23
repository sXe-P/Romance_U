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

(function(){
		var actualizarHora = function(){
			var fecha = new Date(),
				horas = fecha.getHours(),
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