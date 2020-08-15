import typeEffectOnScreen from "./typeEffect.js";
import container from "./container.js";
import fetchProjects from "./fetchProjects.js";
import handleScroll from "./scrollTo.js";
import "../css/master.scss";
import "../data.json";
import "../images/classtrackerv2.JPG";
import "../images/booksearch.JPG";
import "../images/eventcalc.png";
import "../images/shlistjpg.png";


fetchProjects("https://raw.githubusercontent.com/timegated/landing-page-2020/master/data.json").then((res) => {
    container.projects = res.projects;
    const buttons = Array.from(container.targets.sideBarButton);
    buttons.forEach(i => {
        i.classList.add("animate__animated");
        i.classList.add("animate__backInDown")
    })
    handleScroll
    typeEffectOnScreen();
    container.init();
});