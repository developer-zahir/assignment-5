
// assign task number
let task_count = all_task_data.length;
document.getElementById("assign-task-number").innerText = task_count < 10 ? `0${task_count}` : task_count;

// completed task number
let completedTaskNumber = 0;
document.getElementById("completed-task-number").innerText = completedTaskNumber < 10 ? `0${completedTaskNumber}` : completedTaskNumber;

function taskComplete(event, id) {
  for (const task of all_task_data) {
    if (task.id === id) {
      event.target.setAttribute("disabled", true);

      if (task_count === 1) {
        alert("Board Updated Successfully...");
        alert("Congrats!! You have completed all the current tasks.");
      } else {
        alert("Board Updated Successfully...");
      }

      completedTaskNumber += 1;
      task_count -= 1;

      document.getElementById("assign-task-number").innerText = task_count < 10 ? `0${task_count}` : task_count;
      document.getElementById("completed-task-number").innerText = completedTaskNumber < 10 ? `0${completedTaskNumber}` : completedTaskNumber;

      // task completion time
      task.completeAT = Date.now();

      // Task activity dynamic
      let activity_list = document.getElementById("activity-list");
      let activity_element = document.createElement("p");
      activity_element.classList.add("bg-[#f4f7ff]", "p-4", "rounded-lg", "text-base", "text-gray-500", "border", "border-blue-200");

      activity_element.innerHTML = `
        You have completed the task <span class="text-blue-500"> ${task.title} </span> at <span id="time" class="text-gray-700">${new Date(
        task.completeAT
      ).toLocaleTimeString()}</span>
      `;

      activity_list.appendChild(activity_element);
    }
  }
}

// delete-activity
const activityList = document.getElementById("activity-list");
document.getElementById("clear-activity").addEventListener("click", function () {
  activityList.innerHTML = "";
});
