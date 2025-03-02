const cardSpace = document.querySelector('.main-cards')
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