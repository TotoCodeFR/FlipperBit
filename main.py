def HomeMenu():
    global StopRadioReading, Page, SelectedOption
    StopRadioReading = 0
    Page = "Home"
    SelectedOption = "Radio"
    Kitronik_VIEWTEXT32.clear_display()
    Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.TOP, "  Flipper:bit   ")
    Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.BOTTOM, "<    Radio     >")

def on_button_pressed_ab():
    global Page, SelectedOption, RadioChannel
    if Page == "Home":
        if SelectedOption == "Radio":
            Page = "Radio"
            SelectedOption = "Read"
            Kitronik_VIEWTEXT32.clear_display()
            Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.TOP, "     Radio      ")
            Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.BOTTOM, "<     Read     >")
    else:
        if Page == "Radio":
            if SelectedOption == "Read":
                Page = "RDRead"
                SelectedOption = ""
                Kitronik_VIEWTEXT32.clear_display()
                Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.TOP, "   Read Radio   ")
                Kitronik_VIEWTEXT32.scroll_string(Kitronik_VIEWTEXT32.DisplayLine.BOTTOM,
                    "Reading Radio Signal, turn it on!")
                RadioChannel = 0
                for index in range(1000):
                    radio.set_group(index)
                    RadioChannel = index
                    control.wait_micros(500000)
                    if StopRadioReading == 1:
                        break
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_value(name, value):
    global StopRadioReading
    StopRadioReading = 1
    Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.TOP, "   Radio Scan   ")
    Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.BOTTOM, "Found Signal!")
radio.on_received_value(on_received_value)

RadioChannel = 0
SelectedOption = ""
Page = ""
StopRadioReading = 0
HomeMenu()

def on_forever():
    pass
basic.forever(on_forever)
