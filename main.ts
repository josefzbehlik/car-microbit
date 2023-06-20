radio.setGroup(13)
let serialnum = 111111111111
radio.onReceivedString(function (receivedString: string) {
    if (serialnum != radio.receivedPacket(RadioPacketProperty.SerialNumber)) return;
    let data = receivedString.split(";")

    let x = parseInt(data[0]) - 1024
    let y = parseInt(data[1]) - 1024

    let M1_MAXSPEED = 250
    let M4_MAXSPEED = 250

    let LOWER_DEADZONE = 300
    let UPPER_DEADZONE = 600

    let m1 = PCAmotor.Motors.M1
    let m4 = PCAmotor.Motors.M4

    let x_scale = Math.constrain(Math.abs(x), LOWER_DEADZONE, UPPER_DEADZONE) / (UPPER_DEADZONE - LOWER_DEADZONE)
    let y_scale = Math.constrain(Math.abs(y), LOWER_DEADZONE, UPPER_DEADZONE) / (UPPER_DEADZONE - LOWER_DEADZONE)


    let M1Speed = 0
    let M4Speed = 0

    if (x > LOWER_DEADZONE) {
        M1Speed -= M1_MAXSPEED * x_scale
        M4Speed += M4_MAXSPEED * x_scale
    } else if (x < -LOWER_DEADZONE) {
        M1Speed += M1_MAXSPEED * x_scale
        M4Speed -= M4_MAXSPEED * x_scale
    }
    if (y > LOWER_DEADZONE) {
        M1Speed += M1_MAXSPEED * y_scale
        M4Speed += M4_MAXSPEED * y_scale
    } else if (y < -LOWER_DEADZONE) {
        M1Speed -= M1_MAXSPEED * y_scale
        M4Speed -= M4_MAXSPEED * y_scale
    }

    PCAmotor.MotorRun(m1, M1Speed / 2)
    PCAmotor.MotorRun(m4, M4Speed / 2)

})