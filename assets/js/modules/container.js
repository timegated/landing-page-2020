const container = {
  firstName: 'Daniel',
  lastName: 'Beccaria',
  area: 'Philadelphia, PA',
  interests: ['javascript', 'reactjs', 'nodejs'],
  projects: [],
  targets: {
      projectElement: document.getElementById('projects'),
      typedIntroElement: document.getElementById('typedIntro'),
      navBar: document.querySelector('.navbar'),
      sideBarButton: document.querySelector('#button'),
  },
  generateProjects() {
      this.targets.projectElement.innerHTML = `
      ${this.projects.map(function(project) {
          return `
          <div class="projects-container" onclick="void(0)">
              <div class="projects-container__content">
                  <div class="project-image-container">
                      <img src="${project.image}" class="project-image" title="${project.title}" />
                      <div class="overlay">
                          <div class="year-overlay">
                          <p>${project.year}</p>
                          </div>
                          <div class="external-links-overlay">
                          <p><a href="${project.github}" target="_blank">Github</a>
                              ${project.deployed && ` <a href="${project.deployed}" target="_blank">Live</a>`}
                          </p>
                          </div>
                          <p class="project-title">${project.title}</p>
                          <p class="project-summary">${project.summary}</p>
                      </div>
                  </div>
              </div>
          </div>
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