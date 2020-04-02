const about = {
    name: 'Daniel Beccaria',
    job: 'Web Developer',
    area: 'Philadelphia',
    interests: ['reactjs', 'javascript', 'nodejs', 'html', 'css']
};

let i = 0;
let j = 0;
let target = document.querySelector('#typedIntro');
isAnimated = false;
let isTag;

const { name, job, area, interests } = about;

let message = `<p class="m-top-6 big-text">Hi, my name is <span class="name">${name}</span>.
                <br> I'm a <span class="name">${job.toLowerCase()}</span> 
                based in <span class="name">${area}</span>.
                <br></p><br><p class="p-text montserrat m-top-2">Currently building things with <span class="montserrat" id="interests">${interests[j]}</span></p>`;

// Creating a keyboard type effect as an introduction

const typeEffectOnScreen = () => {
    const character = message.slice(0, i += 1);
    if (character === message) {
        i = interests[j].length
        setTimeout(backSpaceEffect, 1000)
        return
    }
    
    const currentCharacter = character.slice(-1);

    if (currentCharacter === '<') isTag = true;
    if (currentCharacter === '>') isTag = false;

    //Recursion

    // if (isTag) {
    //     return typeEffectOnScreen()
    // }
    while (isTag) {
        return typeEffectOnScreen()
    }

    if (currentCharacter === '.' || currentCharacter === '?') {
        setTimeout(typeEffectOnScreen, 500)
    } else {
        setTimeout(typeEffectOnScreen, 25)
    }

    target.innerHTML = `${character}<span class="blinky"></span>`;
}

// Creating a backspace cursor effect to cycle through my interests

const backSpaceEffect = () => {
    const character = interests[j] ? interests[j].slice(0, (i -= 1)) : "";
    const interestText = document.querySelector('#interests');
    interestText.innerHTML = `${character}<span class="blinky"></span>`;
    if (character.length === 0) {
        i = 0;
        if (j < interests.length - 1) {
            j++;
        } else {
            j = 0;
        }
        message = `<span class="montserrat">${interests[j]}</span>`
        target = document.querySelector('#interests')
        isAnimated = true;
        setTimeout(typeEffectOnScreen, 200);

        return
    }
    if (character === interests[j]) {
        setTimeout(backSpaceEffect, 200)
    } else {
        setTimeout(backSpaceEffect, 200)
    }
};

const showButtonAfter = () => {
    const button = document.querySelectorAll('.button');
    button.forEach(button => {
        button.classList.remove('hide')
        return button.classList.add('fade-in')
    })
    
    
}
setTimeout(showButtonAfter, 4000)
typeEffectOnScreen()