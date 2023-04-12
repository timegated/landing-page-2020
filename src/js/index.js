import typeEffectOnScreen from "./effects/typeEffect.js";
import container from "./containers/container.js";
import handleScroll from "./effects/scrollTo.js";
import { observer } from "../js/lazy/observer.js";
import resume from "../images/Resume.pdf";
import introSVG from '../images/intro.svg';
import "../css/main.scss";

const buttons = Array.from(container.targets.sideBarButton);

buttons[2].firstElementChild.href = resume;

container.targets.introContainer.style = `
  background-attachment: fixed;
  background-image: url(${introSVG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: center;
`

observer.observe(container.targets.projectElement);
handleScroll;
typeEffectOnScreen();
container.init();
