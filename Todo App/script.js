let btn = document.querySelector("#add");
let input = document.querySelector(".newtask input");

btn.onclick = function () {
    if (input.value.length == 0) {
        alert("Kindly Enter Task Name!!")
    }
    else {
        document.querySelector(".tasks").innerHTML += `
        <div class="task" >
            <span id ="taskname" >
                ${input.value}
            </span>
            <div class="btns">
                <button class="edit">
                   <i class="ri-edit-box-line"></i> 
                </button>
                <button class="delete">
                   <i class="ri-delete-bin-5-line"></i> 
                 </button>
            </div>
        </div>
        `;
        input.value = "";

    var current_task_delete = document.querySelectorAll(".delete");
    for (var i = 0; i < current_task_delete.length; i++) {
        current_task_delete[i].onclick = function () {
        this.parentNode.parentNode.remove();
            }
        }

    var current_task_edit = document.querySelectorAll(".edit");
    for (var i = 0; i < current_task_edit.length; i++) {
        current_task_edit[i].onclick = function () {
        input.value = this.parentNode.parentNode.firstElementChild.innerText;
        this.parentNode.parentNode.remove();
            }
        }
    }
}
















