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
    
    文章 
            作者 发布时间  回复  
            发布
    留言板
            
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
        data:  id loginname password role date
        createUser
        deleteUser
        updateUser
    Product
        data:  id name  desc  imgurl  price 
        
        add(pruduct) 
        delete(pruduct)
        change(pruduct)
    Topic 
        data: title content imgurl id hidden votes              messages date
        publish(topic) 
        delete(topic)
        change(topic)
    Message
        props: content id id2
        createMess(userid )
