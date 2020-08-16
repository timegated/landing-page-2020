import typeEffectOnScreen from "./typeEffect.js";
import container from "./container.js";
import handleScroll from "./scrollTo.js";
import "../css/master.scss";


const buttons = Array.from(container.targets.sideBarButton);

buttons.forEach(element => {
    element.classList.add("animate__animated");
    element.classList.add("animate__backInDown");
});

handleScroll;

typeEffectOnScreen();

container.init();
