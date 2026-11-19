let tasks = []
const from = document.querySelector("#task-add-from")
const input = document.querySelector("#input-bar")
const listContainer = document.querySelector("#list_container")

from.addEventListener("submit", (event) => {
    event.preventDefault()
    const description = input.value.trim()  // its  trim unusual spaces 
    if (description === "") {
        return
    }
    const taskObject = {
        //creating an object that contain task as an objcet so that we could handle it by changing completed status 

        id: Date.now(),
        description,
        completed: false
    }

    tasks.push(taskObject)

    renderTasks()

    input.value = ""

})


const renderTasks = () => {

    listContainer.innerHTML = ""
    const pending =  tasks.filter(task => task.completed === false)
    const completed =  tasks.filter(task => task.completed === true)
    const sortedTasks = pending.concat(completed)
    console.log(sortedTasks)
    sortedTasks.forEach(task => {
        const li = document.createElement("li");
        li.dataset.id = task.id
        li.classList = "flex items-center gap-2 py-1 border-b border-gray-200"


        const checkBox = document.createElement("input")
        checkBox.type = "checkBox"
        checkBox.checked = task.completed



        const text = document.createElement("span")
        text.textContent = task.description
        text.classList = `flex-1 ${task.completed ? "line-through text-gray-400" : ""}`

        const deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'

        li.appendChild(checkBox)
        li.appendChild(text)
        li.appendChild(deleteBtn)

        listContainer.appendChild(li)
    })
}


listContainer.addEventListener("click", (event) => {
    if (event.target.type !== "checkbox") return;  //it's check clicked element is chackbox or not..

    const item = event.target.closest("li")
    const itemsId = Number(item.dataset.id)
    const task = tasks.find(task => task.id === itemsId)
    if (!task) return

    task.completed = !task.completed;


    renderTasks()
})