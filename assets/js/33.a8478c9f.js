(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{502:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("em",[t._v("声明：本博客欢迎转发，但请保留原作者信息! 内容系本人学习、研究和总结，如有雷同，实属荣幸！")])]),t._v(" "),a("p",[a("em",[t._v("新浪微博："),a("a",{attrs:{href:"http://weibo.com/u/1596536485/home?wvr=5",target:"_blank",rel:"noopener noreferrer"}},[t._v("@支支zHi小冬"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("em",[t._v("博客地址："),a("a",{attrs:{href:"http://xiaodongzhi.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://xiaodongzhi.github.io/"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("em",[t._v("联系邮箱：517341003@qq.com")])]),t._v(" "),a("p",[t._v("openstack版本信息：ocata")]),t._v(" "),a("h1",{attrs:{id:"cinder架构简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cinder架构简述"}},[t._v("#")]),t._v(" Cinder架构简述")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://i.imgur.com/sx59Ma3.jpg",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("Cinder API：提供cinder的REST API，通常部署在控制节点。")]),t._v(" "),a("li",[t._v("Cinder Scheduler：负责Cinder请求调度，与nova-scheduler类似，根据请求中的调度条件，如volume-type，size等选择合适的后端存储来进行块存储管理。")]),t._v(" "),a("li",[t._v("Cinder-volume：通过cinder-driver与各个厂商的存储设备进行交互，来进行块存储操作。")])]),t._v(" "),a("h1",{attrs:{id:"cinder创建磁盘流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cinder创建磁盘流程图"}},[t._v("#")]),t._v(" Cinder创建磁盘流程图")]),t._v(" "),a("h2",{attrs:{id:"cinder-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cinder-api"}},[t._v("#")]),t._v(" Cinder API")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://i.imgur.com/dmjYgMK.jpg",alt:""}}),t._v("\n重点讲下api中的几个task：")]),t._v(" "),a("p",[t._v("ExtractVolumeRequestTask：")]),t._v(" "),a("p",[t._v("1、参数校验，包含镜像创建卷时，卷属性与磁盘属性是否冲突，如磁盘容量小于镜像大小。\n2、获取availability_zone信息，创建时指定>snapshot>source_volume>default_availability_zone")]),t._v(" "),a("p",[t._v("QuotaReserveTask：")]),t._v(" "),a("p",[t._v("预留Quota信息\n检查cinder的配额，是否有足够配额用以创建磁盘。如果够，会更新quota信息减一。")]),t._v(" "),a("p",[t._v("EntryCreateTask：")]),t._v(" "),a("p",[t._v("数据库中创建volume信息。")]),t._v(" "),a("p",[t._v("QuotaCommitTask：")]),t._v(" "),a("p",[t._v("更新Quota信息到数据库")]),t._v(" "),a("p",[t._v("VolumeCastTask：")]),t._v(" "),a("p",[t._v("1、创建磁盘信息任务。从请求信息中获取host（就是创建卷的后端存储信息）。snapshot>source_volid>source_replicaid\n2、如果从请求中获取到host信息，则直接调用cinder-volume的rpc接口在该host上创建卷\n3、如果请求中未获取到host信息，则调用cinder-scheduler的rpc接口创建volume。")]),t._v(" "),a("h2",{attrs:{id:"cinder-scheduler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cinder-scheduler"}},[t._v("#")]),t._v(" Cinder Scheduler")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://i.imgur.com/JOMsp7i.jpg",alt:""}})]),t._v(" "),a("p",[t._v("主要简单描述下scheduler中的几个Task：")]),t._v(" "),a("p",[t._v("ExtractSchedulerSpecTask：")]),t._v(" "),a("p",[t._v("获取用于调度的信息：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'volume_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" volume"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snapshot_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" snapshot_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" image_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'volume_properties'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'size'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("as_int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("volume"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quiet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'availability_zone'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" volume"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("availability_zone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'volume_type_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" volume_type_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'volume_type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vol_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("ScheduleCreateVolumeTask：")]),t._v(" "),a("p",[t._v("1、根据调度信息信息调度host（后端存储）\n1.1、查询符合条件的host\n1.2、weigh host\n1.3、选取最合适的主机\n2、在选择的host上创建磁盘")]),t._v(" "),a("h2",{attrs:{id:"cinder-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cinder-volume"}},[t._v("#")]),t._v(" Cinder Volume")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://i.imgur.com/McVNxLJ.png",alt:""}})]),t._v(" "),a("p",[t._v("cinder volume的处理机制与cinder api 和schedule一致，均通过任务队列完成。类似于工作流。")]),t._v(" "),a("p",[t._v("linear_flow相关介绍，参考"),a("a",{attrs:{href:"http://stacker.top/blog/2016/12/06/python-taskflow/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("顺序执行：")]),t._v(" "),a("p",[t._v("1、ExtractVolumeRefTask")]),t._v(" "),a("p",[t._v("2、OnFailureRescheduleTask")]),t._v(" "),a("p",[t._v("3、ExtractVolumeSpecTask")]),t._v(" "),a("p",[t._v("4、NotifyVolumeActionTask")]),t._v(" "),a("p",[t._v("创建卷的主业务任务，详解见"),a("a",{attrs:{href:"http://stacker.top/blog/2016/12/02/Cinder%E4%BB%A3%E7%A0%81%E8%B5%B0%E8%AF%BB%E7%B3%BB%E5%88%97%E4%B8%80-%E5%88%9B%E5%BB%BA%E7%A3%81%E7%9B%98-%E4%BA%8C-cinder-volume/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下一章"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("5、CreateVolumeFromSpecTask")]),t._v(" "),a("p",[t._v("6、CreateVolumeOnFinishTask")])])}),[],!1,null,null,null);s.default=e.exports}}]);