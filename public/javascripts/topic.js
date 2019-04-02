import openboxmain from './topic-openbox.js';
import { publish, gettopicList} from './ajax/topic-ajax.js';
 const user = $('.hidenlogin').text();
$('.loginbutton').text('您好!' + user);
openboxmain();
$('#topicform').submit(function(event){
    event.preventDefault();
    publish();
})
$('.findtopicbt').click(function(){
    gettopicList();
})

