interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name | 'age'
const myName: PersonKeys = 'name'


type User = {
    _id: number
    name: string
    email: string
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'email'> // 'name' осталось
type UserKeysNoMeta1 = Pick<User, 'name' | 'email'> // выбрали нужные поля