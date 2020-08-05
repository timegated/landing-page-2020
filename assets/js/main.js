import typeEffectOnScreen from './modules/typeEffect.js';
import container from './modules/container.js';
import fetchProjects from './modules/fetchProjects.js';
import handleScroll from './modules/scrollTo.js';


fetchProjects('https://raw.githubusercontent.com/timegated/landing-page-2020/design-test/data.json').then((res) => {
    container.projects = res.projects;
    handleScroll
    container.init();
});