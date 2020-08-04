function verificaCadastroDemanda()
{
    var erro = 0;
    var msgErro = '';

    if(document.getElementById('bairro').value == '')
    {
        erro++;
        msgErro = msgErro + 'Campo <b>Bairro</b> é de preenchimento obrigatório.';
    }

    if(document.getElementById('cidade').value == '')
    {
        erro++;
        msgErro = msgErro + '<br />Campo <b>Cidade</b> é de preenchimento obrigatório.';
    }

    var selecionadoOperacao = 0;
    $("#operacao option").each(function ()
    {
        if(this.selected==true)
        {
            if(this.value != '')
            {
                selecionadoOperacao++;
            }
        }
    })
    if(selecionadoOperacao == 0)
    {
        erro++;
        msgErro = msgErro +  '<br />Campo <b>Operação</b> é de preenchimento obrigatório.';
    }

    var tipoSelecionado = '';
    var selecionadoTipo = 0;
    $("#tipo option").each(function ()
    {
        if(this.selected==true)
        {
            if(this.value != '')
            {
                if(this.value == 'residencial')
                {
                    tipoSelecionado = 'residencial';
                }
                selecionadoTipo++;
            }
        }
    })
    if(selecionadoTipo == 0)
    {
        erro++;
        msgErro = msgErro + '<br />Campo <b>Tipo</b> é de preenchimento obrigatório.';
    }

    if(tipoSelecionado == 'residencial')
    {
        var selecionadoDormitorio = 0;
        $("#dormitorio option").each(function ()
        {
            if(this.selected==true)
            {
                if(this.value != '')
                {
                    selecionadoDormitorio++;
                }
            }
        })
        if(selecionadoDormitorio == 0)
        {
            erro++;
            msgErro = msgErro + '<br />Campo <b>Dormitório</b>s é de preenchimento obrigatório.';
        }
    }

    if(erro != 0)
    {
        $('#modalAlertaTexto').html(msgErro);
        $('#modalAlerta').modal('show');
        return false;
    }
    return true;
}

var cadastro =
{
    Iniciar: function ()
    {
        if(document.getElementById('msg').value != '')
        {
            //$('#modalAlertaTexto').html(document.getElementById('msg').value);
            //$('#modalAlerta').modal('show');
            document.getElementById('msg').value = '';
        }
    }
}
$(window).load(cadastro.Iniciar);

$(document).ready(function(){
	$('#valor').mask('000.000.000.000.000,00', {reverse: true});
	$('#area').mask('000.000.000.000.000,00', {reverse: true});
	$('#telefone_cliente').mask('(00) 0 0000-0000');
})
