const close = document.getElementsByID('close');
const open = document.getElementsByID('.open');
const container = document.querySelector('.container');



open.addEventListener('click', ()=>{
    container.classList.add('show-nav');
});

close.addEventListener('click', ()=>{
    container.classList.remove('show-nav');
});