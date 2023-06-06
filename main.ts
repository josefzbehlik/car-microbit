//radio.setGroup(13)
// radio.onReceivedString(function (receivedString: string) {
//     if (serialnum != radio.receivedPacket(RadioPacketProperty.SerialNumber)) return;
//     let data = receivedString.split(";")
//     let x = parseInt(data[0]) - 1024
//     let y = parseInt(data[1]) - 1024

//     let x_scale = Math.constrain(Math.abs(x), LOWER_DEADZONE, UPPER_DEADZONE) / (UPPER_DEADZONE - LOWER_DEADZONE)
//     let y_scale = Math.constrain(Math.abs(y), LOWER_DEADZONE, UPPER_DEADZONE) / (UPPER_DEADZONE - LOWER_DEADZONE)


//     let M1Speed = 0
//     let M4Speed = 0

//     if (x > LOWER_DEADZONE) {
//         M1Speed -= M1_MAXSPEED * x_scale
//         M4Speed += M4_MAXSPEED * x_scale
//     } else if (x < -LOWER_DEADZONE) {
//         M1Speed += M1_MAXSPEED * x_scale
//         M4Speed -= M4_MAXSPEED * x_scale
//     }
//     if (y > LOWER_DEADZONE) {
//         M1Speed += M1_MAXSPEED * y_scale
//         M4Speed += M4_MAXSPEED * y_scale
//     } else if (y < -LOWER_DEADZONE) {
//         M1Speed -= M1_MAXSPEED * y_scale
//         M4Speed -= M4_MAXSPEED * y_scale
//     }

//     PCAmotor.MotorRun(m1, M1Speed / 2)
//     PCAmotor.MotorRun(m4, M4Speed / 2)

// })


radio.setGroup(112)

let autoModeEnabled = true
let whiteLine = 0

let pinC = DigitalPin.P15
let pinL = DigitalPin.P14 // zkontrolovat piny
let pinR = DigitalPin.P13

pins.setPull(pinC, PinPullMode.PullNone)
pins.setPull(pinL, PinPullMode.PullNone)
pins.setPull(pinR, PinPullMode.PullNone)


basic.forever(function () {
    if (autoModeEnabled) {
        let c = (whiteLine ^ pins.digitalReadPin(pinC)) == 0 ? false : true
        let l = (whiteLine ^ pins.digitalReadPin(pinL)) == 0 ? false : true
        let r = (whiteLine ^ pins.digitalReadPin(pinR)) == 0 ? false : true

        if (c) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, -150)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -160)
        } else if (l) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 100)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
        } else if (r) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, -150)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 100)
        }
    }

})




