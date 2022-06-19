(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{436:function(t,s,a){"use strict";a.r(s);var n=a(62),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"visual-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio"}},[t._v("#")]),t._v(" Visual Studio")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#安装"}},[t._v("安装")])]),a("li",[a("a",{attrs:{href:"#开始"}},[t._v("开始")])]),a("li",[a("a",{attrs:{href:"#测试"}},[t._v("测试")])])])]),a("p"),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("由于我们要使用汇编，用其他的汇编IDE软件感觉也不太好调试啥的，\n而且之后我们要正式编写辅助之类的,还会用到c++ 所以还是直接入手\nvisual studio")])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("在官网下载visual studio\n地址:"),a("a",{attrs:{href:"https://visualstudio.microsoft.com/zh-hans/vs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://visualstudio.microsoft.com/zh-hans/vs/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("visual studio c++对应文档:"),a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/cpp/cpp/?view=msvc-170",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.microsoft.com/zh-cn/cpp/cpp/?view=msvc-170"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("安装途中可能会出现网络失败,到时候查下ip 改下host文件")])]),t._v(" "),a("p",[t._v("安装好后,按照下面的图做出一部分选项:\n"),a("img",{attrs:{src:"/visualInstall1.png",alt:"img.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/visualInstall2.png",alt:"img.png"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("虽然砸门不是专门讲c++ 但总归会设计到 ,\nc++真有兴趣的可以好好看文档,其实我也是入个门\n东西真的蛮多的,感觉还是入个门就行")])]),t._v(" "),a("h2",{attrs:{id:"开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),a("p",[t._v("新建c++项目选择控制台\n"),a("img",{attrs:{src:"/img.png",alt:"img.png"}})]),t._v(" "),a("p",[t._v("一切从hello Word开始\n"),a("img",{attrs:{src:"/img_1.png",alt:"img.png"}})]),t._v(" "),a("p",[t._v("运行\n"),a("img",{attrs:{src:"/img_2.png",alt:"img.png"}})]),t._v(" "),a("p",[t._v("出现控制台即成功。")]),t._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下面汇编语句的作用就是改变内存中 x 的值")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但是又不让编译器知道")]),t._v("\n    _asm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        mov eax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x\n        add eax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        mov x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" eax\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i = %d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("如果包含了__asm运行不了,右键项目属性 选择x86程序 不要用64位的")])]),t._v(" "),a("blockquote",[a("p",[t._v("通过编辑器创建的文件通常称为源文件，源文件包含程序源代码。\nC++ 程序的源文件通常使用扩展名 .cpp、.cp 或 .c。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);