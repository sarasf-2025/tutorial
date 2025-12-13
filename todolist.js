const todos=[];
// select element
const todoInput=document.querySelector(".todo-input");
const todoForm=document.querySelector(".todo-form");
const todolist=document.querySelector(".todo-list");
todoForm.addEventListener("submit",addNewtodo);
function addNewtodo(e){
    e.preventDefault();

    if(!todoInput.value) return "null";
    const newTodo={
        id:Date.now(),
        createdAt:new Date().toISOString(),
        title:todoInput.value,
        iscompelet:false

    }
    todos.push(newTodo)
let result="";
  
todos.forEach((todo) => {
    result += `<li class="todo">
      <p class="todo__title ${todo.isCompleted && "completed"}">${
      todo.title
    }</p>
      <span class="todo__createdAt">${new Date(
        todo.createdAt
      ).toLocaleDateString("fa-IR")}</span>
      <button class="todo__check" data-todo-id=${
        todo.id
      } ><i class="far fa-check-square"></i></button>
      <button class="todo__remove" data-todo-id=${
        todo.id
      } ><i class="far fa-trash-alt"></i></button>
    </li>`
});
todolist.innerHTML=result;
todoInput.value = "";

}