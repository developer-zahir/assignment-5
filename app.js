// Main section code
const all_task_container = document.getElementById("all-task-container");
for (const task of all_task_data) {
  const taskElement = document.createElement("div");
  taskElement.classList = "task bg-[#f4f7ff] p-7 rounded-2xl";
  taskElement.innerHTML = `
           <!-- task ${task.id} -->
            <div class="">
              <p class="bg-white inline-block px-3 py-1 rounded-md text-base text-gray-800">${task.company}</p>
              <h3 class="text-2xl text-[#00303C] font-medium mt-4 mb-4">${task.title}</h3>
              <p class="bg-white p-4 rounded-lg text-base text-gray-500  border border-blue-100">
                <span class="line-clamp-2">${task.description}</span>
              </p>
            </div>
            <div class="pt-5 mt-6 flex justify-between items-center border-t-2 border-gray-300 border-dashed">
              <div>
                <p class="text-base text-gray-600 mb-1">Deadline</p>
                <p class="text-base font-medium text-[#00303C]">${task.deadline}</p>
              </div>
          <button onclick="taskComplete(event,${task.id})"
        class="complete-button bg-[#3752FD] hover:opacity-95 cursor-pointer text-base text-white px-5 py-3 rounded-md transition-colors">
        Completed
      </button>
            </div>
   `;

  all_task_container.appendChild(taskElement);
}

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
        You have completed the task ${task.id} at <span id="time" class="text-gray-700">${new Date(task.completeAT).toLocaleTimeString()}</span>
      `;

      activity_list.appendChild(activity_element);
    }
  }
}

// delete-activity
const activityList = document.getElementById("activity-list");

document.getElementById("clear-activity").addEventListener("click", function (e) {
  activityList.innerHTML = "";
});
