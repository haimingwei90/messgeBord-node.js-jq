import openbox from './openbox.js';
const loginbuttondom = $('.loginbutton');
const registerbuttondom  = $('.registerbutton');
loginbuttondom.click(function () {
    openbox('login');
});
registerbuttondom.click(function () {
    openbox('register');
})
