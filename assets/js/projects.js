// Attempt at creating a SPA feel

// Containers
const typedIntro = document.querySelector('#intro-container');
const aboutMeSection = document.querySelector('#about');
const projectsSection = document.querySelector('#projects');

// Buttons

const aboutButton = document.querySelectorAll('.about-me-button');
const projectButton = document.querySelectorAll('.project-button');
const homePageButton = document.querySelectorAll('.home-button');


// Functionality

const openHomePage = (e) => {
    typedIntro.classList.remove('hide');
    typedIntro.classList.add('fade-in')
    projectsSection.classList.add('hide')
    aboutMeSection.classList.add('hide');
};

const openAboutMe = (e) => {
    typedIntro.classList.add('hide');
    projectsSection.classList.add('hide');
    aboutMeSection.classList.remove('hide');
    aboutMeSection.classList.add('fade-in');
};

const openProjects = (e) => {
    typedIntro.classList.add('hide');
    aboutMeSection.classList.add('hide');
    projectsSection.classList.remove('hide');
    projectsSection.classList.add('fade-in');
};

aboutButton.forEach(button => {
    button.addEventListener('click', openAboutMe);
})

projectButton.forEach(button => {
    button.addEventListener('click', openProjects);
})

homePageButton.forEach(button => {
    button.addEventListener('click', openHomePage);
})