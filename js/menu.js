$(document).ready(function() {
    $('#conteudo').empty();
    $('#conteudo').load('sobre.html');
})

// Home Page
$('.homePage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('sobre.html');
})

// Adicionar tarefas page
$('.addTarefaPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('src/tarefa/visao/add-tarefa.html')
})

$('.tarefaPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('src/tarefa/visao/tarefa.html')
})