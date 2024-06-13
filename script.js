
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function renderTarefas (){
    listElement.innerHTML = "";

    tarefas.map((todo) => {
        let liElement = document.createElement("li")
        let tarefaText = document.createTextNode(todo)

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#")

        let linkText = document.createTextNode("Excluir")
        linkElement.appendChild(linkText)

        liElement.appendChild(tarefaText);
        liElement.append(linkElement)
        listElement.appendChild(liElement)


       
    })
}

function adicionarTarefas(){
    if(inputElement.value === ''){
        alert("Digite alguma tarefa");
        return false
    }else{
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = '';

        renderTarefas();
    }
}


function deletarTarefa(){
    alert("teste delete")
}

buttonElement.onclick= adicionarTarefas;