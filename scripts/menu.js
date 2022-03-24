const close = document.querySelector('.close-icon')
const menu = document.querySelector('.overlay-menu')
const menuIcon = document.querySelector('.menu-icon')

menuIcon.onclick = () => {
    menu.classList.toggle('active')
}

close.onclick = () =>{
    menu.classList.toggle('active')
} 
