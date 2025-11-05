//  --------------------------
//  STARTVERDIER
//  --------------------------
let gruppe_index = 0
let nivå_index = 0
//  --------------------------
//  KONFIGURASJON
//  --------------------------
let ko = ""
let rg = 0
let kodeord : string[] = []
let radiogruppe : number[][] = []
//  Radiogrupper per gruppe (index 0 = Gruppe 1). Hver liste har 5 nivåer.
radiogruppe = [[142, 125, 137, 112, 151], [149, 126, 138, 113, 159], [145, 127, 139, 114, 152], [146, 128, 132, 115, 153], [147, 129, 134, 116, 154], [148, 121, 136, 117, 157], [144, 123, 131, 118, 156], [141, 124, 135, 119, 158]]
//  Gruppe 1
//  Gruppe 2
//  Gruppe 3
//  Gruppe 4
//  Gruppe 5
//  Gruppe 6
//  Gruppe 7
//  Gruppe 8
//  Felles kodeord for nivå 1..5 (index 0 = nivå 1)
kodeord = ["VITENSENTER", "INDIA", "ELEMENTÆRPARTIKKEL", "NEWTON", "MASKINIST"]
radio.setGroup(radiogruppe[gruppe_index][nivå_index])
//  Vis startstatus
vis_led_display()
//  --------------------------
//  FUNKSJONER
//  --------------------------
function vis_led_display() {
    basic.clearScreen()
    let y = 0
    while (y < Math.min(gruppe_index + 1, 4)) {
        led.plot(0, 4 - y)
        y += 1
    }
    if (gruppe_index >= 4) {
        y = 0
        while (y < gruppe_index - 3) {
            led.plot(1, 4 - y)
            y += 1
        }
    }
    
    y = 0
    while (y < nivå_index + 1) {
        led.plot(4, 4 - y)
        y += 1
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    gruppe_index += 1
    if (gruppe_index > 7) {
        gruppe_index = 0
    }
    
    nivå_index = 0
    vis_led_display()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    rg = radiogruppe[gruppe_index][nivå_index]
    ko = kodeord[nivå_index]
    radio.setGroup(rg)
    radio.sendString("" + ko)
    nivå_index += 1
    if (nivå_index > 4) {
        nivå_index = 0
    }
    
    vis_led_display()
})
