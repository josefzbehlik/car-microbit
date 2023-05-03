/*
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
*/


function pack (x:number, y:number, z:number): number 
{
    let xmod = x + 1024 //posund do kladného intervalu
    xmod = Math.round(xmod / 8) //redukce intervalu

//String.fromCharCode()
//"@"\dfjhfg.charCodeAt(1)

/* 
function pack(cisla:[number]):cisla

for (let i = 0; i < cisla.lenght; i++) {
    console.log(cisla)
}
*/
    return 0
}

input.onButtonPressed(Button.A, function(){

    let x = 1022 // <-1024; 1023>
    let y = -950
    let z = 12




    //radio.sendString("")
    radio.sendNumber(pack(x, y, z))

})

radio.onReceivedNumber(function(receivedNumber: number){

})















