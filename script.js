AOS.init({
    offset:200,
    delay: 200,
    duration: 1000,
    easing:"ease-in-out",
    once:"false",
    mirror :"false",
    anchorplacement :"top-bottom"
});

const navIconEl = document.querySelector(".nav_icon")
const navCloseEl = document.querySelector(".nav_icon_2")
const navList = document.querySelector(".nav-item")
const navbgOverLay = document.querySelector(".nav_bg_overlay")

const navOpen = () => {
    navList.classList.add('show')
    navbgOverLay.classList.add('active')
    document.body.style = ' visibility:visible; height:100vh ; width:100vw ; overflow:hidden;'
}

const navClose = () => {
    navList.classList.remove('show');
    navbgOverLay.classList.remove("active");
    document.body.style = 'visibility:visible ; height :initial ; width:100% ; ';
}
navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navbgOverLay.addEventListener('click', navClose);