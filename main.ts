radio.setGroup(13)

let m1 = PCAmotor.Motors.M1
let m4 = PCAmotor.Motors.M4

const serialnum = -1309627909

radio.onReceivedValue(function (name: string, value: number) {
    if (serialnum != radio.receivedPacket(RadioPacketProperty.SerialNumber)) return;

    if (name == "RIGHT" && value == 16) {
        PCAmotor.MotorRun(m1, -215)
        PCAmotor.MotorRun(m4, 255)
    }
    if (name == "LEFT" && value == 15) {
        PCAmotor.MotorRun(m1, 215)
        PCAmotor.MotorRun(m4, -255)
    }
    if (name == "BACK" && value == 14) {
        basic.pause(500)
        PCAmotor.MotorRun(m1, 215)
        PCAmotor.MotorRun(m4, 255)
    }
    if (name == "GO" && value == 13) {
        basic.pause(500)
        PCAmotor.MotorRun(m1, -215)
        PCAmotor.MotorRun(m4, -255)
    }
})