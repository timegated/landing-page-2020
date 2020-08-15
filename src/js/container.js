// Container Obj for DOM
const container = {
  firstName: 'Daniel',
  lastName: 'Beccaria',
  area: 'Philadelphia, PA',
  interests: ['javascript', 'reactjs', 'nodejs'],
  projects: [],
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
             <a href="${project.github}" class="image"><img src=${project.image} alt=${project.title} data-position="center center"></a>
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