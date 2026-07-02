export default function initDropdownMenu() {}

const dropdownMenus = document.querySelectorAll("[data-dropdown");

dropdownMenus.forEach((menu) => {
  ["touchstar", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(e) {
  e.preventDefault();
  this.classList.toggle("active");
}
