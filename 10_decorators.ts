function Log(constructor: Function) {
    console.log(constructor)
}


function Log2(target: any, propName: string | Symbol) {
    console.log(target)
    console.log(propName)
}


function log3(target: any, propName: string | symbol, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propName)
    console.log(descriptor)
}

@Log
class Component {

    @Log2
    name: string

    constructor(name: string) {
        this.name = name
    }

    @log3
    logName(): void {
        console.log(`Component Name: ${this.name}`)
    }

}