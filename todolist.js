const todos=[];
// select element
const todoInput=document.querySelector(".todo-input");
const todoForm=document.querySelector(".todo-form");
const todolist=document.querySelector(".todo-list");
todoInput.addEventListener("submit",addNewtodo);
function addNewtodo(e){
    e.preventDefult()
    if(!toDos.value) return "null";
    const toDos={
        id:Date.now(),
        creatAt:new Date().toisustraing(),
        title:todoInput.value,
        iscompelet:false

    }
    toDos.push(new todos);
    let result = "";

toDos.forEach((todo) => {
    result+= `<li class="todo">
            <p class="todo__title">todo 1</p>
            <span class="todo__creatat">28.01.1404  </span>
            <button><i class="todo__check far fa-check-squre"></i></button>
 <button><i class="todo__remove far fa-trash-alt"></i>`
});
todolist.innerHTML=result;

}