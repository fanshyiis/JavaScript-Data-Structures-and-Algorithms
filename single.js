// var green = function(light) {
//     this.light = light
// }

// green.prototype.change = function () {
//     console.log('绿 -》 黄')
//     this.light.setState(this.light.yellow)   
// }

// var yellow = function (light) {
//     this.light = light
// }

// yellow.prototype.change = function () {
//     console.log('黄 -》 红')
//     this.light.setState(this.light.red)
// }

// var yellow2 = function (light) {
//     this.light = light
// }

// yellow2.prototype.change = function () {
//     console.log('黄 -》 绿')
//     this.light.setState(this.light.green)
// }

// var red = function (light) {
//     this.light = light
// }

// red.prototype.change = function () {
//     console.log('红 -》 黄')
//     this.light.setState(this.light.yellow2)
// }

// var Light = function() {
//     this.green = new green(this)
//     this.yellow = new yellow(this)
//     this.yellow2 = new yellow2(this)
//     this.red = new red(this)
// }

// Light.prototype.setState = function(newState) {
//     this.currState = newState
// }

// Light.prototype.init = function() {
//     this.currState = this.green
// }

// Light.prototype.change = function () {
//     this.currState.change()
// }

// var light = new Light()
// light.init()
// setInterval(() => {
//     light.change()
// }, 2000);

function sleep(color, time) {
    console.log(color)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}

async function colorLight() {
    await sleep('绿', 3000)
    await sleep('黄', 2000)
    await sleep('红', 4000)
    await sleep('黄', 2000)
    colorLight()
}

colorLight()