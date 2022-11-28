const { get } = require("http")

class Car {
    constructor(name, color, topSpeed) {
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed = 0
    }

    drive(speed=10) {
        console.log('Just drove 2 miles')
        this.currentSpeed += speed
    }
    
    brake() {
        console.log('Came to a screeching halt')
        this.currentSpeed -= 10
    }

    zeroToHundred() {
        setTimeout(() => {
            console.log('Thats fast!')
            this.currentSpeed = 60
        }, 3000)
    }
    stop() {
        console.log('The car has stopped')
        this.currentSpeed = 0
    }
}

const ferrari = new Car('ferrari', 'red', '320')
const porche = new Car('porche', 'yellow', '310')

// console.log(ferrari)
// ferrari.drive(40)
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// const nums = [1,2,3,4,5]
// nums.forEach(_ => porche.drive())
// console.log(ferrari)
// ferrari.zeroToHundred()
// ferrari.brake()
// console.log(ferrari.currentSpeed)
// ferrari.stop()
// console.log(ferrari.currentSpeed)

let array = [1,2,3,4]

Array.prototype.myPush = function(y) {
    const x = this.length
    return this[x] = y
}

Array.prototype.myPush2 = function(y) {
    this[this.length] = y
}


array.myPush(55)
array.myPush2(53)
array.myPush2(array)
// console.log(array)


class Player {
    constructor(name, age, height, weight) {
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
    }

    getAge() {
        return `${this.name} is age ${this.age}`
    }
    getHeight() {
        return `${this.name} is age ${this.height}cm`
    }
    getWeight() {
        `${this.name} is age ${this.weight}kg`
    }
}

p1 = new Player('Jones', 22, 187, 70)
// console.log(p1.getAge())

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    compareAge(other) {
        if(this.age < other.age) {
            console.log(other.name)
            return `${other.name} is older than me.`
        } else if(this.age > other.age) {
            console.log(other.name)
            return `${other.name} is younger than me.`
        }else if(this.age == other.age) {
            return `${other.name} is the same age as me.`
        }
    }
}

p1 = new Person('Greg', 22)
p2 = new Person('Faure', 20)

console.log(p1.compareAge(p2))


// playDiv.onclick = () => {
//     console.log('You clicked playDiv')
// }
// other way to write .onclick is using the addEventListener method.

// playDiv.addEventListener('click', function () {
//     console.log('You clicked playDiv')
// })

// document.addEventListener('keydown', function(e){
//     if(e.key == 'q') {
//         console.log('You pressed Q')
//     } else{
//         console.log('You did not press Q')
//     }
// })

class Rectangle {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
    toStri(){
        return `x=${this.x} y=${this.y} width=${this.width} height=${this.height} `
    }
}


const r1 = new Rectangle(1,2,3,4)

// console.log(r1.toStri())

class numbers {
    constructor(number) {
        this.number = number
    }
    get nines() {
        return Math.floor(this.number/9)
    }
    get threes() {
        return Math.floor(this.number/3)
    }
    get ones() {
        return Math.floor(this.number/1)
    }
}

let n1 = new numbers(50)
console.log(n1.threes)