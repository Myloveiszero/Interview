Promise.myRace = function() {
    return new Promise((resolve, reject) => {
        for (const p of promises) {
            p.then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        }
    }) 
}