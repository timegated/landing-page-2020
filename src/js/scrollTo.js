const buttons = Array.from(document.querySelectorAll('.button'));
const sideBarLinks = Array.from(document.querySelectorAll('.sidebar-link'));

// for (const button of buttons) {
//   button.addEventListener("click", handleScroll);
// }
function assignEvent(arr) {
  return arr.forEach(i => {
    i.addEventListener("click", handleScroll);
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