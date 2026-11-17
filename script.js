let tasks = []
const from = document.querySelector("#task-add-from")
const input = document.querySelector("#input-bar")
const listContainer = document.querySelector("#list_container")

from.addEventListener("submit" , (event)=>{
    event.preventDefault()
    const description = input.value.trim()
    if(description === ""){
        return
    }
  const taskObject = {
    id : Date.now(),
    description ,
    completed : false
  }

  tasks.push(taskObject)
  renderTasks()
  
  input.value = ""
})


const renderTasks = () =>{
  
    listContainer.innerHTML = ""
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.dataset.id = task.id
        li.classList = "flex items-center gap-2 py-1 border-b border-gray-200"

        const checkBox = document.createElement("input")
        checkBox.type = "checkBox"
        checkBox.checked = task.completed

     

        const text = document.createElement("span")
        text.textContent = task.description
        text.classList = "flex-1"

        const deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'

        li.appendChild(checkBox)
        li.appendChild(text)
        li.appendChild(deleteBtn)

        listContainer.appendChild(li)
    })
}

