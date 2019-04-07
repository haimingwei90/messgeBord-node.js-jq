import openboxmain from './openbox.js';
import { publish, gettopicList} from './ajax/topic-ajax.js';
 const user = $('.hidenlogin').text();
$('.loginbutton').text('您好!' + user);
openboxmain('publicbutton','topicbox');
openboxmain('loginbutton', 'login');
openboxmain('registerbutton', 'register');
$('#topicform').submit(function(event){
    event.preventDefault();
    publish();
})
gettopicList();

