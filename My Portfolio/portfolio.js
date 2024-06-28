'use strict';


// const menu = document.querySelector('.menu');
const about = document.querySelector('.about');
const experience = document.querySelector('.experience');
const contact = document.querySelector('.contact');
const overlay = document.querySelector('.overlay');

const btnsOpenAbout = document.querySelectorAll('.show-about');
const btnsOpenContact = document.querySelectorAll('.show-contact');
const btnsOpenExperience = document.querySelectorAll('.show-experience');

const btnCloseContact = document.querySelector('.close-contact');
const btnCloseAbout = document.querySelector('.close-about');
const btnCloseExperience = document.querySelector('.close-experience');

 //show menu buttons
//separating id to select different buttons values

const openAbout =  function() {
  about.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('about');
 };

 const openExperience =  function() {
  experience.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('experience');
  
 };

const openContact =  function() {
  contact.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('contact');
  
};


//  closing menu bar
const closeModal =  function(){

if(about !== 'hidden' || experience !==  'hidden' || contact !==  'hidden'){

  about.classList.add('hidden');
  experience.classList.add('hidden');
  contact.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log('close modal just clicked');

}};



for (let i = 0 ;i < btnsOpenAbout.length && btnsOpenExperience.length && btnsOpenContact.length  ;i++){
btnsOpenAbout[i].addEventListener('click', openAbout);
btnsOpenExperience[i].addEventListener('click', openExperience);
btnsOpenContact[i].addEventListener('click', openContact);
} 

//selecting id about,experience and contact with each function
document.querySelector('#about').addEventListener('click', openAbout) ;
document.querySelector('#experience').addEventListener('click', openExperience);
document.querySelector('#contact').addEventListener('click', openContact);
   


// btnCloseMenu.addEventListener('click', closeMenu );
   btnCloseAbout.addEventListener('click', closeModal );
   btnCloseExperience.addEventListener('click', closeModal );
   btnCloseContact.addEventListener('click', closeModal );
   overlay.addEventListener('click',closeModal);