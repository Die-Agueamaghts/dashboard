function toggleTheme() {
  document.body.classList.toggle("dark");

  const button = document.getElementById("themeButton");
  const isDark = document.body.classList.contains("dark");
  button.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function togglePalette() {
  document.body.classList.toggle("sunset");
  const isSunset = document.body.classList.contains("sunset");
  localStorage.setItem("palette", isSunset ? "sunset" : "aurora");
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  document.getElementById("themeButton").textContent = "☀";
}

if (localStorage.getItem("palette") === "sunset") {
  document.body.classList.add("sunset");
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

let currentFilter = "all";

function updateProjectCount() {
  const cards = [...document.querySelectorAll(".card")];
  const visible = cards.filter((card) => card.style.display !== "none").length;

  document.getElementById("projectCount").textContent =
    `${visible} ${visible === 1 ? "Projekt" : "Projekte"}`;
}

function searchProjects() {
  const query = document.getElementById("search").value.toLowerCase().trim();
  const cards = document.querySelectorAll(".card");
  let visible = 0;

  cards.forEach((card) => {
    const categoryMatch =
      currentFilter === "all" || card.dataset.category === currentFilter;
    const matches =
      categoryMatch && card.innerText.toLowerCase().includes(query);

    card.style.display = matches ? "" : "none";
    if (matches) visible++;
  });

  document.getElementById("empty").style.display =
    visible === 0 ? "block" : "none";
  updateProjectCount();
}

function setFilter(filterName) {
  currentFilter = filterName;

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filterName);
  });

  searchProjects();
}

updateProjectCount();
document.getElementById("themeButton").addEventListener("click", toggleTheme);
document
  .getElementById("paletteButton")
  .addEventListener("click", togglePalette);
document.getElementById("search").addEventListener("input", searchProjects);
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});
