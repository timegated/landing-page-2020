import wowClassTracker from '../images/wowclasstracker.png';
import gemStudy from '../images/gem-study.png';
import bamazon from '../images/bamazonsql.png';
import githubfinder from '../images/github-finder.png';
import tictactoe from '../images/tic-tac-toe.PNG';

const container = {
  firstName: 'Daniel',
  lastName: 'Beccaria',
  area: 'Philadelphia, PA',
  interests: ['javascript', 'reactjs', 'nodejs'],
  projects: [
    {
      title: "Tic-Tac-Toe",
      summary: "Tic-tac-toe in the browser. Built with Javascript modules and Sass, also includes the option to play against an AI of sorts via the minimax algorithm",
      image: tictactoe,
      github: "https://github.com/timegated/tic-tac-toe",
      stack: ["fab fa-html5", "fab fa-css3", "fab fa-js"],
      deployed: "https://modest-kowalevski-a36e52.netlify.app/",
      year: 2020
    },
    {
      title: "WoW Class Tracker",
      summary: "My first attempt at creating a full-stack app with React/NodeJS. Sought to create a streamlined way for groups of players to keep track of higher profile items in game.",
      image: wowClassTracker,
      github: "https://github.com/timegated/class-tracker",
      stack: ["fab fa-react", "fab fa-node-js", "fas fa-database"],
      deployed: "https://trusting-wescoff-a0054c.netlify.app/about",
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
      title: "Github Finder",
      summary: "A React App designed to search for github profiles.",
      image: githubfinder,
      github: "https://github.com/timegated/github-finder-react-ftb",
      stack: ["fab fa-react"],
      deployed: "https://github-repo-finder2020.netlify.app/",
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
             <a href="${project.github}" class="image" target="_blank" rel="noopener noreferrer"><img src="${project.image}" alt="${project.title}"></a>
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
                            <div class="inner-button__group">
                            <a href="${project.github}" target="_blank" class="button primary">Github</a>
                            <a href="${project.deployed}" target="_blank" class="button primary">Live</a>
                            </div>
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