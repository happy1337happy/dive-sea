import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
const app = createApp(App)
app.use(router)
app.mount('#app')



document.addEventListener('DOMContentLoaded', function() {
  const followButtons = document.querySelectorAll('.collector-wrapper .collector-wrapp .collector-right .coll-block-1 .coll-dudes .foll-btn');
  
  followButtons.forEach(button => {
      button.addEventListener('click', function() {
          if (this.textContent === 'Follow') {
              this.textContent = 'Unfollow';
              this.classList.add('following');
          } else {
              this.textContent = 'Follow';
              this.classList.remove('following');
          }
      });
  });
});

const boxes = Array.from(document.querySelectorAll(".box"));

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
  e.preventDefault();

  let currentBox = e.target.closest(".box");
  if (!currentBox) return; 

  let currentContent = currentBox.querySelector(".content");
  if (!currentContent) return; 

  currentBox.classList.toggle("active");

  if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px"; 
  } else {
    currentContent.style.maxHeight = 0; 
  }
}

// document.addEventListener('DOMContentLoaded', () => {
//   const collectionHeader = document.querySelector('.cont-collection-top');
//   const activityHeader = document.querySelector('.cont-activity-top');
//   const collectionBlock = document.querySelector('.cont-collection');
//   const activityBlock = document.querySelector('.cont-activity');

//   collectionHeader.addEventListener('click', () => {
//     if (collectionBlock.classList.contains('active')) return;
//     collectionBlock.classList.add('active');
//     activityBlock.classList.remove('active');
//     collectionHeader.classList.add('active');
//     activityHeader.classList.remove('active');
//   });

//   activityHeader.addEventListener('click', () => {
//     if (activityBlock.classList.contains('active')) return;
//     activityBlock.classList.add('active');
//     collectionBlock.classList.remove('active');
//     activityHeader.classList.add('active');
//     collectionHeader.classList.remove('active');
//   });
// });