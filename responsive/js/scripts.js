var e, responsiveSite = {

    init: function() {
        e = this.elements;
        this.bindUIevents();
    },

    elements: {
        menu: document.getElementById('menu'),
        menuBtn: document.getElementById('menuBtn'),
        mainImg: document.querySelectorAll('.main-img'),
        subImg: document.querySelectorAll('.sub-img')
    },

    bindUIevents: function() {
        e.menuBtn.addEventListener('click', function() {
        	this.classList.toggle('open');
            menu.classList.toggle('collapsed');
        });

        (function imageSwap() {
            for (var i = 0; i < e.subImg.length; i++) {
                e.subImg[i].addEventListener('click', function() {
                    var main = e.mainImg[0].src;
                    var mainTemp = [];
                    var sub = [];

                    for (var i = 0; i < this.children.length; i++) {
                        sub.push(this.children[i]);
                        mainTemp.push(main.substr(0, main.indexOf('-')) + sub[i].src.substr(sub[i].src.indexOf('-'), sub[i].src.length));
                    }

                    main = sub[0].src.substr(0, sub[0].src.indexOf('-')) + main.substr(main.indexOf('-'), main.length);
                    e.mainImg[0].src = main;

                    for (var i = 0; i < this.children.length; i++) {
                        this.children[i].src = mainTemp[i];
                    }
                });
            }
        })();

    }
};

(function() {
    responsiveSite.init();
})();
