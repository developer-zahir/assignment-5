// Random bg color changer function
let rotateValue = 0;
document.getElementById("theme-changer").addEventListener("click", function (event) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;

  rotateValue += 360;
  event.target.style.transform = `rotate(${rotateValue}deg)`;
  event.target.style.transition = "transform 0.5s ease";
});

// today date

// Get the current date
const currentDate = new Date();
document.getElementById("toDay-name").innerText = currentDate.toLocaleString("en-US", { weekday: "short" }) + " ,";
document.getElementById("today-date").innerText = currentDate.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
