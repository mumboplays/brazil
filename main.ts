basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
    radio.sendString("")
})
