import { projects } from "../data/projects.js";
import { isMobile } from "./util.js";
import {buildProjectDetailsWindow} from "../js/project-details-popup.js"
const hamburger = document.querySelector(".menu-button-container");
const menu = document.querySelector(".menu");
const logo = document.querySelector("#logo-placeholder");
const canceIcon = document.querySelector(".cancel-icon");
const menuIcon = document.querySelector(".menu-icon");
const projectDetailId = document.querySelector("#project-detail-id");



hamburger.addEventListener("click", () => {
  console.log("sssssssssssssss");
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  logo.classList.toggle("active");
  canceIcon.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

document.querySelectorAll(".menu .nav-link").forEach((item) =>
  item.addEventListener("click", () => {
    onCancel();
    console.log("xxxxxxxxxxxxxxxxxxx");
    console.log(buildProjectDetailsWindow())
    console.log("xxxxxxxxxxxxxxxxxxx");
  })
);
injectProjectSectionHML()
injectbuildProjectDetailsWindowHML()


document.querySelectorAll("section#recent-works .detail-button").forEach((item) =>
  item.addEventListener("click", (event) => {
    let project_id = event.target.parentNode.getElementsByTagName('span')[0].innerHTML,
    prroject= projects.find()
    console.log(event.target.parentNode.getElementsByTagName('span')[0].innerHTML)
    //console.log(document.querySelector(event.target.parentNode+" #project-detail-id-value"))
    projectDetailId.classList.toggle("active");
  })
);

const closeButton  = document.querySelector(".close");
closeButton.addEventListener("click", () => {
    console.log("WWWWWWWWWWWWIIIIIIIIIIIIIIIIIIIIII");
    projectDetailId.classList.remove("active");
});

function onCancel() {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
  logo.classList.remove("active");
  canceIcon.classList.remove("active");
  menuIcon.classList.remove("active");
}
function buildProjecstSection() {
  let projectsSection = "";
  projectsSection += `<h2 class="primary-header">
                            My Recent Works
                            <span id="indicator"></span>
                        </h2>
                        <ul class="works-cards">`;

 let projectsList=""
    
    for(let i=0;i<projects.length;i++){
        projectsList+=`<li class="card">
        <header class="card-header"></header>
        <div class="card-content">
        <span id="project-detail-id-value">${projects[i].id}</span>
          <h3 class="project-title">${projects[i].title}</h3>
          <p class="project-tags">
          <ul class="project-tags-list">`;
          let tech=""
          for (let j = 0; j < projects[i].technologies.length; j++) {
            tech+=`<li><button class="tag-button">${projects[i].technologies[j]}</button></li>`
           
          }
          projectsList+=tech
          projectsList+=`</ul></p>
          <button class="green-button detail-button">See Project</button>
        </div>
      </li>`
    }
    projectsSection+=projectsList
    return projectsSection
}

function injectProjectSectionHML(){
    document.getElementById('recent-works').insertAdjacentHTML('afterbegin', buildProjecstSection());
}

function injectbuildProjectDetailsWindowHML(){
    document.getElementById('project-detail-id').insertAdjacentHTML('afterbegin', buildProjectDetailsWindow());
}


