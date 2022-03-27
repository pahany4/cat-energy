var menuVisible = document.querySelector('nav');
var menuWrap = document.querySelector('.page-header__inner');
var screenSize = window.innerWidth;
var burgerHid = document.querySelector('.menu-icon');

function hideMenu() {
    if (screenSize < 768) {
        burgerHid.classList.remove('menu-icon_hid');
        menuVisible.classList.add('menu-hid');
        menuWrap.classList.add('open');
    }
}
hideMenu();
var clk = 0;

function menuOpen() {
    burgerHid.addEventListener('click',
        function (evt) {
            evt.preventDefault();
            this.classList.toggle('menu-icon_activ');
            if (clk % 2 == 0) {
                menuVisible.classList.remove('menu-hid');
                menuVisible.classList.add('menu-open');
                menuVisible.classList.remove('menu-close');
            } else {
                menuVisible.classList.remove('menu-open');
                menuVisible.classList.add('menu-close');
                menuVisible.classList.add('menu-hid')
            }
            clk++;
        }
    )
}
menuOpen();