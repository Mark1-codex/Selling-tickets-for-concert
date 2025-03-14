import {getEventApi} from './js/api.js'
console.log(getEventApi)
const cardSpace = document.querySelector('.main-cards')
const modalAppear = document.querySelector('.overlay')
const closeModal = document.querySelector('.modal-close')
modalAppear.style.display = "none"
for (let i = 0; i < 40; i++) {
    cardSpace.innerHTML+=`
      <ul class="main-cards-card">
                    <img src="/images/print-photo.png" alt="" class="main-cards-card-pic">
                    <h3 class="main-cards-card-title">Eurovision 2021 finals!</h3>
                    <h4 class="main-cards-card-data">2021-05-13</h4>
                    <div class="main-cards-card-location">
                        <img src="/images/geo.svg" alt="" class="main-cards-card-location-image">
                        <h5 class="main-cards-card-location-content">Palace of Ukraine</h5>
                    </div>
                </ul>
    `
}
const card = document.querySelectorAll('.main-cards-card')
card.forEach(element => {
 element.addEventListener('click', () => {
    modalAppear.style.display = "flex"
 })    
})
closeModal.addEventListener('click', () => {
    modalAppear.style.display = "none"
})
document.addEventListener('keydown', (event) => {
    console.log(event.key)
    if(event.key == 'Escape'){
        modalAppear.style.display = "none"
    }
})
