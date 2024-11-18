let navs = document.querySelectorAll('.header__nav-item');
let button = document.querySelectorAll('.CTA__button, .main__button');
function goToView(e, id) {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}
function addEvent(item, scrollTo) {
    item.addEventListener('click', (e) => goToView(e, scrollTo))
}  
addEvent(navs[2], 'gifts');
addEvent(navs[3], 'footer');