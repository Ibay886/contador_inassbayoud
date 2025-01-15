input.onButtonPressed(Button.A, function () {
    contador = 0
})
let contador = 0
contador = 0
basic.forever(function () {
    contador += 1
    basic.showNumber(contador)
    if (contador > 20) {
        contador = 0
        basic.pause(1000)
    }
})
