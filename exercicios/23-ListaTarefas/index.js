function addTask() {
    const input = document.getElementById("taskInput")
    const item = input.value

    const lista = document.getElementById("taskList")
    
    const li = createLi(item)
    const btnApagar = createBtnApagar()

    lista.appendChild(li)
    li.appendChild(btnApagar)

    input.value = ""
}

function createLi(item) {
    const tagLi = document.createElement("li")
    tagLi.textContent = item
    tagLi.classList.add("task-item")

    return tagLi
}

function createBtnApagar() {
    const btnApagar = document.createElement("button")
    btnApagar.onclick = function() {
        this.parentElement.remove()
    }
    btnApagar.textContent = "Apagar"

    return btnApagar
}