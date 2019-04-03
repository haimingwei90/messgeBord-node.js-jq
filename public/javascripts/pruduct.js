import openboxmain from './openbox.js';
import {addpruduct,getpruductList} from './ajax/pruduct-ajax.js';
const user = $('.hidenlogin').text();
$('.loginbutton').text('您好!' + user);
openboxmain('addpruductbt','addbox');
$('#addpruductform').submit(function(event){
    event.preventDefault();
    addpruduct();//ajax
})
getpruductList();

