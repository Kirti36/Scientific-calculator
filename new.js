function dis(val) {
    const display = document.getElementById('result')
    display.value += val
}

function solve() {
    const display = document.getElementById('result')
    let x = display.value
    let y = eval(x)
    display.value = y
}

function del(val) {
    const display = document.getElementById('result')
    display.value = ''
}

function x2(val) {
    const display = document.getElementById('result')
    display.value = Math.pow(display.value, 2)
}

function x3(val) {
    const display = document.getElementById('result')
    display.value = Math.pow(display.value, 3)
}

function x4(val) {
    const display = document.getElementById('result')
    display.value = Math.pow(display.value, 4)
}

function x5(val) {
    const display = document.getElementById('result')
    display.value = Math.pow(display.value, 5)
}

function x6(val) {
    const display = document.getElementById('result')
    display.value = Math.pow(display.value, 6)
}

function x7(val) {
    const display = document.getElementById('result')
    display.value = Math.pow(display.value, 7)
}

function x9(val) {
    const display = document.getElementById('result')
    display.value = Math.pow(display.value, 9)
}

function sin(val) {
    const display = document.getElementById('result')
    display.value = Math.sin(display.value * (Math.PI / 180))
}

function sinh(val) {
    const display = document.getElementById('result')
    display.value = Math.sinh(display.value)
}

function asin(val) {
    const display = document.getElementById('result')
    display.value = Math.asin(display.value)
}

function asinh(val) {
    const display = document.getElementById('result')
    display.value = Math.asinh(display.value)
}

function cosh(val) {
    const display = document.getElementById('result')
    display.value = Math.cos(display.value * (Math.PI / 180))
}

function cosh(val) {
    const display = document.getElementById('result')
    display.value = Math.cosh(display.value)
}

function acos(val) {
    const display = document.getElementById('result')
    display.value = Math.acos(display.value)
}

function acosh(val) {
    const display = document.getElementById('result')
    display.value = Math.acosh(display.value)
}

function tan(val) {
    const display = document.getElementById('result')
    display.value = Math.tan(display.value * (Math.PI / 180))
}

function tanh(val) {
    const display = document.getElementById('result')
    display.value = Math.tanh(display.value)
}

function atan(val) {
    const display = document.getElementById('result')
    display.value = Math.atan(display.value)
}

function atanh(val) {
    const display = document.getElementById('result')
    display.value = Math.atanh(display.value)
}

function cot(val) {
    const display = document.getElementById('result')
    display.value = Math.cot(display.value * (Math.PI / 180))
}

function coth(val) {
    const display = document.getElementById('result')
    display.value = Math.coth(display.value)
}

function log(val) {
    const display = document.getElementById('result')
    display.value = Math.log10(display.value)
}

function ln(val) {
    const display = document.getElementById('result')
    display.value = Math.log(display.value)
}

function cuberoot(val) {
    const display = document.getElementById('result')
    display.value = Math.cbrt(display.value)
}

function fourroot(val) {
    const display = document.getElementById('result')
    display.value = Math.pow(display.value, 1 / 4)
}

function fiveroot(val) {
    const display = document.getElementById('result')
    display.value = Math.pow(display.value, 1 / 5)
}

function squareroot(val) {
    const display = document.getElementById('result')
    display.value = Math.sqrt(display.value)
}