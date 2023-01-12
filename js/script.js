//Função que adiciona tarefa
function addTask(){
    const taskTitle = document.querySelector('#task-title').value;
    if(taskTitle){
        //Clona template
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);
       //adiciona titulo 
       newTask.querySelector('.task-title').textContent = taskTitle;
       
       //Remover as Classes desnecessárias
       newTask.classList.remove("template");
       newTask.classList.remove('hide');

       //adiciona tarefa na lista
       const list = document.querySelector("#task-list");
       list.appendChild(newTask);

       //Adicionar evento de remover task
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        //Adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
            completeTask(this);
        });

       //limpar texto
       document.querySelector('#task-title').value = '';
    }
}

//Função de remover Tarefa
function removeTask(task){
    task.parentNode.remove(true);
}

//Função de completar a tarefa
function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}

//Evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener('click', function(e){
    e.preventDefault();

    addTask();
});