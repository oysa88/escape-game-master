//  --------------------------
//  STARTVERDIER
//  --------------------------
let gruppe_index = 0
let nivå_index = 0
basic.showNumber(gruppe_index + 1, 0)
//  --------------------------
//  KONFIGURASJON
//  --------------------------
//  Radiogrupper per gruppe (index 0 = Gruppe 1). Hver liste har 5 nivåer.
let radiogruppe = [[142, 125, 137, 112, 151], [149, 126, 138, 113, 159], [145, 127, 139, 114, 152], [146, 128, 132, 115, 153], [147, 129, 134, 116, 154], [148, 121, 136, 117, 157], [144, 123, 131, 118, 156], [141, 124, 135, 119, 158]]
//  Gruppe 1
//  Gruppe 2
//  Gruppe 3
//  Gruppe 4
//  Gruppe 5
//  Gruppe 6
//  Gruppe 7
//  Gruppe 8
//  Felles kodeord for nivå 1..5 (index 0 = nivå 1)
let kodeord = ["VITENSENTER", "INDIA", "ELEMENTÆRPARTIKKEL", "NEWTON", "MASKINIST"]
radio.setGroup(radiogruppe[gruppe_index][nivå_index])
//  --------------------------
//  FUNKSJONER
//  --------------------------
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    gruppe_index += 1
    if (gruppe_index > 7) {
        gruppe_index = 0
    }
    
    nivå_index = 0
    basic.showNumber(gruppe_index + 1, 0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    let rg = radiogruppe[gruppe_index][nivå_index]
    let ko = kodeord[nivå_index]
    radio.setGroup(rg)
    radio.sendString(ko)
    nivå_index += 1
    if (nivå_index > 4) {
        nivå_index = 0
    }
    
})
