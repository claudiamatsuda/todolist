var id = 0;

function criarTarefa() {
    var tarefa = prompt("Qual é a tarefa:");
    var todos = document.getElementById("todos");
    id++
    var new_todo = "<li id=" + id + "><button onclick='complete("+id+")'>marcar como concluido</button> "+tarefa+"</li>"
    todos.innerHTML = new_todo + todos.innerHTML;
}

function complete(id) {
    var todo = document.getElementById(id);
    todo.className = 'done';
}