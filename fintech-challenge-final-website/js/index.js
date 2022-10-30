import { speakers } from "../data/speakers.js";
import { isMobile } from "./util.js";
const hamburger = document.querySelector('.menu-button-container');
const menu = document.querySelector('#first-item');
const canceIcon = document.querySelector('#cancel-icon');
const menuIcon = document.querySelector('#menu-icon');

hamburger.addEventListener('click', (event) => {
     if(event.target.id==='menu-icon'){
        hamburger.classList.toggle('active');
        menu.classList.toggle('active'); 
        canceIcon.classList.toggle('active');
        menuIcon.classList.toggle('active');
    }else{
        onCancel()
    }
 
  });

  document.querySelectorAll('#first-item .nav-link').forEach((item) =>
  item.addEventListener('click', () => {
    onCancel();
    console.log('xxxxxxxxxxxxxxxxxxxqqqq');

    console.log('xxxxxxxxxxxxxxxxxxxqqqqq');
  })
);

const onCancel = () =>{
    hamburger.classList.remove('active');
    menu.classList.remove('active'); 
    canceIcon.classList.remove('active');
    menuIcon.classList.remove('active');
  }

const createCard = (item) => {
  return `<li class="card">
    <img class="photo" src=${item.image_link} alt="">
    <aside class="right">
        <h2 class="name">${item.speaker_name}</h2>
        <p class="title">
        ${item.speaker_title}
        </p>
        <span class="line"></span>
        <p class="bio">
        ${item.speaker_bio}
        </p>
    </aside>
  </li>`;
};

const generateNCard = (index) => {
  let str = "";
  for (let i = 0; i < index; i++) {
    str += createCard(speakers[i]);
  }
  return str;
};

const buildSpeakersSection = (index) => {
  let str = ` <h1>Featured Speakers</h1>
    <span class="speaker-bar"></span>
    <ul class="card-list">`;
  str += generateNCard(index);
  str += `<button class="see-more-btn">
    <span class="see-more">MORE</span>
    <img src="assets/images/arrow_down.png" alt="More" class="more_icon">
  </button>`;
  return str;
};
const injectSpeakersSectionIntoDOM = (index) => {
    let speakers = document.getElementById("speakers");
  if(speakers){
    speakers.insertAdjacentHTML("afterbegin", buildSpeakersSection(index));
  }

};

if (isMobile()) {
  injectSpeakersSectionIntoDOM(2);
} else {
  injectSpeakersSectionIntoDOM(6);
}

const moreSpeakerButton = document.querySelector(".see-more-btn");
const updateSpeakersSection = () => {
  let speakers = document.getElementById("speakers");
  if (speakers) {
    speakers.innerHTML = "";
    injectSpeakersSectionIntoDOM(6);
    moreSpeakerButton.classList.toggle("hidden");
  }
};
if(moreSpeakerButton){
    moreSpeakerButton.addEventListener("click", () => {
        updateSpeakersSection();
      });
}

