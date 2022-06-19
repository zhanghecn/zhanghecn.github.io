(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{431:function(e,t,a){"use strict";a.r(t);var s=a(62),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c"}},[e._v("#")]),e._v(" C#")]),e._v(" "),a("p",[e._v("对于编写辅助的底层,c++明显更适合。\n但对于可操控的高级面向对象以及windows界面  明显C#更适合")]),e._v(" "),a("p",[e._v("并且C# 还有委托等一系列操作可以结合 c++")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img_25.png",alt:"image"}})]),e._v(" "),a("h2",{attrs:{id:"线程池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[e._v("#")]),e._v(" 线程池")]),e._v(" "),a("p",[e._v("编写辅助肯定少不了线程池的辅助")]),e._v(" "),a("ol",[a("li",[e._v("ThreadPool\n提供一个线程池，该线程池可用于执行任务、发送工作项、处理异步 I/O、代表其他线程等待以及处理计时器。")])]),e._v(" "),a("div",{staticClass:"language-c# extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public static class ThreadPool\n")])])]),a("div",{staticClass:"language-c# extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('using System;\nusing System.Threading;\n\npublic class Example \n{\n    public static void Main() \n    {\n        // Queue the task.\n        ThreadPool.QueueUserWorkItem(ThreadProc);\n        Console.WriteLine("Main thread does some work, then sleeps.");\n        Thread.Sleep(1000);\n\n        Console.WriteLine("Main thread exits.");\n    }\n\n    // This thread procedure performs the task.\n    static void ThreadProc(Object stateInfo) \n    {\n        // No state object was passed to QueueUserWorkItem, so stateInfo is null.\n        Console.WriteLine("Hello from the thread pool.");\n    }\n}\n')])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Timer  计时器\n用于向ThreadPool 发送可定时的任务")])]),e._v(" "),a("div",{staticClass:"language-C# extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public Timer (System.Threading.TimerCallback callback, object? state, int dueTime, int period);\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);