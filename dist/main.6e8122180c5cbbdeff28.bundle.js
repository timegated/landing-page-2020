!function(t){var e={};function a(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e,a){},function(t,e,a){"use strict";a.r(e);a.p,a.p;var r={firstName:"Daniel",lastName:"Beccaria",area:"Philadelphia, PA",interests:["javascript","reactjs","nodejs"],projects:[{title:"WoW Class Tracker",summary:"App designed to help players keep track of their items",image:"../dist/images/classtrackerv2.JPG",github:"https://github.com/timegated/class-tracker",stack:["fab fa-react","fab fa-node-js","fas fa-database"],deployed:"https://wowclasstracker.com/",year:2020},{title:"Book Search",summary:"A mini-fullstack react application that searches for books",image:"../dist/images/booksearch.JPG",github:"https://github.com/timegated/react-books-search",stack:["fab fa-react","fab fa-node-js","fas fa-database"],deployed:"https://sleepy-bayou-19372.herokuapp.com/",year:2019},{title:"Calculator",summary:"Calculator project showcasing event delegation",image:"../dist/images/eventcalc.png",github:"https://github.com/timegated/event-delecalculator",stack:["fab fa-html5","fab fa-css3-alt"],deployed:"https://timegated.github.io/event-delecalculator/calc.html",year:2019},{title:"Shopping List",summary:"Learning tool for fullstack applications built with react and mongodb",image:"../dist/images/shlistjpg.png",github:"https://github.com/timegated/shopping-list-hooks",stack:["fab fa-react","fab fa-node-js","fas fa-database"],deployed:"https://dry-basin-38264.herokuapp.com/",year:2020}],targets:{projectElement:document.getElementById("work"),typedIntroElement:document.getElementById("typedIntro"),navBar:document.querySelector(".navbar"),sideBarButton:document.querySelectorAll("#button")},generateProjects(){this.targets.projectElement.innerHTML=`\n      ${this.projects.map((function(t){return`\n          <section>\n             <a href="${t.github}" class="image"><img src="${t.image}" alt="${t.title}" data-position="center center"></a>\n            <div class="content">\n              <div class="inner">\n                <h2>${t.title}</h2>\n                <p>${t.summary}</p>\n                    ${t.stack?t.stack.map(t=>`\n                  <i class="icon ${t}"></i>\n                 `).join(""):console.log("nothing here yet")}\n                <a href="${t.github}" target="_blank" class="button large">Github</a>\n                <a href="${t.deployed}" target="_blank" class="button primary large">Live</a>\n              </div>\n          </section>\n          `})).join("")}\n      `},init(){this.generateProjects()}};const{firstName:n,lastName:o}=r;let s,i=0,c=`<h1><span>${n}</span> <span>${o}</span></h1>`;const l=()=>{const t=c.slice(0,i+=1);if(t===c)return;const e=t.slice(-1);if("<"===e&&(s=!0),">"===e&&(s=!1),s)return l();"."===e?(setTimeout(l,50),r.targets.typedIntroElement.classList.add("typing")):setTimeout(l,50),r.targets.typedIntroElement.innerHTML=t};var u=l;const d=Array.from(document.querySelectorAll(".button")),p=Array.from(document.querySelectorAll(".sidebar-link"));function m(t){return t.forEach(t=>{t.addEventListener("click",f)})}function f(t){t.preventDefault();const e=this.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth"})}m(d),m(p);a(0);Array.from(r.targets.sideBarButton).forEach(t=>{t.classList.add("animate__animated"),t.classList.add("animate__backInDown")}),u(),r.init()}]);