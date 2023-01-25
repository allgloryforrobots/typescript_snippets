const cars: string[] = ['Ford', 'Audi']
const cars2: Array<string> = ['Ford', 'Audi']

const promise = new Promise<string>( resolve => {
    setTimeout(() => {
        resolve("resolved")
    }, 2000)
})

promise.then(
    data => {
        console.log(data.toUpperCase())
    }
)


const promise2: Promise<number> = new Promise( resolve => {
    setTimeout(() => {
        resolve(1)
    }, 2000)
})