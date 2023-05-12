radio.setGroup(13)

let m1 = PCAmotor.Motors.M1
let m4 = PCAmotor.Motors.M4

let leftldx = 0;
let rightldx = 0;
const speed = [0, 50, 100]

const serialnum = -1309627909

radio.onReceivedValue(function (name: string, value: number) {
    if (serialnum != radio.receivedPacket(RadioPacketProperty.SerialNumber)) return;

    if (name == "GO" && value == 18) {
        PCAmotor.MotorRun(m1, -215)
        PCAmotor.MotorRun(m4, -255)
    }

    if (name == "BACK" && value == 17) {
        PCAmotor.MotorRun(m1, 215)
        PCAmotor.MotorRun(m4, 255)
    }

    if (name == "LEFT" && value == 16) {
        PCAmotor.MotorRun(m1, -215)
        PCAmotor.MotorRun(m4, 255)
    }

    if (name == "RIGHT" && value == 15) {
        PCAmotor.MotorRun(m1, 215)
        PCAmotor.MotorRun(m4, -255)
    }
})