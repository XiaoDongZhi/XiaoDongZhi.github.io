---

title: git常用操作备忘
categories: blog
---
*声明：本博客欢迎转发，但请保留原作者信息! 内容系本人学习、研究和总结，如有雷同，实属荣幸！*
 
*新浪微博：[@支支zHi小冬](http://weibo.com/u/1596536485/home?wvr=5)*

*博客地址：[http://xiaodongzhi.github.io/](http://xiaodongzhi.github.io/)*

*联系邮箱：517341003@qq.com*

 


## 一、覆盖更新本地代码 ##
    
    git fetch --all
    
    git reset --hard origin/master



## 二、git push到gerrit上 ##

    git push origin HEAD:refs/for/br_xxx_Master


## 三、git 添加远程仓库到本地    
    git remote add remoteGit ssh://git@xxxxx.git    

查询远程库的结果
    git remote -v

