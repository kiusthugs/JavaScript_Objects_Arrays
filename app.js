console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129]
let addition = numbers.reduce((a, b) => {
    return a + b
})

console.log(addition)

let sum = 0

function arraySum(numbers) {
    numbers.forEach(num => sum += num)
    return sum
}

console.log(arraySum(numbers))
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {}

book.title = 'Eloquent JavaScript'
book.pages = 500
book.readCount = 2
book.info = function() {
    return `${this.title} by Author, ${this.pages} pages, read ${this.readCount} times`
}

console.log(book.info()) 

let sentence = "The quick brown fox jumps over the lazy dog";
let sentSpace = sentence.split('')
let arr = []
let finalArr = []

for (let i = 0; i <= sentSpace.length - 1; i++) {
    
    if(sentSpace[i] !== ' '){ //when a space is found, push letters into a array
        arr.push(sentSpace[i])
    } else if (sentSpace[i] === ' '){
        finalArr.push(arr)
        arr = []
    }

    if (i === sentSpace.length - 1) { //upon final word with no space afterwards, push array
        finalArr.push(arr)
    }

}


finalArr.forEach(el => el.reverse())
let finalSent = finalArr.map(el => el.join('')).join(' ')//combine multidimensional array into one array, combine new array into a string with spaces
console.log(finalSent)

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let newData = csvData.split('\n')
let header = newData[0].split(',')
let resultArr = []

for (let i = 1; i < newData.length; i++) {
    let currArr = newData[i].split(',')
    let obj = {}
    obj[header[0]] = currArr[0]
    obj[header[1]] = parseInt(currArr[1])
    resultArr.push(obj)
}

console.log(resultArr)

