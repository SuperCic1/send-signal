input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
radio.setGroup(1)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    if (smarthome.dht11Sensor(DigitalPin.P1, smarthome.DHT11_state.DHT11_humidity) > 80) {
        radio.sendNumber(1)
    }
})
