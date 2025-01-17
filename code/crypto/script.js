const dropdown = document.getElementById("dropdown-menu");
const searchInput = document.getElementById("search");

searchInput.addEventListener("focus", () => {
  dropdown.classList.add("show");
});

searchInput.addEventListener("blur", () => {
  setTimeout(() => {
    dropdown.classList.remove("show");
  }, 200);
});
