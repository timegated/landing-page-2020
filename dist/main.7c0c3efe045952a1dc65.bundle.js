!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a.p+"imgs/wowclasstracker.2b4a7764379106ab7ad150f2b8ea5a3b.png",r=a.p+"imgs/shlistjpg.be419290f3109d4e1ac36a37a6c08f7c.png",o=a.p+"imgs/eventcalc.5a065f9f1b77079b30321384deba8a77.png";console.log(n);var i={firstName:"Daniel",lastName:"Beccaria",area:"Philadelphia, PA",interests:["javascript","reactjs","nodejs"],projects:[{title:"WoW Class Tracker",summary:"Web application built with react to help people who play WoW keep track of their items",image:n,github:"https://github.com/timegated/class-tracker",stack:["fab fa-react","fab fa-node-js","fas fa-database"],deployed:"https://wowclasstracker.com/",year:2020},{title:"Calculator",summary:"Calculator project showcasing event delegation",image:o,github:"https://github.com/timegated/event-delecalculator",stack:["fab fa-html5","fab fa-css3-alt"],deployed:"https://timegated.github.io/event-delecalculator/calc.html",year:2019},{title:"Shopping List",summary:"Learning tool for fullstack applications built with react and mongodb",image:r,github:"https://github.com/timegated/shopping-list-hooks",stack:["fab fa-react","fab fa-node-js","fas fa-database"],deployed:"https://dry-basin-38264.herokuapp.com/",year:2020}],targets:{projectElement:document.getElementById("work"),typedIntroElement:document.getElementById("typedIntro"),navBar:document.querySelector(".navbar"),sideBarButton:document.querySelectorAll("#button")},generateProjects(){this.targets.projectElement.innerHTML=`\n      ${this.projects.map((function(e){return`\n          <section>\n             <a href="${e.github}" class="image" target="_blank" rel="noopener noreferrer"><img src="${e.image}" alt="${e.title}" data-position="center center"></a>\n            <div class="content">\n              <div class="inner">\n                <h2>${e.title}</h2>\n                <p>${e.summary}</p>\n                    ${e.stack?e.stack.map(e=>`\n                  <i class="icon icon-dark ${e}"></i>\n                 `).join(""):console.log("nothing here yet")}\n                            <a href="${e.deployed}" target="_blank" class="button primary large">Live</a>\n\n              </div>\n            </div>\n          </section>\n          `})).join("")}\n      `},init(){this.generateProjects()}};const{firstName:s,lastName:c}=i;let l,u=0,d=`<h1><span>${s}</span> <span>${c}</span></h1>`;const p=()=>{const e=d.slice(0,u+=1);if(e===d)return;const t=e.slice(-1);if("<"===t&&(l=!0),">"===t&&(l=!1),l)return p();"."===t?(setTimeout(p,50),i.targets.typedIntroElement.classList.add("typing")):setTimeout(p,50),i.targets.typedIntroElement.innerHTML=e};var f=p;const m=Array.from(document.querySelectorAll(".button")),g=Array.from(document.querySelectorAll(".sidebar-link"));function b(e){return e.forEach(e=>{e.addEventListener("click",h)})}function h(e){e.preventDefault();const t=this.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}b(m),b(g);a(0);Array.from(i.targets.sideBarButton).forEach(e=>{e.classList.add("animate__animated"),e.classList.add("animate__backInDown")}),f(),i.init()}]);