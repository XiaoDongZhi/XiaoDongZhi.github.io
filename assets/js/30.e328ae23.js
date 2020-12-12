(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{498:function(e,t,n){"use strict";n.r(t);var a=n(4),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("em",[e._v("声明：本博客欢迎转发，但请保留原作者信息! 内容系本人学习、研究和总结，如有雷同，实属荣幸！")])]),e._v(" "),n("p",[n("em",[e._v("新浪微博："),n("a",{attrs:{href:"http://weibo.com/u/1596536485/home?wvr=5",target:"_blank",rel:"noopener noreferrer"}},[e._v("@支支zHi小冬"),n("OutboundLink")],1)])]),e._v(" "),n("p",[n("em",[e._v("博客地址："),n("a",{attrs:{href:"http://xiaodongzhi.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://xiaodongzhi.github.io/"),n("OutboundLink")],1)])]),e._v(" "),n("p",[n("em",[e._v("联系邮箱：517341003@qq.com")])]),e._v(" "),n("p",[e._v("一、with语句解决什么问题?")]),e._v(" "),n("p",[e._v("常规写法：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('file = open("/tmp/foo.txt")\ntry:\n    data = file.read()\nfinally:\n    file.close()\n')])])]),n("p",[e._v("python with语句：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('with open("/tmp/foo.txt")\n as file:\n    data = file.read()\n')])])]),n("p",[e._v("with语句可以简洁的代替try...cath...finally写法")]),e._v(" "),n("p",[e._v("二、with如何工作\n#!/usr/bin/env\npython\n#\nwith_example01.py")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('class Sample:\n    def __enter__(self):\n        print "In __enter__()"\n        return "Foo"\n \n    def __exit__(self, type, value, trace):\n        print "In __exit__()"\n \n \ndef get_sample():\n    return Sample()\n \n \nwith\n get_sample() as sample:\nprint "sample:",\n sample\n')])])]),n("p",[e._v("紧跟with后面的语句被求值后，返回对象的__enter__()方法被调用。这个方法的返回值将被赋值给as后面的变量。当with后面的代码块全部被执行完之后，将调用前面返回对象的__exit__()方法。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("In __enter__()\nsample:\n Foo\nIn __exit__()")])])])])}),[],!1,null,null,null);t.default=_.exports}}]);