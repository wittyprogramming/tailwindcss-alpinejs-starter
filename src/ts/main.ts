import "alpinejs";

declare global {
  interface Window {
    toggleNavbar: typeof toggleNavbar;
  }
}

function toggleNavbar(collapseID: string) {
  document.getElementById(collapseID)?.classList.toggle("hidden");
  document.getElementById(collapseID)?.classList.toggle("block");
}

window.toggleNavbar = toggleNavbar;
