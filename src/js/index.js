import typeEffectOnScreen from "./typeEffect.js";
import container from "./container.js";
import handleScroll from "./scrollTo.js";
import resume from "../images/DJBResume_WebDev.pdf";
import introSVG from '../images/intro.svg';
import "../css/main.scss";

const buttons = Array.from(container.targets.sideBarButton);

buttons[2].firstElementChild.href = resume;

handleScroll;

typeEffectOnScreen();

container.targets.introContainer.style = `
  background-attachment: fixed;
  background-image: url(${introSVG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: center;
`

container.init();
