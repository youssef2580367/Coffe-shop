let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}




let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}



window.onscroll = () => {
    navbar.classList.remove('.active');
    search.classList.remove('active');
}










let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
        header.classList.toggle('shadow', window.scrollY > 0);
});








const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }
    else
    {
        body.style.background = 'black';
        body.style.color = '#bc9667';
        body.style.transition = '2s';
    }

});







   