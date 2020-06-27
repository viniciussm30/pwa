$(document).ready(function() {

    $('#conteudo').empty();
    $('#conteudo').load('src/usuario/visao/login.html');

});


// Home Page
$('.sobrePage').click(function() {
    $('#conteudoDois').empty();
    $('#conteudoDois').load('sobre.html');
});

// Adicionar tarefas page
$('.addTarefaPage').click(function() {
    $('#conteudoDois').empty();
    $('#conteudoDois').load('src/tarefa/visao/add-tarefa.html');
});

$('.tarefaPage').click(function() {
    $('#conteudoDois').empty();
    $('#conteudoDois').load('src/tarefa/visao/tarefa.html');
});