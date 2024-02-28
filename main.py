def on_button_pressed_ab():
    global Page, SelectedOption
    if Page == "Home":
        if SelectedOption == "Radio":
            Page = "Radio"
            SelectedOption = "Read"
            Kitronik_VIEWTEXT32.clear_display()
            Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.TOP, "     Radio      ")
            Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.BOTTOM, "<     Read     >")
    if Page == "Radio":
        if SelectedOption == "Read":
            Page = "RDRead"
            SelectedOption = ""
            Kitronik_VIEWTEXT32.clear_display()
            Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.TOP, "     Radio      ")
            Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.BOTTOM, "<     Read     >")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

SelectedOption = ""
Page = ""
Page = "Home"
SelectedOption = "Radio"
Kitronik_VIEWTEXT32.clear_display()
Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.TOP, "  Flipper:bit   ")
Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.BOTTOM, "<    Radio     >")

def on_forever():
    pass
basic.forever(on_forever)
