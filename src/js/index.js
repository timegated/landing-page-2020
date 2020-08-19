import typeEffectOnScreen from "./typeEffect.js";
import container from "./container.js";
import handleScroll from "./scrollTo.js";
import resume from "../images/DJBResume_WebDev.pdf";
import "../css/master.scss";
console.log(resume)
const buttons = Array.from(container.targets.sideBarButton);

buttons.forEach(element => {
    element.classList.add("animate__animated");
    element.classList.add("animate__backInDown");
});

buttons[2].firstElementChild.href = resume;

handleScroll;

typeEffectOnScreen();

container.init();
