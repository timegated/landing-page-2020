import wowClassTracker from '../images/wowclasstracker.png';
import shoppingList from '../images/shlistjpg.png';
import gemStudy from '../images/gem-study.png';
import bamazon from '../images/bamazonsql.png';

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
      deployed: "https://wowclasstracker.herokuapp.com/login",
      year: 2020
    },
    {
      title: "Gem Study Tools",
      summary: "An interactive way for people studying gemology to store information they find about gem stones.",
      image: gemStudy,
      github: "https://github.com/timegated/gem-study-tool",
      stack: ["fab fa-react", "fab fa-node-js", "fas fa-database"],
      deployed: "https://gem-study-tools.herokuapp.com/",
      year: 2020
    },
    {
      title: "Bamazon SQL",
      summary: "A command line interface that leverages SQL for managing a mock inventory.",
      image: bamazon,
      github: "https://github.com/timegated/bamazonsql",
      stack: ["fas fa-database"],
      deployed: "https://github.com/timegated/bamazonsql",
      year: 2020
    }
  ],
  targets: {
    projectElement: document.getElementById('work'),
    profileElement: document.getElementById('profile'),
    typedIntroElement: document.getElementById('typedIntro'),
    introContainer: document.getElementById('intro'),
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