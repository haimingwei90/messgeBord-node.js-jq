ui
    首页 
        登录  注册  用户信息  注销
        产品轮播  
        文章摘要
    产品
        分类 搜索  
        产品   
            产品名  产品图  产品价格  简介
            管理员
            添加产品 编辑 更改 删除
    留言板
        文章 
            作者 发布时间  回复  
        发布
    后台   
        用户列表  拉黑 
application
    user    login
            register
    topic  
           ui初始化 create delete update 
    pruduct
           ui产品的初始化  add  delete update   

controller
    User
        data  id loginname password role 
        createUser
        deleteUser
        updateUser
    Product
        data  id name  desc  imgurl  price 
        
        add(pruduct) 
        delete(pruduct)
        change(pruduct)
    Topic 
        data: title content imgurl id num messages
        publish(topic) 
        delete(topic)
        change(topic)
    Message
        props: content id id2
        createMess(userid )
