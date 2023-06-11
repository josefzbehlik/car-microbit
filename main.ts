let autoModeEnabled = true
let whiteLine = 0


let pinC = DigitalPin.P15
let pinL = DigitalPin.P14 // zkontrolovat piny
let pinR = DigitalPin.P13

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

    if (c) {
       
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -110)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -130)
    } else if (l) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 90)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -120)
    }
    else if (r) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 90)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -120)
    }
}
)