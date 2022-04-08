const buttons = Array.from(document.querySelectorAll('.button')); // Converting NodeList to an array to access arr methods
const sideBarLinks = Array.from(document.querySelectorAll('.sidebar-link'));

function assignEvent(arr) {
  return arr.forEach(element => {
    element.addEventListener("click", handleScroll);
  })
}

assignEvent(buttons);
assignEvent(sideBarLinks);

function handleScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

export default handleScroll;