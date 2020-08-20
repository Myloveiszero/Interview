##  GET POST
1.  一个是 req body, 一个是 querstring (a=1&b=2)
在浏览器 用户输入 url img link script GET 参数也只能放到 url 里面去了

xmlhttrequest http postman 只要客户约定好，参数放到哪里不受限制 

baidu.com/search?s=js
组成 url 的一部分

从协议本身来看， 并没有限制 GET 传递参数不能放到 Body 
POST 传递参数 也可以放到 querstring

-   语义不一样 GET POST
-   GET 资源可以缓存 POST 不能缓存
-   GET url 长度有限（浏览器） POST req body 不限制的
-   GET 不安全 POST 更安全一点。其实都是不安全的， http 明文传输  https 加密传输