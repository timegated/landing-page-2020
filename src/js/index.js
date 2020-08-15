import typeEffectOnScreen from "./typeEffect.js";
import container from "./container.js";
import fetchProjects from "./fetchProjects.js";
import handleScroll from "./scrollTo.js";
import "../css/master.scss";
import "../images/classtrackerv2.JPG";
import "../images/booksearch.JPG";
import "../images/eventcalc.png";
import "../images/shlistjpg.png";


fetchProjects("../../data.json").then((res) => {
    container.projects = res.projects;
    const buttons = Array.from(container.targets.sideBarButton);
    buttons.forEach(element => {
        element.classList.add("animate__animated");
        element.classList.add("animate__backInDown")
    })
    handleScroll
    typeEffectOnScreen();
    container.init();
});