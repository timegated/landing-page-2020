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
    }
};

let i = 0;
let isTag;
const { firstName, lastName, job, area, interests, navItems } = container;
let message = `<pre class="intro-container__pre js-string-color montserrat"><span class="js-const-color">const</span> <span class="js-var-color">person</span> = {<br>      <span class="js-var-color">firstName:</span> '${firstName}',<br>      <span class="js-var-color">lastName:</span> '${lastName}',<br>      <span class="js-var-color">area:</span> '${area}'<br>};</pre>`;

const init = () => {
    container.generateProjects();
}

const fetchProjects = (url) => {
    return fetch(url).then(function (res) {
        return res.json()
    }).then(function (json) {
        return json;
    })
};

const typeEffectOnScreen = () => {
    const character = message.slice(0, i += 1);
    if (character === message) {
        return;
    }
    const currentCharacter = character.slice(-1);
    if (currentCharacter === '<') isTag = true;
    if (currentCharacter === '>') isTag = false;

    if (isTag) {
        return typeEffectOnScreen()
    } 

    if (currentCharacter === '.') {
        setTimeout(typeEffectOnScreen, 50)
        container.targets.typedIntroElement.classList.add('typing')
    } else {
       setTimeout(typeEffectOnScreen, 50)
    }

    container.targets.typedIntroElement.innerHTML = `${character}<span class="cursor">&nbsp;</span>`;
}

fetchProjects('https://raw.githubusercontent.com/timegated/landing-page-2020/master/data.json').then(function (result) {
    container.projects = result.projects;
    typeEffectOnScreen();
    init();
});