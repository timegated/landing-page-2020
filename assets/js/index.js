const about = {
    name: 'Daniel Beccaria',
    job: 'Web Developer',
    area: 'Philadelphia, PA',
    interests: ['javascript', 'reactjs', 'nodejs'],
    navItems: ['<a href="#about" class="nav-button">About</a>',
        '<a href="#projects" class="nav-button">Projects</a>',
        '<a href="assets/resume/DJBResume March 2020.pdf" target="_blank" class="nav-button">Resume</a>']
};

const { name, job, area, interests, navItems } = about;


// Iterators
let charIndex = 0;

// Elements
const typingTarget = document.querySelector('.typed-person');
const typedNavBar = document.querySelector('.typed-navbar');
// let isTag;

// Other lines of text I want displayed
let personText = `const person = {name: ${name}, area: ${area}}`;
let navText = `const navBar = [${navItems.join(',')}]`;

{/* <br><span class="montserrat" id="interests"> const techStack = [${interests.join(',  ')}]; */}
{/* </span> <br><span class="montserrat container-nav-row">const navbar = [${navItems.join(',')}]</span>;`; */ }

// Creating a keyboard type effect as an introduction

const typeEffectOnScreen = (string, target) => {
    let message = Array.from(string)
    if (charIndex < message.length) {
        target.innerHTML += message[charIndex]
        charIndex++
        setTimeout(() => {
            typeEffectOnScreen(string, target)
        }, 50);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        typeEffectOnScreen(personText, typingTarget)
    }, 1000);
    setTimeout(() => {
        typeEffectOnScreen(navText, typedNavBar)
    }, 3000);
})