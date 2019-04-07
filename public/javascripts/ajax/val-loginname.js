export default  function isExistLoginname(){
    let data = $('#registerform input:eq(0)').val();
    $.ajax({
        type: "get",
        url: "/isLoginname",
        data: {id:data},
        dataType: "json",
        success: function (response) {
            let rz = JSON.parse(JSON.stringify(response));
            console.log(rz);
            if(rz.success){
                $('#registerform .view-info').css({
                  'display':'block'
                }) 
              }else{
                $('#registerform .view-info').css({
                  'display':'none'
                }) 
              }
        }
    });
}
