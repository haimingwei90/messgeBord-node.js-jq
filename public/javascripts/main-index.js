import {checkregister,checklogin} from './validateUser.js';
import openboxmain from './openbox-index.js';
const user = $('.hidenlogin').text();
$('.loginbutton').text('您好!' + user);
checkregister();
openboxmain();
checklogin();
