function openMenu(){
    let menu = document.querySelector('nav>ul');
    let menuItem = Array.from(document.querySelectorAll('nav > ul li'));
    for(let item = 0 ; item < menuItem.length ;  item ++){
        menuItem[item].classList.add('menu-item');
    }
    menu.classList.add('mobile-menu');
    document.querySelector('nav > img').classList.toggle('visible');
    document.querySelector('nav > p').classList.toggle('visible');

}

let menuBtn = document.querySelector('.menu-icon');
menuBtn.addEventListener('click',openMenu);