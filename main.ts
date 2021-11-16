let intensite = 0
function bleu () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function blanc () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function mauve () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
basic.forever(function () {
    intensite = pins.analogReadPin(AnalogPin.P0)
    if (intensite >= 800) {
        vert()
    } else if (intensite < 800 && intensite >= 600) {
        bleu()
    } else if (intensite < 600 && intensite >= 400) {
        rouge()
    } else if (intensite < 0 && false) {
        mauve()
    } else if (false) {
        blanc()
    } else {
    	
    }
})
