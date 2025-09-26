
// Menu hamburger
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", () => menu.classList.toggle("active"));

// Tabs login/cadastro
const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const authContainer = document.getElementById("auth-container");
const mainContent = document.getElementById("main-content");

loginTab.addEventListener("click", () => switchTab('login'));
signupTab.addEventListener("click", () => switchTab('signup'));

function switchTab(tab) {
  if (tab === 'login') {
    loginTab.classList.add('active'); signupTab.classList.remove('active');
    loginForm.classList.add('active'); signupForm.classList.remove('active');
  } else {
    loginTab.classList.remove('active'); signupTab.classList.add('active');
    loginForm.classList.remove('active'); signupForm.classList.add('active');
  }
}

// Simulação de vagas
let jobs = [
  { id: 1, title: "Front-End", company: "XPTO", type: "Remoto", city: "Online", desc: "React, CSS, HTML", skills: "React, CSS, HTML" },
  { id: 2, title: "Back-End", company: "TechCorp", type: "CLT", city: "SP", desc: "Node.js, Express, MongoDB", skills: "Node.js, Express, MongoDB" },
  { id: 3, title: "UX/UI Designer", company: "DesignHub", type: "PJ", city: "RJ", desc: "Figma, Adobe XD", skills: "Figma, Adobe XD" },
];

// Renderiza grid de vagas
function renderJobs() {
  const grid = document.getElementById("job-grid");
  grid.innerHTML = "";
  let keyword = document.getElementById("search-input").value.toLowerCase();
  let cityFilter = document.getElementById("city-filter").value;
  let typeFilter = document.getElementById("type-filter").value;
  let filtered = jobs.filter(j => {
    return (!keyword || j.title.toLowerCase().includes(keyword)) &&
      (!cityFilter || j.city.toLowerCase().includes(cityFilter)) &&
      (!typeFilter || j.type.toLowerCase().includes(typeFilter));
  });
  filtered.forEach(j => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.innerHTML = `<h3>${j.title}</h3><p>${j.company}</p><p>${j.type} - ${j.city}</p>
                      <button class="btn btn-secondary" onclick="openJobModal(${j.id})">Mais detalhes</button>`;
    grid.appendChild(card);
  });
}

// Modal de vaga
function openJobModal(id) {
  const job = jobs.find(j => j.id === id);
  document.getElementById("modal-title").innerText = job.title;
  document.getElementById("modal-company").innerText = job.company;
  document.getElementById("modal-type").innerText = job.type;
  document.getElementById("modal-city").innerText = job.city;
  document.getElementById("modal-desc").innerText = job.desc;
  document.getElementById("modal-skills").innerText = job.skills;
  document.getElementById("job-modal").classList.add("active");
}
function closeJobModal() { document.getElementById("job-modal").classList.remove("active"); }

// Login / Cadastro simulados
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  authContainer.style.display = "none";
  mainContent.style.display = "block";
  renderJobs();
});
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Cadastro realizado!");
  switchTab('login');
});
