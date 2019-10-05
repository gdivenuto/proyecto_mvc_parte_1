
function mostrarImagenCargando(capa_destino)
{
	jQuery(capa_destino).html('<div class="text-center"><img src="imagenes/cargando.gif"></div>');
}

function refrescar(enlace, capa_destino)
{
	jQuery(capa_destino).ajaxStart(mostrarImagenCargando(capa_destino));
 	jQuery(capa_destino).load(enlace);
}

function mostrarModal()
{
	if ( $('#mensaje').val() != '' ) {
		if ($('#tipo_mensaje').val() == '2')
			$('#mensaje_en_modal').html('<div class="alert alert-danger"><span class="glyphicon glyphicon-remove-sign"></span>&nbsp;'+$('#mensaje').val()+'</div>');
		else if ($('#tipo_mensaje').val() == '3')
			$('#mensaje_en_modal').html('<div class="alert alert-warning"><span class="glyphicon glyphicon-warning-sign"></span>&nbsp;'+$('#mensaje').val()+'</div>');
		else
			$('#mensaje_en_modal').html('<div class="alert alert-success"><span class="glyphicon glyphicon-ok-sign"></span>&nbsp;'+$('#mensaje').val()+'</div>');
		
		$('#muestra_modal').click();
	}
}

function ocultarModal(id_modal) {
	$(id_modal).modal('hide');
	if ($('.modal-backdrop').is(':visible')) {
	  	$('body').removeClass('modal-open'); 
	 	$('.modal-backdrop').remove(); 
	};
}

function mostrarCartel(mensaje, tipo_mensaje) {
	// Si es un mensaje de error
	if (tipo_mensaje == 2)
		$('#mensaje_en_modal').html('<div class="alert alert-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>&nbsp;ATENCI&Oacute;N<br><br>'+mensaje+'</div>');
	else if (tipo_mensaje == 3)
		$('#mensaje_en_modal').html('<div class="alert alert-warning"><span class="glyphicon glyphicon-warning-sign"></span>&nbsp;ADVERTENCIA<br><br>'+mensaje+'</div>');
	else // sino de éxito
		$('#mensaje_en_modal').html('<div class="alert alert-success"><span class="glyphicon glyphicon-ok-sign"></span>&nbsp;OK<br><br>'+mensaje+'</div>');
	
	// Se muestra la modal
	$('#muestra_modal').click();
}
