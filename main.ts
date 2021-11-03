let Ascore = 0
let Bscore = 0
let hand = 0
input.onButtonPressed(Button.A, function () {
    Ascore = Ascore + 1
    if (Ascore == 7) {
        basic.showString("A WINS!!!")
        Ascore = 0
        Bscore = 0
    }
})
input.onButtonPressed(Button.B, function () {
    Bscore = Bscore + 1
    if (Bscore == 7) {
        basic.showString("B WINS!!!")
        Bscore = 0
        Ascore = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
