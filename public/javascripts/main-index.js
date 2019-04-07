import {checkregister,checklogin,checkloginname} from './validateUser.js';
import openboxmain from './openbox.js';
const user = $('.hidenlogin').text();
$('.loginbutton').text('您好!' + user);
checkregister();
openboxmain('loginbutton', 'login');
openboxmain('registerbutton', 'register');
checklogin();
checkloginname();
