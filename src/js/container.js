import wowClassTracker from '../images/wowclasstracker.png';
import shoppingList from '../images/shlistjpg.png';
import eventCalc from '../images/eventcalc.png';

console.log(wowClassTracker)

const container = {
  firstName: 'Daniel',
  lastName: 'Beccaria',
  area: 'Philadelphia, PA',
  interests: ['javascript', 'reactjs', 'nodejs'],
  projects: [
    {
      title: "WoW Class Tracker",
      summary: "My first attempt at creating a full-stack app with React/NodeJS. Sought to create a streamlined way for groups of players to keep track of higher profile items in game.",
      image: wowClassTracker,
      github: "https://github.com/timegated/class-tracker",
      stack: ["fab fa-react", "fab fa-node-js", "fas fa-database"],
      deployed: "https://wowclasstracker.com/",
      year: 2020
    },
    {
      title: "Calculator",
      summary: "Calculator project showcasing event delegation",
      image: eventCalc,
      github: "https://github.com/timegated/event-delecalculator",
      stack: ["fab fa-html5", "fab fa-css3-alt"],
      deployed: "https://timegated.github.io/event-delecalculator/calc.html",
      year: 2019
    },
    {
      title: "Shopping List",
      summary: "Learning tool for fullstack applications built with react and mongodb",
      image: shoppingList,
      github: "https://github.com/timegated/shopping-list-hooks",
      stack: ["fab fa-react", "fab fa-node-js", "fas fa-database"],
      deployed: "https://dry-basin-38264.herokuapp.com/",
      year: 2020
    }
  ],
  targets: {
    projectElement: document.getElementById('work'),
    profileElement: document.getElementById('profile'),
    typedIntroElement: document.getElementById('typedIntro'),
    navBar: document.querySelector('.navbar'),
    sideBarButton: document.querySelectorAll('#button'),
  },
  generateProjects() {
    this.targets.projectElement.innerHTML = `
      ${this.projects.map(function (project) {
      return `
          <section>
             <a href="${project.github}" class="image" target="_blank" rel="noopener noreferrer"><img src="${project.image}" alt="${project.title}" data-position="center center"></a>
            <div class="content">
              <div class="inner">
                <h2>${project.title}</h2>
                <p>${project.summary}</p>
                    ${project.stack ? project.stack.map(icon => {
        return `
                  <i class="icon icon-dark ${icon}"></i>
                 `
      }).join('')
          : console.log("nothing here yet")}
                            <a href="${project.deployed}" target="_blank" class="button primary large">Live</a>

              </div>
            </div>
          </section>
          `
    }).join('')
      }
      `
  },
  init() {
    this.generateProjects()
  }
};

export default container;