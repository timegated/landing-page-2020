import container from './container.js';


const { firstName, lastName, area } = container;

let i = 0;
let isTag;
let message = `<pre class="intro-container__pre js-string-color montserrat"><span class="js-const-color">const</span> <span class="js-var-color">person</span> = {<br>      <span class="js-var-color">firstName:</span> '${firstName}',<br>      <span class="js-var-color">lastName:</span> '${lastName}',<br>      <span class="js-var-color">area:</span> '${area}'<br>};</pre>`;

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

  container.targets.typedIntroElement.innerHTML = `${character}<span class="cursor">&nbsp;</span>`;
};

export default typeEffectOnScreen;