---

title: 意思意思NIO   
description: 通过netty自建http服务器...   
categories: blog   
---

####NIO和BIO    
多路IO复用    



##Reactor模式    
高性能IO的发展历程:单线程阻塞->多线程并发->事件驱动NIO
单线程阻塞：最大问题是无法并发，效率太低，当前请求没有处理完，后面的请求一直排队等待，通常是一个while循环，accept，有数据后执行，执行完成后执行while下一次循环    
多线程并发：一个连接一个线程，缺点是：资源要求太高，系统中创建线程是需要比较高的系统资源的，如果连接数太高，系统无法承受，而且，线程的反复创建-销毁也需要代价。
事件驱动NIO：reactor模型，当有事件触发时，才会调用处理器进行数据处理，一个线程调度大量事件给不同的handler，高并发。

###Reactor线程模型和生产消费模式
reactor和生产消费模式有点像，都是基于"变化"的处理模式。   
生产消费模式，一般是生产者将生产出来的消息存储到消息队列中，消费者冲消息队列中拿到消息进行异步处理；
生产消费模式主要解耦了生产者和消费者，能够解决生产者和消费者处理速度不一致的问题。

###Reactor模型详解    
Reactor和Handler两个组件：

（1）Reactor：负责响应IO事件，当检测到一个新的事件，将其发送给相应的Handler去处理；新的事件包含连接建立就绪、读就绪、写就绪等。

（2）Handler:将自身（handler）与事件绑定，负责事件的处理，完成channel的读入，完成处理业务逻辑后，负责将结果写出channel。



###Reactor与Netty    
服务端启动时创建了两个NioEventLoopGroup，一个是boss，一个是worker。实际上他们是两个独立的Reactor线程池，一个用于接收客户端的TCP连接，另一个用于处理Io相关的读写操作，或则执行系统的Task，定时Task。    
Boss线程池职责如下：
（1）接收客户端的连接，初始化Channel参数
（2）将链路状态变更时间通知给ChannelPipeline

worker线程池作用是：
（1）异步读取通信对端的数据报，发送读事件到ChannelPipeline
（2）异步发送消息到通信对端，调用ChannelPipeline的消息发送接口
（3）执行系统调用Task;
（4）执行定时任务Task；


