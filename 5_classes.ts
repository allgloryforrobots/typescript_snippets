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

    constructor(theModel: string) {
        this.model = theModel
    }

}

// для справки

class Car1 {

    constructor(readonly model: string) {
        // тут model сразу запишется в this
    }
}

// модификаторы
class Animal {

    // доступно в классе Animal и для всех классов, которые наследуются от Animal
    // но в инстансе класса мы не можем получить доступ
    protected voice: string = ''

    // доступны везде
    public color: string = 'black'

    // доступны только в том классе, в котором были определены
    private go() {
        console.log('go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()

// абстрактные классы
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        
    }

    info(): string {
        return 'info'
    }
}