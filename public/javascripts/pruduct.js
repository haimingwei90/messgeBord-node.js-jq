import openboxmain from './openbox.js';
import { addpruduct, getpruductList,editpruduct,delpruduct } from './ajax/pruduct-ajax.js';
const user = $('.hidenlogin').text();
$('.loginbutton').text('您好!' + user);
//获取产品列表
getpruductList();
//添加框弹出
openboxmain('addpruductbt', 'addbox');
openboxmain('loginbutton', 'login');
openboxmain('registerbutton', 'register');
//添加
$('#addpruductform').submit(function (event) {
    event.preventDefault();
    addpruduct();//ajax
});
$('.pruduct').css({
    'color': 'red'
})
//删除
    $('body').on('click','.pruduct-dele',function(){
        let id = $(this).attr('activeid');
        delpruduct(id);
        getpruductList(); 
    })
// 编辑
$("body").on('click', '.pruduct-edit', function () {
    let id = $(this).attr('activeid');
    $('#activepruductid').val(id);
    let openclassname = 'editbox';
    openbox(openclassname);
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
    $('#editpruductform').submit(function (event) {
        event.preventDefault();
        editpruduct();//ajax
    });
});


