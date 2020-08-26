const p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    })
}
const p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 2000)
    })
}
const p3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 3000)
    })
}

Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        let count = 0//到底完成了几个 count === promise.length
        //什么时候都结束了？
        let resArr = []
        for (let i = 0; i < promises.length; i++) {
            let p = promises[i]
            p.then(res => {
                count ++ 
                resArr[i] = res
                if (count === promises.length) {
                    resolve(res)
                }
            })
            .catch(err => {
    
            })
        }
    })
}

Promise.myAll([p1(), p2(), p3()])
.then(res => {
    console.log(res)
})
.catch(err => {

})