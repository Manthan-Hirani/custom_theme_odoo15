var lastScrollTop;
nav = document.getElementById('nav');
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        nav.style.top = '-90px';
    }
    else {
        nav.style.top = '0px';
    }
    lastScrollTop = scrollTop;

});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}