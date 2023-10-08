window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input")
    const list_el = document.querySelector("#tasks")
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task = input.value.trim();
        if(!task){
            alert("Please fill out the task");
            return;
        }else{
            
        }
        const task_element = document.createElement("div");
        task_element.classList.add("task")
        const task_content_element = document.createElement("div");
        task_content_element.classList.add("content");
        task_element.appendChild(task_content_element);
        

        const task_input_element = document.createElement("input");
        task_input_element.classList.add("text");
        task_input_element.type="text";
        task_input_element.value = task;
        task_input_element.setAttribute("readonly","readonly");

        task_content_element.appendChild(task_input_element);

        const task_actions_element = document.createElement("div");
        task_actions_element.classList.add("actions");

        const task_edit_button = document.createElement("button")
        task_edit_button.classList.add("edit")
        task_edit_button.innerHTML="Edit"
        const task_delete_button = document.createElement("button")
        task_delete_button.classList.add("delete")
        task_delete_button.innerHTML="Delete"
        task_actions_element.appendChild(task_edit_button)
        task_actions_element.appendChild(task_delete_button)

        task_element.appendChild(task_actions_element)
        list_el.appendChild(task_element);
        input.value=""


        task_edit_button.addEventListener('click',()=>{

            if(task_edit_button.innerHTML=="Save"){
                task_input_element.setAttribute("readonly","readonly");
                task_edit_button.innerText="Edit"
            }else{
                task_input_element.removeAttribute("readonly");
                task_input_element.focus()
                task_edit_button.innerText="Save"
            }
            
        })

        task_input_element.addEventListener('click',()=>{
            if(task_edit_button.innerHTML=="Save"){
                task_input_element.focus()
            }
        })

        task_delete_button.addEventListener('click',()=>{
            list_el.removeChild(task_element);
        })
    })
})