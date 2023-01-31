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
class Clazz {

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


interface ComponentDecorator {
    selector: string
    template: string
}


// function Component(config: ComponentDecorator) {
//     return function(Constructor: Function ) {
//         return class extends Constructor {

//         }
//     }
// }


// @Component({
//     selector: '#card',
//     template: `<div class="card"></div>`
// })
// class CardComponent {

//     constructor(public name: string) {

//     }

//     logName(): void {
//         console.log(`Component Name: ${this.name}`)
//     }

// }