1.  setTimeout 
2.  Promise
3.  请求
4.  addevent
5.  页面


浏览器内部有很多线程：
1.  定时器触发线程
2.  http
3.  GUI线程

什么是event-loop:
    浏览器 协调用户交互，渲染，网络等任务 的策略

宏任务(macro-task)
由宿主环境引起的任务
常见的 macro-task 比如： setTimeout、setInterval、 setImmediate、script（整体代码）、 I/O 操作、UI 渲染等。


微任务(micro-tack)
由 js 本身引起的任务
常见的 micro-task 比如: process.nextTick、Promise、MutationObserver 等。

##  流程：
1.  从宏任务队列里面取出**一个**执行
2.  从微任务队列里面取出**所有的**执行，如果在这执行过程中又产生了微任务，再次重复第2步
3.  有可能进入浏览器的更新渲染
    1.  reqAnimationframe 回调
    2.  执行 IntresectionObsever 回调
    3.  重新绘制渲染
4.  检查是否存在 Web worker 任务，如果有，则对其进行处理 

以 60fps 每一帧话费 16.666ms
我们的渲染任务是
一个宏任务 -》 清空微任务 -》 渲染 -》 一个宏任务 -》清空微任务 -》 渲染