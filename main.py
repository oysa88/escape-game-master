# --------------------------
# STARTVERDIER
# --------------------------
gruppe_index = 0
nivå_index = 0
basic.show_number(gruppe_index + 1, 0)

# --------------------------
# KONFIGURASJON
# --------------------------
# Radiogrupper per gruppe (index 0 = Gruppe 1). Hver liste har 5 nivåer.
radiogruppe = [
    [142, 125, 137, 112, 151],  # Gruppe 1
    [149, 126, 138, 113, 159],  # Gruppe 2
    [145, 127, 139, 114, 152],  # Gruppe 3
    [146, 128, 132, 115, 153],  # Gruppe 4
    [147, 129, 134, 116, 154],  # Gruppe 5
    [148, 121, 136, 117, 157],  # Gruppe 6
    [144, 123, 131, 118, 156],  # Gruppe 7
    [141, 124, 135, 119, 158],  # Gruppe 8
]

# Felles kodeord for nivå 1..5 (index 0 = nivå 1)
kodeord = ["VITENSENTER", "INDIA", "ELEMENTÆRPARTIKKEL", "NEWTON", "MASKINIST"]

radio.set_group(radiogruppe[gruppe_index][nivå_index])

# --------------------------
# FUNKSJONER
# --------------------------

def on_button_pressed_a():
    global gruppe_index, nivå_index
    gruppe_index += 1
    if gruppe_index > 7:
        gruppe_index = 0
    nivå_index = 0
    basic.show_number(gruppe_index + 1, 0)

input.on_button_pressed(Button.A, on_button_pressed_a)


def on_button_pressed_b():
    global gruppe_index, nivå_index
    rg = radiogruppe[gruppe_index][nivå_index]
    ko = kodeord[nivå_index]

    radio.set_group(rg)
    radio.send_string(ko)

    nivå_index += 1
    if nivå_index > 4:
        nivå_index = 0

input.on_button_pressed(Button.B, on_button_pressed_b)
