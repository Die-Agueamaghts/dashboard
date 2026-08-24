function toggleTheme() {
  document.body.classList.toggle("dark");

  const button = document.getElementById("themeButton");
  const isDark = document.body.classList.contains("dark");
  button.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  document.getElementById("themeButton").textContent = "☀";
}

function updateClock() {
  const time = new Date().toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("clock").textContent = time;
}

updateClock();
setInterval(updateClock, 1000);

function searchProjects() {
  const query = document.getElementById("search").value.toLowerCase().trim();
  const cards = document.querySelectorAll(".card");
  let visible = 0;

  cards.forEach((card) => {
    const matches = card.innerText.toLowerCase().includes(query);
    card.style.display = matches ? "" : "none";
    if (matches) visible++;
  });

  document.getElementById("empty").style.display =
    visible === 0 ? "block" : "none";
  document.getElementById("projectCount").textContent =
    `${visible} ${visible === 1 ? "Projekt" : "Projekte"}`;
}

document.getElementById("themeButton").addEventListener("click", toggleTheme);
document.getElementById("search").addEventListener("input", searchProjects);
