import container from './container.js';

const { firstName, lastName } = container;

let i = 0;
let isTag;
let message = `<h1 class="major"><span>${firstName}</span>${' '}<span>${lastName}</span></h1>`;

const typeEffectOnScreen = () => {
    const character = message.slice(0, i += 1);
    if (character === message) {
        return;
    };
    const currentCharacter = character.slice(-1);
    if (currentCharacter === '<') isTag = true;
    if (currentCharacter === '>') isTag = false;

    if (isTag) {
        return typeEffectOnScreen()
    };

    if (currentCharacter === '.') {
        setTimeout(typeEffectOnScreen, 50)
        container.targets.typedIntroElement.classList.add('typing')
    } else {
        setTimeout(typeEffectOnScreen, 50)
    };

    container.targets.typedIntroElement.innerHTML = character;
};

export default typeEffectOnScreen;