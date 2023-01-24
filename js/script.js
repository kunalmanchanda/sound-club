const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
 
btn.addEventListener('click', navToggle)



function navToggle() {
    btn.classList.toggle('open')
    btn.classList.toggle('flex')
    menu.classList.toggle('hidden')
}