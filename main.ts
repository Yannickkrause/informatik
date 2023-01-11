let Besucherzahl = 0
basic.forever(function () {
    if (input.lightLevel() <= 75) {
        music.playMelody("C5 C5 A G G A C5 C5 ", 300)
        Besucherzahl += 1
        basic.showNumber(Besucherzahl)
    }
})
