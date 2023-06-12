let autoModeEnabled = true
let whiteLine = 0


let pinC = DigitalPin.P15
let pinL = DigitalPin.P14 // zkontrolovat piny
let pinR = DigitalPin.P13
let pinShoot = DigitalPin.P2
let pinEcho = DigitalPin.P1

pins.setPull(pinC, PinPullMode.PullNone)
pins.setPull(pinL, PinPullMode.PullNone)
pins.setPull(pinR, PinPullMode.PullNone)


let c = (whiteLine ^ pins.digitalReadPin(pinC)) == 0 ? false : true
let l = (whiteLine ^ pins.digitalReadPin(pinL)) == 0 ? false : true
let r = (whiteLine ^ pins.digitalReadPin(pinR)) == 0 ? false : true



pins.setPull(pinC, PinPullMode.PullNone)
pins.setPull(pinL, PinPullMode.PullNone)
pins.setPull(pinR, PinPullMode.PullNone)

//funkční
basic.forever(function () {

    let c = (whiteLine ^ pins.digitalReadPin(pinC)) == 0 ? false : true
    let l = (whiteLine ^ pins.digitalReadPin(pinL)) == 0 ? false : true
    let r = (whiteLine ^ pins.digitalReadPin(pinR)) == 0 ? false : true
    let obstacle = sonar.ping(pinShoot, pinEcho, PingUnit.Centimeters, 50)

    if (c) {
       
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -105)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -120)
    } else if (l) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 105)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -130)
    }
    else if (r) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -125)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, 105)
    }
    if (obstacle < 15 && obstacle > 0) {
        PCAmotor.MotorStopAll()
        basic.pause(300)
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -125)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, 105)
        basic.pause(300)
        PCAmotor.MotorStopAll()

    }
})