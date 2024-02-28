SelectedHomeOption = "Radio"
Kitronik_VIEWTEXT32.clear_display()
Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.TOP, "  Flipper:bit   ")
Kitronik_VIEWTEXT32.display_single_line_string(Kitronik_VIEWTEXT32.DisplayLine.BOTTOM, "Radio")

def on_forever():
    pass
basic.forever(on_forever)
