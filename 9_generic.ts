const cars: string[] = ['Ford', 'Audi']
const cars2: Array<string> = ['Ford', 'Audi']

const promise = new Promise<string>( resolve => {
    setTimeout(() => {
        resolve("resolved")
    }, 2000)
})

promise.then( data => console.log(data.toUpperCase()) )

const promise2: Promise<number> = new Promise( resolve => setTimeout(() => resolve(1), 2000))

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObjects( { name: "Max" }, { age: 26 } )

console.log(merged.age)

const merged2 = mergeObjects( { model: "Ford" }, { year: 2010 } )

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): { value: T, count: string } {
    return {
        value, 
        count: `В этом объекте ${value.length} символов`
    }
}

// keyof
function getObjectvalue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: 'Max'
}

// getObjectvalue(person, 'job') // error
// getObjectvalue(person, 'name')


// ================
class Collection<T extends number | string | boolean> {

    // private _items: T[] = []

    constructor(private _items: T[] = []) {

    }

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }

}

const strings = new Collection<string>(["I", "A"])
strings.add("!")
strings.remove("!")

const numbers = new Collection<number>([1, 2])

// const objs = new Collection( [{ a: 1 }, { b: 2 }] )
// // объект не удалиться, говорим ts что коллекция работает с приминтивными типами данных выше
// objs.remove({ a: 1 })

// ===============
interface Car {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {

    }

    if (model.length > 3) {
        car.model = model
    }

    if (year > 2000) {
        car.year = year
    }

    return car as Car
}

const carsA: Array<string> = ['Ford', 'Audi']
cars.shift()

const carsB: Readonly<Array<string>>  = ['Ford', 'Audi']
// carsB.shift() ошибка ведь только для чтения

const ford: Readonly<Car>  = {
    model: 'Ford',
    year: 2020
}

// ford.model = 'BMW'





