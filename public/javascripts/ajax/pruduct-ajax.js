export function addpruduct() {
    var targetUrl = $("#addpruductform").attr("action");
    var data = new FormData($("#addpruductform")[0]);
    $.ajax({
        type: 'post',
        url: targetUrl,
        cache: false,    //上传文件不需缓存
        processData: false, //需设置为false。因为data值是FormData对象，不需要对数据做处理
        contentType: false, //需设置为false。因为是FormData对象，且已经声明了属性enctype="multipart/form-data"
        data: data,
        dataType: 'json',
        success: function (data) {
            alert('success');
            $('.addbox').css({'display':'none'})
            $('.shade').css({'display':'none'})
            $('.pruduct-box').load("pruduct/pruductlist", function (responseTxt) {
                let rz = JSON.parse(JSON.stringify(responseTxt));
            });
        },
        error: function () {
            alert("请求失败")
        }
    })
}
export function getpruductList(){
    $('.pruduct-box').load("pruduct/pruductlist", function (responseTxt) {
        let rz = JSON.parse(JSON.stringify(responseTxt));
    });
}
export function delpruduct(id){
    $.ajax({
        type:'post',
        url:'pruduct/delpruduct',
        data:{id:id},
        cache:false,
        dataType:"json",
        success:function(data){
            if(data.success){
                alert("删除成功")
            }
               
        },
        error:function(){
            alert('删除失败')
        }
    })
}
export function editpruduct(){
    var targetUrl = $("#editpruductform").attr("action");
    var data = new FormData($("#editpruductform")[0]);
    $.ajax({
        type: 'post',
        url: targetUrl,
        cache: false,    //上传文件不需缓存
        processData: false, //需设置为false。因为data值是FormData对象，不需要对数据做处理
        contentType: false, //需设置为false。因为是FormData对象，且已经声明了属性enctype="multipart/form-data"
        data: data,
        dataType: 'json',
        success: function (data) {
            alert('success');
            $('.editbox').css({'display':'none'})
            $('.shade').css({'display':'none'})
            $('.pruduct-box').load("pruduct/pruductlist", function (responseTxt) {
                
            });
        },
        error: function () {
            alert("请求失败")
        }
    })
}