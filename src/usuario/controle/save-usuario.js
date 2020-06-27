$(document).ready(function() {
    $('.btn-save').click(function(e) {
        // Irei coletar todas as informações digitadas no formulário
        let dados = $('#addUsuario').serialize();

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: '',
            success: function(dados) {

            }
        })
    });
});