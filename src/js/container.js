import '../images/classtrackerv2.JPG';
import '../images/booksearch.JPG';
import '../images/eventcalc.png';
import '../images/shlistjpg.png';

const container = {
  firstName: 'Daniel',
  lastName: 'Beccaria',
  area: 'Philadelphia, PA',
  interests: ['javascript', 'reactjs', 'nodejs'],
  projects: [
    {
      title: "WoW Class Tracker",
      summary: "App designed to help players keep track of their items",
      image: "../dist/images/classtrackerv2.JPG",
      github: "https://github.com/timegated/class-tracker",
      stack: ["fab fa-react", "fab fa-node-js", "fas fa-database"],
      deployed: "https://wowclasstracker.com/",
      year: 2020
    },
    {
      title: "Book Search",
      summary: "A mini-fullstack react application that searches for books",
      image: "../dist/images/booksearch.JPG",
      github: "https://github.com/timegated/react-books-search",
      stack: ["fab fa-react", "fab fa-node-js", "fas fa-database"],
      deployed: "https://sleepy-bayou-19372.herokuapp.com/",
      year: 2019
    },
    {
      title: "Calculator",
      summary: "Calculator project showcasing event delegation",
      image: "../dist/images/eventcalc.png",
      github: "https://github.com/timegated/event-delecalculator",
      stack: ["fab fa-html5", "fab fa-css3-alt"],
      deployed: "https://timegated.github.io/event-delecalculator/calc.html",
      year: 2019
    },
    {
      title: "Shopping List",
      summary: "Learning tool for fullstack applications built with react and mongodb",
      image: "../dist/images/shlistjpg.png",
      github: "https://github.com/timegated/shopping-list-hooks",
      stack: ["fab fa-react", "fab fa-node-js", "fas fa-database"],
      deployed: "https://dry-basin-38264.herokuapp.com/",
      year: 2020
    }
  ],
  targets: {
      projectElement: document.getElementById('work'),
      typedIntroElement: document.getElementById('typedIntro'),
      navBar: document.querySelector('.navbar'),
      sideBarButton: document.querySelectorAll('#button'),
  },
  generateProjects() {
      this.targets.projectElement.innerHTML = `
      ${this.projects.map(function (project) {
          return `
          <section>
             <a href="${project.github}" class="image"><img src="${project.image}" alt="${project.title}" data-position="center center"></a>
            <div class="content">
              <div class="inner">
                <h2>${project.title}</h2>
                <p>${project.summary}</p>
                    ${project.stack ? project.stack.map(icon => {
                      return `
                  <i class="icon ${icon}"></i>
                 `
                    }).join('')
              : console.log("nothing here yet")}
                <a href="${project.github}" target="_blank" class="button large">Github</a>
                <a href="${project.deployed}" target="_blank" class="button primary large">Live</a>
              </div>
          </section>
          `
      }).join('')
      }
      `
  },
  init () {
    this.generateProjects()
  }
};

export default container;