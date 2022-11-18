const TabItems = document.querySelectorAll('.tabheader__item')
const TabContent = document.querySelectorAll('.tabcontent')
const TabMain = document.querySelector('.tabheader__items')
const hideContent = () => {
    TabContent.forEach( (item) => {
        item.classList.add('hide')
        item.classList.remove('show')
    })
    TabItems.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}


const showContent = (i = 0) => {
    TabContent[i].classList.add('show')
    TabContent[i].classList.remove('hide')
        TabItems[i].classList.add('tabheader__item_active')
}
hideContent()
showContent()

TabMain.addEventListener('click', (event) => {
    const target = event.target
    if (!target.classList.contains('tabheader__item_active')) {
        TabItems.forEach((tab,idx) => {
            if (target === tab) {
                hideContent()
                showContent(idx)
            }
        })
    }
})



const Click = document.querySelector('.btn_white')
const Mod = document.querySelector('.modal')
const Close = document.querySelector('.modal__close')






Click.addEventListener('click',() => {
    Mod.classList.add('show')
    Mod.classList.remove('hide')
})
Close.addEventListener('click',() => {
    Mod.classList.remove('show')
    Mod.classList.add('hide')
})

