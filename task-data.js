const all_task_data = [
  {
    id: 1,
    company: "ShopEase",
    title: "Fix Mobile Button Issue",
    description: "Debug using Chrome DevTools, check for overlapping elements",
    deadline: "21 March 2025",
    completed: true,
    completeAT: null,
  },
  {
    id: 2,
    company: "CloudSync",
    title: "Add Dark Mode",
    description: "Store the user's preference in localStorage, update CSS variables",
    deadline: "21 March 2025",
    completed: false,
    completeAT: null,
  },
  {
    id: 3,
    company: "SwiftPay",
    title: "Optimize Home page",
    description: "Debug using Chrome DevTools, check for overlapping elements",
    deadline: "21 March 2025",
    completed: false,
    completeAT: null,
  },
  {
    id: 4,
    company: "Meta",
    title: "Add new emoji 😊",
    description: "Debug using Chrome DevTools, check for overlapping elements",
    deadline: "21 March 2025",
    completed: false,
    completeAT: null,
  },
  {
    id: 5,
    company: "Google LLC",
    title: "Integrate OpenAI API",
    description: "Debug using Chrome DevTools, check for overlapping elements",
    deadline: "21 March 2025",
    completed: false,
    completeAT: null,
  },
  {
    id: 6,
    company: "Glassdoor",
    title: "Improve Job searching",
    description: "Debug using Chrome DevTools, check for overlapping elements",
    deadline: "21 March 2025",
    completed: false,
    completeAT: null,
  },
];


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
