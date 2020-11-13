if (bodyWidth < 768) {
    (function () {
        /**
         *  burger button
         */
        var burgerHid = document.querySelector('.menu-icon');
        /**
         * nav ul list 
         */
        var mainNavList = document.querySelector('.main-nav__list');
        /**
         * define the height of the menu.
         */
        var mainNavListHeight = mainNavList.clientHeight;
        /**
         * show burger button if loaded with js.
         */
        function showBurger() {
            burgerHid.classList.remove('menu-hid')
        }
        showBurger();
        /**
         * hide the menu.
         */
        function hideMenu() {
            mainNavList.style.marginTop = - mainNavListHeight + 'px'
        }
        hideMenu();

        /**
         * toggle menu
         */
        function toggleMenu() {
            var clk = 0; //count clicks
            burgerHid.addEventListener('click',
                function (evt) {
                    evt.preventDefault();
                    this.classList.toggle('menu-icon__activ');
                    mainNavList.style.transition = "0.3s";
                    if (clk % 2 !== 0) {
                        mainNavList.style.marginTop = - mainNavListHeight + 'px'

                    } else {
                        mainNavList.style.marginTop = 0
                    }
                    clk++;
                }
            )
        }
        toggleMenu()
    })()
};
