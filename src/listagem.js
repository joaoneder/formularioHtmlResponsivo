$("document").ready(function()
{
    $('.dropdown-menu').on('click', function(e)
    {
        if($(this).hasClass('dropdown-menu-form'))
        {
            e.stopPropagation();
        }
    });
});

$( function() {
	$( "#dialog" ).dialog({
		  height: 450,
		  width: 430,
		  autoOpen: false
	  }
	);      

	$('a[name ="parceria"]').on( 'click', function() {               
		$( "#dialog" ).dialog( "open" );
	});
} );

$( function() {
	$('#buscarCodImovParceria').on( 'click', function() {           

		$.ajax(PATH_JS_MINHAREDE+'buscarImoveisDemandaAjax.php?codigoImovel='+$('#codImovParceria').val(),
		{
			dataType: 'json',
			timeout: 500,
			success: function (data,status,xhr) {
				$('#endereco_parceria').html('Endereço: ');
				$('#bairro_parceria').html('Bairro: ');
				$('#cidade_parceria').html('Cidade: ');
				$('#tipo_parceria').html('Tipo: ');
				$('#operacao_parceria').html('Operação: ');
				$('#finalidade_parceria').html('Finalidade: ');
				$('#area_parceria').html('Área: ');
				$('#link_parceria').html('');     

				$('#endereco_parceria').append(data[0].endereco + ', ' + data[0].numero);
				$('#bairro_parceria').append(data[0].bairro);
				$('#cidade_parceria').append(data[0].cidade + ' - ' + data[0].estado);
				$('#tipo_parceria').append(data[0].tipoimovel);
				$('#operacao_parceria').append(data[0].operacao);
				$('#finalidade_parceria').append(data[0].finalidade);
				$('#area_parceria').append(data[0].area + ' M2');
				$('#link_parceria').append('<a class="btn btn-primary" href="'+PATH_JS_MINHAREDE+'solicitarParceria?id=' + data[0].imovel_id +'">Solicitar Parceria</a>');
			},
			error: function (jqXhr, textStatus, errorMessage) {
				$('p').append('Error: ' + errorMessage);
			}
		});
	});
});

$( function() {    
	$( "#busca_avancada_click" ).click(function() {
	  $( "#busca_avancada" ).toggle();
	});
});
