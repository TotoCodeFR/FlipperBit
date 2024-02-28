input.onButtonPressed(Button.AB, function () {
    if (Page == "Home") {
        if (SelectedOption == "Radio") {
        	
        }
    }
})
let SelectedOption = ""
let Page = ""
Page = "Home"
SelectedOption = "Radio"
Kitronik_VIEWTEXT32.clearDisplay()
Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "  Flipper:bit   ")
Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "<    Radio     >")
basic.forever(function () {
	
})
