// api - start
const getEventApi = async (keyword) => {
    if (keyword === "" || keyword === undefined || keyword === null){
        try {
            const result = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=1`).then((data) => {
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

 function createMarkup(arr) {
    console.log(arr)
    const html = arr.events.map((item) => {
        console.log(item)
        return `<div class="main-cards-card">
                     <div class="main__style-div"></div>
                     <img class="main-cards-card-pic" src="${item.images[0].url}" alt="poster"/>
                     <h2 class="main-cards-card-title">${item.name}</h2>
<span class="main-cards-card-location-content">${item.locale}</span>
                   </div>`;
    }).join("");

    list.innerHTML = html;
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
const modalAppear = document.querySelector('.overlay')
const closeModal = document.querySelector('.modal-close')
modalAppear.style.display = "none"
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
