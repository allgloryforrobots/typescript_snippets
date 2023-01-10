class Typescript {
    version: string

    constructor(vertion: string) {
        this.version = vertion
    }

    info(name: string) {
        return `[${name}]: version is ${this.version}`
    }

}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4
}