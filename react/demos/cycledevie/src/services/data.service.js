const data = ["toto","titi","tata"]

export const getData = () => new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(data)
    },5000)
})