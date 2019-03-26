export default function openbox(openclassname){

    const shadedom = $('.shade');
    const logindom = $('.'+openclassname);
    

    const bwidth = $(document.body).outerWidth(true);
    const bheight = $(document.body).outerHeight(true);
    const cheight = $(window).height();
    console.log(cheight);

    const lwidth = logindom.width();
    const lheight = logindom.height();

    const ltop = (cheight - lheight) / 2;
    const left = (bwidth - lwidth) / 2;
    console.log(ltop, left);
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