
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
  limitRunTask(tasks, 2).then(console.log);
  function limitRunTask(tasks, limit) {
    return new Promise((resolve, reject) => {
      let finish = 0, res = [];
      let index = 0, running = 0;
      function run() {
        if (finish >= tasks.length) {
          resolve(res);
          return;
        }
        while (running < limit && index < tasks.length) {
          // 启动
          // 稀疏数组
          let curIndex = index;
          const p = tasks[index]();
          p.then(r => {
            finish++;
            res[curIndex] = r;
            running--;
            // if (finish >= tasks.length) {}
            run();  // 
          })
          index++;
          running++;
        }
      }
      run()
    })
  }
  // i = 5 才会退出循环
  // for (var i = 0; i < 5; i ++) {
  //   setTimeout(() => {
  //     console.log(i);
  //   }, i * 1000);
  // }

