if (progress) {
    (function () {
        /**
         * buttons and range
         */
        var btnProgress = progress.querySelectorAll('.example__progress-button');
        var btnProgressToggle = progress.querySelector('.example__progress-toggle');
        var progressRange = progress.querySelector('.example__range');
        /**
         * container with pictures before and after
         */
        var progressWrap = progress.querySelector('.example__progress-wrap');
        /**
         * container before
         */
        var progressImgBefore = progress.querySelector('.example__progress-img-before');
        /**
         * container after
         */
        var progressImgAfter = progress.querySelector('.example__progress-img-after');
        /**
         * pointer
         */
        var pointer = progress.querySelector('.example__progress-toggle div');

        if (bodyWidth < 768) {
            function toggleImg() {
                btnProgress[0].addEventListener('click',
                    function (evt) {
                        evt.preventDefault();
                        progressWrap.classList.remove('example__progress-wrap_after');
                        pointer.classList.remove('pointer_after')
                    }
                )

                btnProgress[1].addEventListener('click',
                    function (evt) {
                        evt.preventDefault();
                        progressWrap.classList.add('example__progress-wrap_after');
                        pointer.classList.add('pointer_after')
                    }
                )

                btnProgressToggle.addEventListener('click',
                    function (evt) {
                        evt.preventDefault();
                        progressWrap.classList.toggle('example__progress-wrap_after');
                        pointer.classList.toggle('pointer_after')
                    }
                )

            } toggleImg()
        } else {
            function resizeImg() {
                btnProgress[0].addEventListener('click',
                    function (evt) {
                        evt.preventDefault();
                        progressRange.value = 0;
                        progressImgBefore.style.width = 100 + '%';
                        progressImgAfter.style.width = 0;
                    }
                )

                btnProgress[1].addEventListener('click',
                    function (evt) {
                        evt.preventDefault();
                        progressRange.value = 100;
                        progressImgBefore.style.width = 0;
                        progressImgAfter.style.width = 100 + '%';
                    }
                )
                /**
                 * for ie
                 */
                progressRange.addEventListener('change',
                    function (evt) {
                        evt.preventDefault();
                        progressImgBefore.style.width = (100 - progressRange.value) + '%';
                        progressImgAfter.style.width = progressRange.value + '%';
                    }

                )
                /**
                 * other browsers
                 */
                progressRange.addEventListener('input',
                    function (evt) {
                        evt.preventDefault();
                        progressImgBefore.style.width = (100 - progressRange.value) + '%';
                        progressImgAfter.style.width = progressRange.value + '%';
                    }

                )
            }
            resizeImg()
        }
    })()
}