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
        },
        error: function () {
            alert("请求失败")
        }
    })
}