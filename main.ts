controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("" + num1 + "x" + num2 + "=" + num2 * num1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("" + num1 + "-" + num2 + "=" + (num2 - num1))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    num2 += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    num1 += 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("" + num1 + "/" + num2 + "=" + num2 / num1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("" + num1 + "+" + num2 + "=" + (num2 + num1))
})
let num1 = 0
let num2 = 0
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Player)
num2 = 0
num1 = 0
game.showLongText("press A to change the first number and b to change the other one.", DialogLayout.Bottom)
