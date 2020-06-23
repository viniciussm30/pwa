$(document).ready(function() {
    var url = '';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            for (var i = 0; i < dados.length; i++) {
                let professor = `
                    <div class="col col-md-3 col-6 mt-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${dados[i].nome}</h5>
                                <p class="card-text">
                                    ${dados[i].dataHora}
                                </p>
                                <p class="card-text">
                                    ${dados[i].local}
                                </p>
                                <div class="card-footer">
                                    <button class="btn btn-success btn-lg btn-check"><i class="mdi mdi-check"></i></button>
                                    <button class="btn btn-success btn-lg btn-delete"><i class="mdi mdi-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                $('#tarefas').append(professor);
            }
        }
    })
})