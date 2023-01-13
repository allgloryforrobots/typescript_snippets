const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]


// массивы с разным содержимым, числа, строки, объекты...

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)