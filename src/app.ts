// class Person {
//     constructor(private name: string) {

//     }
// }

// const max = new Person('Maxim')

const button = document.querySelector("#btn");

if (button) {
    button.addEventListener("click", () => console.log(1))
}

function logInfo(data, _?:number) {
    console.log(data)
}

logInfo("I am log string")

function a (a:number, b: number) {
    if (a) {
        return a * b
    }
}
