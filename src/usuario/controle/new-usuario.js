$(document).ready(function() {
    $('.btnNew').click(function(e) {
        e.preventDefault();
        $('#conteudo').empty();
        $('#conteudo').load('src/usuario/visao/add-usuario.html');
    });
    $('.btnLogin').click(function(e) {
        e.preventDefault();
        $('#conteudo').empty();
        $('#conteudo').load('src/usuario/visao/login.html');
    });

});