  // 写出这段代码的输出结果：

    function createTask(ms) {
        return () => {
            console.log('start', ms);
            return new Promise(r => setTimeout(() => {
                console.log('end', ms);
                r(ms);
            }, ms));
        }
    }
    const tasks = Array(5).fill(null).map((_, i) => createTask(i * 1000));
    Promise.all(tasks.map(task => task())).then(console.log);

    //限流  同时只允许2个
    