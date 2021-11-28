function createTask() {
    let list = document.getElementById("task-list");
    let taskInput = document.getElementById("input-task").value;

    if (taskInput.length > 0) {
        let listItem = document.createElement("li");

        let checkBox = document.createElement("input");
        checkBox.setAttribute( "type","checkbox")

        let task = document.createElement("span")
        task.className = "task"

        let button = document.createElement("button");
        button.innerHTML = "X";
        button.className = "delete-btn";

        task.innerHTML = taskInput;

        button.addEventListener("click", function (e) {
            e.currentTarget.parentNode.remove();
        })

        listItem.appendChild(checkBox);
        listItem.appendChild(task);
        listItem.appendChild(button);

        list.appendChild(listItem);
        document.getElementById("input-task").value = "";
    }
}
