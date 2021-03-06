---

title: NAT网关
categories: blog
description: 玩玩NAT网关
---

一般VPC内，均为服务器，包括WEB服务器，DB服务器等:  
内部服务器存在可访问外网的诉求，但是一般只有WEB服务器暴露对公网可访问的IP或者域名。

本文重点验证下内网访问外网的方案：
测试平台：华为云(https://www.huaweicloud.com/)

虚拟机绑定IP  
一、创建一台虚拟机，不绑定弹性IP。  
在虚拟机内ping baidu.com       --------不通  
二、创建一台虚拟机，绑定弹性IP。  
在虚拟机内ping baidu.com       --------通  

发散：弹性IP是收费资源，并且带宽并不便宜；故不可能每台服务器绑定一个弹性IP，用于内网访问外网


为VPC配置NAT网关：  
一个VPC只能配置一个Nat网关  
一个NAT网关只能绑定一个弹性IP；  


看下NAT网关的技术属性：  
一、基础属性  
1、VPC  
2、子网  
3、规格（连接数）  
二、规则  
1、SNAT  

![](https://github.com/XiaoDongZhi/XiaoDongZhi.github.io/blob/master/images/pubcloud/natsnat.jpg?raw=true)  

   关键属性：  
   弹性IP：可访问外网，外网可访问的公网IP  
   子网：VPC子网内部CIDR  
   一个子网配置一个弹性IP，效果是该子网内所有私有IP的节点，可通过该SNAT规则通过弹性IP访问公网。  
   再简单说下SNAT，即为源地址转换，内网访问外网的时候，目的地址是外网IP，原地址是私网地址；经过NAT网关时，SNAT会讲原地址修改为弹性IP访问外网。  
   外网响应数据包返回时，即目的地址是NAT网关的弹性IP，源地址为外网IP。经过NAT网关时，NAT网关会将目的地址的弹性IP地址转换为虚拟机私网IP，转发给内网IP；  

   验证结果：该子网内所有ECS可以访问公网，公网不能访问私网  
2、DNAT  

![](https://github.com/XiaoDongZhi/XiaoDongZhi.github.io/blob/master/images/pubcloud/natdnat.jpg?raw=true)

   关键属性：  
   弹性IP：与公网互访的IP  
   私网IP：VPC内私网IP地址  
   公网端口：通过弹性IP访问的时候，使用的端口  
   私网端口：映射到VPC内对应私网IP的端口  
   协议：TCP/UDP  
   
   DNAT和子网没关系，只跟IP端口有关系  
   可以这样理解，弹性IP+65535个端口  即可组合成65535个DNAT规则，每一条规则即弹性IP：端口-》私网IP：端口；  
   弹性IP不变，端口可变并且唯一，多条DNAT规则公网端口不可重复；  
   NAT网关中私网IP：端口组合不重复  

   验证结果：  
   配置：公网IP：22端口<->私网IP：22端口  
   通过putty使用ssh协议访问公网IP：22端口即可成功登陆到ECS后台。  


另外SNAT中的公网IP和DNAT的公网IP不能是一个公网IP



