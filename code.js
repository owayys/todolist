function myList() {

    const textArea = document.getElementById("list-Entry")
    const listElement = textArea.value;

    const ul = document.getElementById("list-1")
    
    if (!checkforItem(listElement)) {
        const itemList = document.getElementById("listDiv")
        const newItem = document.createElement("div");
        newItem.classList.add("item");

        const listEntry = document.createElement("div")
        listEntry.classList.add("text")
        listEntry.innerHTML = listElement

        const taskCheck = document.createElement("button")
        taskCheck.classList.add("taskCheck")
        taskCheck.innerHTML=`<i class="far fa-check-circle"></i>`

        const deleteTask = document.createElement("button")
        deleteTask.classList.add("deleteTask")
        deleteTask.innerHTML=`<i class="fas fa-trash"></i>`

        newItem.appendChild(taskCheck);
        newItem.appendChild(listEntry);
        newItem.appendChild(deleteTask);

        itemList.appendChild(newItem);

        taskCheck.addEventListener("click", ()=>
        {
            taskCheck.innerHTML = `<i class="fas fa-check-circle"></i>`
            listEntry.style.textDecoration = "line-through"
            listEntry.style.color = "#4927005b"
        })

        deleteTask.addEventListener("click", ()=>
        {
            newItem.remove();
        })
    }

    document.getElementById("list-Entry").value = "";
}

var input = document.getElementById("list-Entry");

input.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

      event.preventDefault();

      document.getElementById("button-1").click();
    }
  });

function checkforItem(requiredText) {

    let found = false;

    selector = `#listDiv :contains('${requiredText}')`
    selectedList = $(selector);

    if (selectedList.length) {
        found = true;
    }
    return found;
}