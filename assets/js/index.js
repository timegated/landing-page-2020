const container = {
    firstName: 'Daniel',
    lastName: 'Beccaria',
    area: 'Philadelphia, PA',
    interests: ['javascript', 'reactjs', 'nodejs'],
    navItems: ['<a href="#about" class="nav-button">About</a>',
        '<a href="#projects" class="nav-button">Projects</a>',
        '<a href="assets/resume/DJBResume March 2020.pdf" target="_blank" class="nav-button">Resume</a>'],
    projects: [],
    targets: {
        projectElement: document.getElementById('projects'),
        typedIntroElement: document.getElementById('typedIntro')
    },
    generateProjects() {
        console.log(this.projects)
        this.targets.projectElement.innerHTML = `
        ${this.projects.map(project => {
            return `
            <div class="project-container" onclick="void(0)">
                <div class="project-content">
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
let message = `<pre class="p-text courier-new m-top-2 js-string-color"><span class="js-const-color">const</span> <span class="js-var-color">person</span> = {<br>      <span class="js-var-color">firstName:</span> '${firstName}',<br>      <span class="js-var-color">lastName:</span> '${lastName}',<br>      <span class="js-var-color">area:</span> '${area}'<br>};</pre>`;


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
    } else {
       setTimeout(typeEffectOnScreen, 50)
    }

    container.targets.typedIntroElement.innerHTML = `${character}<span class="cursor">&nbsp;</span>`;
}

// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout(typeEffectOnScreen, 100)
// })

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
fetchProjects('https://timegated.github.io/landing-page-2020/data.json').then(function (result) {
    container.projects = result.projects;
    typeEffectOnScreen();
    init();
});

