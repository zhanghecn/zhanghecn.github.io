(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{426:function(t,s,a){"use strict";a.r(s);var n=a(62),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浮点数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点数"}},[t._v("#")]),t._v(" 浮点数")]),t._v(" "),a("h2",{attrs:{id:"ieee浮点数表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ieee浮点数表示"}},[t._v("#")]),t._v(" IEEE浮点数表示")]),t._v(" "),a("blockquote",[a("p",[t._v("二进制的表示形式只做简要说明\n"),a("table",[a("tbody",[a("tr",[a("td",[t._v("\n单精度")]),t._v(" "),a("td",[t._v("\n32 位：1 位符号位，8 位阶码，23 位为有效数字的小数部分。大致的规格化范围：2"),a("sup",[t._v("-126")]),t._v(" 〜2"),a("sup",[t._v("127")]),t._v(" 。也被称为短实数 (short real)")])]),t._v(" "),a("tr",[a("td",[t._v("\n双精度")]),t._v(" "),a("td",[t._v("\n64 位：1 位符号位，11 位阶码，52 位为有效数字的小数部分。大致的规格化范围：2"),a("sup",[t._v("-1022")]),t._v(" 〜2"),a("sup",[t._v("1023")]),t._v(" 。也被称为长实数 (longreal)")])]),t._v(" "),a("tr",[a("td",[t._v("\n扩展双精度")]),t._v(" "),a("td",[t._v("\n80 位：1 位符号位，15 位阶码，1 位为整数部分，63 位为有效数字的小数部分。大致的规格化范围：2"),a("sup",[t._v("-16382")]),t._v("〜2"),a("sup",[t._v("16383")]),t._v("。也被称为扩展实数 (extended real)")])])])])])]),t._v(" "),a("ol",[a("li",[t._v("符号位\n第一位代表符号 1是负数 0是正数")]),t._v(" "),a("li",[t._v("表示方式\nm*b^e 中 m是有效数字 b是基数 e是阶码 如:")])]),t._v(" "),a("p",[a("code",[t._v("1110.1 = (1.1101 * 2^3)")])]),t._v(" "),a("p",[a("code",[t._v(".000101 = (1.01 X 2^-4)")])]),t._v(" "),a("p",[a("code",[t._v("1010001. = (1.010001 x 26)")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("二进制表示\n关于二进制表示的阶码得+127 也可称为偏移码\n关于二进制小数形式如下:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("0.5  = 1/2  = .1\n0.25 = 1/4 = .01\n..     1/8    = .001\n..     3/8(1/4 + 1/8)    = .011  \n")])])]),a("p",[t._v("推算如下")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.75")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("二进制浮点数形式"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1010.11")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("格式化"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.01011")]),t._v(" x2³ \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("³"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000010")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1010")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("010")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("000000000000000000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000010")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01011000000000000000000")]),t._v("\n")])])]),a("h2",{attrs:{id:"fpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fpu"}},[t._v("#")]),t._v(" FPU")]),t._v(" "),a("p",[t._v("fpu为浮点数的寄存器\n且与CPU是不同的单元")]),t._v(" "),a("ol",[a("li",[t._v("堆栈\n与平常堆栈不同 FPU的堆栈和FPU的寄存器可以统称为一个\n从R0~R7\npush从 R3开始且每次-1 如果在push之前就是R0 则会绕到R7\npop从 R3开始 如果pop 之前就是R7则会绕到R0")])]),t._v(" "),a("p",[t._v("与正常push指令不同 浮点数fld是入栈 且入到ST(0) 也就是R3")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img_12.png",alt:"image"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("计算")])]),t._v(" "),a("ul",[a("li",[t._v("FCHS ST(0)符号取反")]),t._v(" "),a("li",[t._v("FABS ST(0)绝对值")]),t._v(" "),a("li",[t._v("FADD ST(0)加法")]),t._v(" "),a("li",[t._v("FADDP ST(0)加法并弹出")]),t._v(" "),a("li",[t._v("FSUB ST(0)减法")]),t._v(" "),a("li",[t._v("FSUBP ST(0)减法并弹出")]),t._v(" "),a("li",[t._v("FMUL STO(0)乘法")]),t._v(" "),a("li",[t._v("FMULP STO(0)乘法并弹出")]),t._v(" "),a("li",[t._v("FDIV STO(0)除法")]),t._v(" "),a("li",[t._v("FDIVP STO(0)除法并弹出")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("比较")])]),t._v(" "),a("ul",[a("li",[t._v("FCOM 比较STO(0)")]),t._v(" "),a("li",[t._v("FCOMP 比较STO(0)并弹出")]),t._v(" "),a("li",[t._v("FCOMI 比较STO(0) 并设置标志位\n比较结果会参数C3(ZF 零标志位) C2(PF 奇偶标志位) C1(ZF 进位标志位)")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("跳转\nFPU本身没有跳转 当可以通过"),a("code",[t._v("FNSTSW")]),t._v(" 把状态 送入"),a("code",[t._v("ax")]),t._v("\n然后在通过"),a("code",[t._v("sahf")]),t._v(" 把"),a("code",[t._v("ah")]),t._v("状态值送入标志位寄存器\n其中FCOMI是")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("FCOM \nFNSTSW\nSAHF \n")])])]),a("p",[t._v("整合")]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("示例")])]),t._v(" "),a("ul",[a("li",[t._v("小于跳转")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\ncmpN proc\nfld x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("st")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x\nFCOMP y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("st")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" com y 弹出到"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("st")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfnstsw ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 将CF ZF PF   状态位合并ax eax"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0100")]),t._v("\nsahf     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("ah 移至 eflags \n\njnb setN1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" y不小于x 跳转\n\nsetN1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  mov n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \nmov eax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncmpN endp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("h2",{attrs:{id:"xmm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xmm"}},[t._v("#")]),t._v(" XMM")]),t._v(" "),a("p",[t._v("与FPU 类似 形成XMM0 ~XMM15 循环寄存器")]),t._v(" "),a("p",[t._v("SSE2命令过多,下面只是做简单的使用")]),t._v(" "),a("p",[t._v("在此之前,先介绍简单的命令")]),t._v(" "),a("h3",{attrs:{id:"mmword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mmword"}},[t._v("#")]),t._v(" mmword")]),t._v(" "),a("p",[t._v("64位多媒体值的类型。形式为:0000000000000000-3FF3333333333333")]),t._v(" "),a("h3",{attrs:{id:"movsd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#movsd"}},[t._v("#")]),t._v(" movsd")]),t._v(" "),a("p",[t._v("传送双个字节(double dword)=128"),a("br"),t._v("\n一般用于传送XMM寄存器值")]),t._v(" "),a("h3",{attrs:{id:"addsd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addsd"}},[t._v("#")]),t._v(" addsd")]),t._v(" "),a("p",[t._v("累加双个字节 一般用于累加mmword类型数据")]),t._v(" "),a("h3",{attrs:{id:"cvtsi2sd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cvtsi2sd"}},[t._v("#")]),t._v(" cvtsi2sd")]),t._v(" "),a("p",[t._v("用于转换dword 类型到双精度浮点型")]),t._v(" "),a("h3",{attrs:{id:"comisd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comisd"}},[t._v("#")]),t._v(" comisd")]),t._v(" "),a("p",[t._v("比较双精度类型 并设置到 eflags(ZF PF CF)")]),t._v(" "),a("h3",{attrs:{id:"movaps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#movaps"}},[t._v("#")]),t._v(" movaps")]),t._v(" "),a("p",[t._v("压缩成单精度浮点型对齐")]),t._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("下面的示例传入两个double(双精度) 数字")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("下面是翻译的汇编代码")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("\nsumDouble proc\n\n\tmovsd mmword ptr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rsp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("xmm0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" a参数入栈\n\tmovsd mmword ptr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rsp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("xmm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" b参数入栈\n\tpush rbp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  备份还原\n\tmov rbp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("rsp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 准备基址参数\n\tmov dword ptr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rbp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 局部变量c\n\tmovsd xmm0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mmword ptr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rbp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 取出参数a 到xmm0\n\tmovsd xmm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mmword ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rbp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 取出参数b到xmm1\n\t\n\tcomisd xmm0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("xmm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b\n\tjbe lessThan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" b\n\tmov dword ptr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rbp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\n\tjmp L1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" b\n\tlessThan"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\tmov dword ptr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rbp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tL1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\taddsd xmm0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("xmm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("累加a和b\n\t\tcvtsi2sd  xmm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dword ptr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rbp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//dword 到 双精度字节")]),t._v("\n\n\t\taddsd xmm0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("xmm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c\n\t\n\t\tadd rsi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 删除局部变量\n\t\tpop rbp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 还原rbp基址\n\t\tret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsumDouble endp\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);