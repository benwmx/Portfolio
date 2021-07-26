function openMenu(){
    let menu = document.querySelector('nav>ul');
    let menuItem = Array.from(document.querySelectorAll('nav > ul li'));
    for(let item = 0 ; item < menuItem.length ;  item ++){
        menuItem[item].classList.add('menu-item');
    }
    menu.classList.add('mobile-menu');
    document.querySelector('nav > img').classList.toggle('visible');
    document.querySelector('nav > div').classList.toggle('visible');

}

let menuBtn = document.querySelector('.menu-icon');
menuBtn.addEventListener('click',openMenu);

let closeBtn= document.querySelector(".closing-btn");
closeBtn.addEventListener('click',closeMenu);

function closeMenu(){
    let menu = document.querySelector('nav>ul');
    let menuItem = Array.from(document.querySelectorAll('nav > ul li'));
    for(let item = 0 ; item < menuItem.length ;  item ++){
        menuItem[item].classList.remove('menu-item');
    }
    menu.classList.remove('mobile-menu');
    document.querySelector('nav > img').classList.toggle('visible');
    document.querySelector('nav > div').classList.toggle('visible');
    
}

let linkClick = Array.from(document.querySelectorAll('nav>ul li'));
for(let item = 0 ; item < linkClick.length ;  item ++){
        linkClick[item].addEventListener('click',closeMenu);
    }