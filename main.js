function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    
    if (task === "") {
      alert("Please enter a task!");
      return;
    }
    
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = task + " <button onclick='deleteTask(this)' class='delete-btn'>Delete</button>";
    taskList.appendChild(li);
    
    input.value = "";
  }
  
  function deleteTask(elem) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(elem.parentNode);
  }