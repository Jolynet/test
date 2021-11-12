input.onButtonPressed(Button.B, function () {
    bullet = game.createSprite(2, sprite.get(LedSpriteProperty.Y))
    basic.pause(500)
})
let bullet: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)
let _1 = game.createSprite(1, 0)
let _2 = game.createSprite(1, 1)
let _3 = game.createSprite(1, 2)
let _4 = game.createSprite(1, 3)
let _5 = game.createSprite(1, 4)
game.setLife(3)
let Annen_tin = game.createSprite(4, randint(0, 4))
led.plot(1, 0)
for (let index = 0; index < 50; index++) {
    Annen_tin.change(LedSpriteProperty.X, -1)
    basic.pause(3000)
}
for (let index = 0; index < 50; index++) {
    Annen_tin.change(LedSpriteProperty.X, -1)
    basic.pause(2000)
}
for (let index = 0; index < 100; index++) {
    Annen_tin.change(LedSpriteProperty.X, -1)
    basic.pause(1000)
}
for (let index = 0; index < 200; index++) {
    Annen_tin.change(LedSpriteProperty.X, -1)
    basic.pause(500)
}
for (let index = 0; index < 300; index++) {
    Annen_tin.change(LedSpriteProperty.X, -1)
    basic.pause(250)
}
basic.forever(function () {
    if (Annen_tin.isDeleted()) {
        Annen_tin = game.createSprite(4, randint(0, 4))
    } else if (false) {
        bullet.change(LedSpriteProperty.X, 1)
    }
})
basic.forever(function () {
    if (led.point(0, 4) && input.buttonIsPressed(Button.A)) {
        sprite.set(LedSpriteProperty.Y, 0)
        basic.pause(100)
    } else if (input.buttonIsPressed(Button.A)) {
        sprite.change(LedSpriteProperty.Y, 1)
    } else {
        if (Annen_tin.isTouching(_1)) {
            game.gameOver()
        } else if (Annen_tin.isTouching(_2)) {
            game.gameOver()
        } else if (Annen_tin.isTouching(_3)) {
            game.gameOver()
        } else if (Annen_tin.isTouching(_4)) {
            game.gameOver()
        } else if (Annen_tin.isTouching(_5)) {
            game.gameOver()
        }
    }
})
