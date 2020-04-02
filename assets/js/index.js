const about = {
    name: 'Daniel Beccaria',
    job: 'Web Developer',
    area: 'Philadelphia',
    interests: ['javascript', 'reactjs', 'nodejs'],
    navItems: ['<a href="#about" class="nav-button">About</a>', '<a href="#projects" class="nav-button">Projects</a>', '<a href="assets/resume/DJBResume March 2020.pdf" class="nav-button">Resume</a>']
};

let i = 0;
let j = 0;
let target = document.querySelector('#typedIntro');
isAnimated = false;
let isTag;

const { name, job, area, interests, navItems } = about;
console.log(navItems)

let message = `<p class="m-top-6 big-text">Hi, my name is <span class="name">${name}</span>.
                <br> I'm a <span class="name">${job.toLowerCase()}</span> 
                based in <span class="name">${area}</span>.
                <br></p><br>
                <p class="p-text montserrat m-top-2">Currently building web apps with <br><span class="montserrat" id="interests"> const tech = [${interests.join(',  ')}];</span> 
                <br><span class="montserrat container-nav-row">const navbar = [${navItems.join(',')}];</span></p>`;

// Creating a keyboard type effect as an introduction

const typeEffectOnScreen = () => {
    const character = message.slice(0, i += 1);
  
    const currentCharacter = character.slice(-1);

    if (currentCharacter === '<') isTag = true;
    if (currentCharacter === '>') isTag = false;

    //Recursion

    if (isTag) {
        return typeEffectOnScreen()
    }

    if (currentCharacter === '.' || currentCharacter === '?') {
        setTimeout(typeEffectOnScreen, 500)
    } else {
        setTimeout(typeEffectOnScreen, 25)
    }

    target.innerHTML = `${character}<span class="blinky"></span>`;
}





const showButtonAfter = () => {
    const button = document.querySelectorAll('.button');
    button.forEach(button => {
        button.classList.remove('hide')
        return button.classList.add('fade-in')
    })
    
    
}
setTimeout(showButtonAfter, 4000)
typeEffectOnScreen()