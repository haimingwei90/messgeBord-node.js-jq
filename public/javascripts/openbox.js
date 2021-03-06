export default function openboxmain(bt,boxclassname) {
    function openbox(openclassname) {
        const shadedom = $('.shade');
        const logindom = $('.' + openclassname);
        const bwidth = $(document.body).outerWidth(true);
        const bheight = $(document).outerHeight(true);
        const cheight = $(window).height();
        const lwidth = logindom.width();
        const lheight = logindom.height();
        const ltop = (cheight - lheight) / 2;
        const left = (bwidth - lwidth) / 2;
        shadedom.css({
            'display': 'block',
            'width': bwidth + 'px',
            'height': bheight + 'px'
        })
        logindom.css({
            'display': 'block',
            'left': left,
            'top': ltop,
        })
        shadedom.click(function () {
            close();
        });

        //隐藏遮罩层和登录框
        function close() {
            shadedom.css('display', 'none');
            logindom.css('display', 'none');
        }
    }
    const publicbuttondom = $('.'+bt);
  
    publicbuttondom.click(function () {
        openbox(boxclassname);
    });

}

