const about = {
    firstName: 'Daniel',
    lastName: 'Beccaria',
    area: 'Philadelphia, PA',
    interests: ['javascript', 'reactjs', 'nodejs'],
    navItems: ['<a href="#about" class="nav-button">About</a>',
        '<a href="#projects" class="nav-button">Projects</a>',
        '<a href="assets/resume/DJBResume March 2020.pdf" target="_blank" class="nav-button">Resume</a>'],
    projects: [],
    target: document.getElementById('projects'),
    generateProjects() {
        this.target.innerHTML = `
        ${this.projects.map(project => {
            return `
            <div class="project-container" onclick="void(0)">
                <div class"project-content">
                    <div class="project-image-container">
                        <img src="${project.image}" class="project-image" title="${project.title}" />
                    </div>
                </div>
            </div>
            `
        })
        }
        `
    }
};


let i = 0;


let target = document.querySelector('#typedIntro');
let isTag;
const { firstName, lastName, job, area, interests, navItems } = about;
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

    target.innerHTML = `${character}<span class="cursor">&nbsp;</span>`;
}

// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout(typeEffectOnScreen, 100)
// })

const init = () => {
    about.generateProjects();
}

const xhr = new XMLHttpRequest();
xhr.open('GET', '/data.json');
xhr.onload = () => {
    if (xhr.status === 200) {
        try {
            const resObj = JSON.parse(xhr.responseText);
            about.projects = resObj.projects;
            console.log('Projects Loaded');
            typeEffectOnScreen();
            init()
        }
        catch {
            console.error('Something went wrong');
        }
    };
}
xhr.send()