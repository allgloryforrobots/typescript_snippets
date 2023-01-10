interface Rect {
    readonly id: string
    color?: string // необязательный
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: "1222",
    size: {
        width: 100,
        height: 100
    },
    color: "#ccc"
}

const rect2: Rect = {
    id: "1222",
    size: {
        width: 5,
        height: 100
    },
}

rect2.color = 'black'

// const rect3 = {} as Rect
// const rect3 = <Rect>{}

// =========
interface RectWidthArea extends Rect {
    getArea: () => number
}


const rect5: RectWidthArea = {
    id: "1222",
    size: {
        width: 5,
        height: 100
    },
    getArea(): number{
        return  this.size.width * this.size.height
    }
}

//=========
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// ======== большое количество ключей

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}