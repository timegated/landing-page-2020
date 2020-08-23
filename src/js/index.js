import typeEffectOnScreen from "./typeEffect.js";
import container from "./container.js";
import handleScroll from "./scrollTo.js";
import resume from "../images/DJBResume_WebDev.pdf";
import profilePic from '../images/profilepic4.png';
import "../css/main.scss";

const profileContainer = container.targets.profileElement;
const profileChild = document.createElement('div');

profileChild.innerHTML = `<img class="image profile-image"src=${profilePic} alt="Daniel Beccaria profile picture"/>`

const navElement = document.querySelector('nav');
profileContainer.insertBefore(profileChild, navElement);

const buttons = Array.from(container.targets.sideBarButton);

buttons.forEach(element => {
    element.classList.add("animate__animated");
    element.classList.add("animate__backInDown");
});

buttons[2].firstElementChild.href = resume;

handleScroll;

typeEffectOnScreen();

container.init();
