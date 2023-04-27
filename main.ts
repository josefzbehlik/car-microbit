let m1 = PCAmotor.Motors.M1
let m4 = PCAmotor.Motors.M4

let leftldx = 0;
let rightldx = 0;
const speed = [0, 50, 100]

input.onButtonPressed(Button.A, function () {
    PCAmotor.MotorRun(m1, -750)//speed od 0 do 255 (pod 100 to nejede)
    PCAmotor.MotorRun(m4, 750)
})

input.onButtonPressed(Button.B, function () {
    PCAmotor.MotorRun(m1, -300)
    PCAmotor.MotorRun(m4, -100)
})

input.onButtonPressed(Button.AB, function () {
    PCAmotor.MotorStopAll()
    leftldx = rightldx = 0;
})