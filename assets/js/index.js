const about = {
    firstName: 'Daniel',
    lastName: 'Beccaria',
    area: 'Philadelphia, PA',
    interests: ['javascript','reactjs','nodejs'],
    navItems: ['<a href="#about" class="nav-button">About</a>',
        '<a href="#projects" class="nav-button">Projects</a>',
        '<a href="assets/resume/DJBResume March 2020.pdf" target="_blank" class="nav-button">Resume</a>']
};

// Iterators

let i = 0;

// Elements

let target = document.querySelector('#typedIntro');
let isTag;
const { firstName, lastName, job, area, interests, navItems } = about;
let message = `<pre class="p-text courier-new m-top-2 js-string-color"><span class="js-const-color">const</span> <span class="js-var-color">person</span> = {<br>      <span class="js-var-color">firstName:</span> '${firstName}',<br>      <span class="js-var-color">lastName:</span> '${lastName}',<br>      <span class="js-var-color">area:</span> '${area}'<br>};<br><span class="container-nav-row"><span class="js-const-color">const</span> <span class="js-var-color"> navbar</span> = [${navItems.join()}];</span></pre>`;

// Creating a keyboard type effect as an introduction

const typeEffectOnScreen = () => {
    const character = message.slice(0, i += 1);
    if (character === message) {
        return;
    }
    const currentCharacter = character.slice(-1);

    if (currentCharacter === '<') isTag = true;
    if (currentCharacter === '>') isTag = false;

    // Recursion

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


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffectOnScreen, 100)
})