$('.btnAdicionar').click(function(e) {
    e.preventDefault();
    var dados = $('#addTarefa').serialize();
    concole.log(dados);
    var url = 'src/tarefa/';
    $.ajax({
        dateType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        data: dados,
        success: (function(dados) {
            if (dados.return == true) {
                Swal.fire({
                    title: 'Tarefa',
                    text: 'Tarefa adicionada com sucessso!',
                    type: 'success',
                    confirmButtonText: 'Ok'
                });
                $('#conteudo').empty();
                $('#conteudo').load('src/tarefa/visao/tarefa.html');
            } else {
                Swal.fire({
                    title: 'Tarefa',
                    text: 'Não foi possível adicionar uma tarefa<br>'.dados.return,
                    type: 'error',
                    confirmButtonText: 'Tentar novamente'
                })
            }
        })
    })
})