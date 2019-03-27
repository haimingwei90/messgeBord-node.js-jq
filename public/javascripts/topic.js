import openboxmain from './topic-openbox.js';
const user = $('.hidenlogin').text();
$('.loginbutton').text('您好!' + user);
openboxmain();