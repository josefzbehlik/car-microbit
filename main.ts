radio.setGroup(13)
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

let autoModeEnabled = true
let whiteLine = 0
let turnL = false
let turnR = false

let pinC = DigitalPin.P15
let pinL = DigitalPin.P14 // zkontrolovat piny
let pinR = DigitalPin.P13

pins.setPull(pinC, PinPullMode.PullNone)
pins.setPull(pinL, PinPullMode.PullNone)
pins.setPull(pinR, PinPullMode.PullNone)


let c = (whiteLine ^ pins.digitalReadPin(pinC)) == 0 ? false : true
let l = (whiteLine ^ pins.digitalReadPin(pinL)) == 0 ? false : true
let r = (whiteLine ^ pins.digitalReadPin(pinR)) == 0 ? false : true

//ARRAY
const pole: any = []
radio.onReceivedNumber(function(receivedNumber: 5){
let turnL = true
})
radio.onReceivedNumber(function (receivedNumber: 10) {
let turnR = true
})
radio.onReceivedNumber(function (receivedNumber: 1) {
    autoModeEnabled = true
})
radio.onReceivedNumber(function (receivedNumber: 0) {
    autoModeEnabled = false
})

pins.setPull(pinC, PinPullMode.PullNone)
pins.setPull(pinL, PinPullMode.PullNone)
pins.setPull(pinR, PinPullMode.PullNone)

//funkční
basic.forever(function () {
    if (autoModeEnabled) {
        let c = (whiteLine ^ pins.digitalReadPin(pinC)) == 0 ? false : true
        let l = (whiteLine ^ pins.digitalReadPin(pinL)) == 0 ? false : true
        let r = (whiteLine ^ pins.digitalReadPin(pinR)) == 0 ? false : true

        if (c) {pole.unshift("c")
            PCAmotor.MotorRun(PCAmotor.Motors.M1, -110)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -130)
        } else if (l) {pole.unshift("l") 
            if (pole[0] === r||l){
                if (turnL === true) {
                    PCAmotor.MotorRun(PCAmotor.Motors.M1,0)
                    PCAmotor.MotorRun(PCAmotor.Motors.M4,0)
                    pole.shift
                    basic.pause(0)
                    PCAmotor.MotorStopAll()
                    let turnL = false 
                    let turnR = false   }
                else if (turnR === true) {
                    PCAmotor.MotorRun(PCAmotor.Motors.M1, 0)
                    PCAmotor.MotorRun(PCAmotor.Motors.M4, 0)
                    pole.shift
                    basic.pause(0)
                    PCAmotor.MotorStopAll()
                    let turnL = false
                    let turnR = false
                }else{
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 90)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -120)}
            }
        } else if (r) {pole.unshift("r")
            if (pole[0] === r || l) {
                if (turnL === true) {
                    PCAmotor.MotorRun(PCAmotor.Motors.M1, 0)
                    PCAmotor.MotorRun(PCAmotor.Motors.M4, 0)
                    pole.shift
                    basic.pause(0)
                    PCAmotor.MotorStopAll()
                    let turnL = false
                    let turnR = false
                }
                else if (turnR === true) {
                    PCAmotor.MotorRun(PCAmotor.Motors.M1, 0)
                    PCAmotor.MotorRun(PCAmotor.Motors.M4, 0)
                    pole.shift
                    basic.pause(0)
                    PCAmotor.MotorStopAll()
                    let turnL = false
                    let turnR = false
                } else {
                    PCAmotor.MotorRun(PCAmotor.Motors.M1, 90)
                    PCAmotor.MotorRun(PCAmotor.Motors.M4, -120)
                }
        }
    }
}})
// function krizovatka ( ) {
//     if (c = true) {
//         basic.pause(50)
//      pole.unshift("c")
//     }
//     if (l = true) {
//         basic.pause(50)
//         pole.unshift("l")
//     }
//     if (r = true) {
//         basic.pause(50)
//         pole.unshift("r")
//     }
// }

// basic.forever(function () {
//         zaklad()
//     if (c = false, l = false, r = false){
//         mezera()
//         if (c = true, l = true, r = true) {
//             zaklad()
//         }
//     }
// })

