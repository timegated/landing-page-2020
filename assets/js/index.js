const about = {
    name: 'Daniel Beccaria',
    job: 'Web Developer',
    area: 'Philadelphia, PA',
    interests: ['javascript', 'reactjs', 'nodejs'],
    navItems: ['<a href="#about" class="nav-button">About</a>',
        '<a href="#projects" class="nav-button">Projects</a>',
        '<a href="assets/resume/DJBResume March 2020.pdf" target="_blank" class="nav-button">Resume</a>']
};

// Iterators

let i = 0;
let j = 0;

// Elements

let target = document.querySelector('#typedIntro');
let isTag;
const { name, job, area, interests, navItems } = about;
let message = `<p class="p-text montserrat m-top-2">const webDev = {<br> \n name: ${name}, 
                <br>area: ${area}<br>}; <br><span class="montserrat" id="interests"> const techStack = [${interests.join(',  ')}];
                </span> <br><span class="montserrat container-nav-row">const navbar = [${navItems.join(',')}]</span>;`;

// Creating a keyboard type effect as an introduction

const typeEffectOnScreen = () => {
    const character = message.slice(0, i += 1);
    const currentCharacter = character.slice(-1);

    if (currentCharacter === '<') isTag = true;
    if (currentCharacter === '>') isTag = false;

    // Recursion

    if (isTag) {
        return typeEffectOnScreen()
    } 

    if (currentCharacter === ';') {
        setTimeout(typeEffectOnScreen, 500)
    } else {
       setTimeout(typeEffectOnScreen, 50)
    }

    target.innerHTML = `${character}<span class="blinky"></span>`;
}


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffectOnScreen, 100)
})