// api - start
let impotantPage = 1
const pagination = document.querySelectorAll('.footer-pagination-page')
pagination.forEach(function(element,index,array){
    element.addEventListener('click',function(){
        pagination.forEach(function(element){
            if(element.classList.contains('active-page')){
                element.classList.remove('active-page')
            }
        })
        impotantPage = Number(element.textContent)
        getEventApi().then((data) => {
            createMarkup(data._embedded)
        });
        element.classList.add('active-page')
    })
})
console.log(impotantPage)

const getEventApi = async (keyword) => {
    if (keyword === "" || keyword === undefined || keyword === null){
        try {
            const result = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=${impotantPage}`).then((data) => {
                return data.json();
            });
            return result;
        } catch (error) {
            return error;
        }
    } else {
        try {
            const result = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=1&keyword=${keyword}`).then((data) => {
                return data.json();
            });
            return result;
        } catch (error) {
            return error;
        }
    }
};
// api - end
getEventApi()
getEventApi().then((data) => {
    createMarkup(data._embedded)
});
// show card - start
const list = document.querySelector(".main");
let cards 
 async function createMarkup(arr) {
    console.log(arr)
    const html = await arr.events.map((item) => {
        console.log(item)
        return `<div class="main-cards-card">
                     <img class="main-cards-card-pic" src="${item.images[0].url}" alt="poster"/>
                     <h2 class="main-cards-card-title">${item.name}</h2>
<span class="main-cards-card-location-content">${item.locale}</span>
                   </div>`;
    }).join("");
    

    list.innerHTML = html;
    cards = document.querySelectorAll('.main-cards-card')
  
const modalAppear = document.querySelector('.overlay')
const closeModal = document.querySelector('.modal-close')
const cardPic = document.querySelector('.main-cards-card-pic')
const modalPic = document.querySelector('.modal-info-poster')
const modalLogo = document.querySelector('.modal-logo')
modalAppear.style.display = "none"
cards.forEach(element => {
 element.addEventListener('click', () => {
    let poster = element.firstElementChild.src
    modalPic.src = poster
    cardPic.src = poster
    modalLogo.src = poster
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
console.log(cards)
}
function searcPost() {
    const keyWord = searcInput.value;

    getEventApi(keyWord).then((data) => {
        createMarkup(data._embedded)
    });
}
const searcInput = document.querySelector(".header-search-ticket");

searcInput.addEventListener("input", _.debounce(() => {
    searcPost()
}, 500));


// enter input - end



// const cardSpace = document.querySelector('.main-cards')

