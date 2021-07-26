function openMenu(){
    console.log('clicked')
    let menu = document.querySelector('nav>ul')
    menu.classList.add('mobile-menu')
}

let menuBtn = document.querySelector('.menu-icon')
menuBtn.addEventListener('click',openMenu)