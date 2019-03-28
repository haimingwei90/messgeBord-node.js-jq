export function publish(){
    $.post('topic/publish', $("#topicform").serialize(), function (data) {
        let rz = JSON.parse(JSON.stringify(data));
        if(rz.sucess){
            alert("发布成功！");
            $('.topicbox').css({'display':'none'})
            $('.shade').css({'display':'none'})
        }
    },)
}
export function gettopicList(){
        console.log("gettopiclist ajax");
        
        $(".topic").load("topic/topiclist", function (responseTxt, statusTxt, xhr) {
            let rz = JSON.parse(JSON.stringify(responseTxt));
            console.log(rz);
            
        });

}