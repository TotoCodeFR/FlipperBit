function ReadRadioSgn () {
    Page = "RDRead"
    SelectedOption = ""
    Kitronik_VIEWTEXT32.clearDisplay()
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "   Read Radio   ")
    Kitronik_VIEWTEXT32.scrollString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "Reading Radio Signal, turn it on!")
    RadioChannel = 0
    for (let index = 0; index <= 999; index++) {
        radio.setGroup(index)
        RadioChannel = index
        basic.showNumber(index)
        if (StopRadioReading == 1) {
            break;
        }
    }
}
function HomeMenu () {
    StopRadioReading = 0
    Page = "Home"
    SelectedOption = "Radio"
    Kitronik_VIEWTEXT32.clearDisplay()
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "  Flipper:bit   ")
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "<    Radio     >")
}
input.onButtonPressed(Button.A, function () {
    if (Page == "RDSend") {
        if (SelectedOption == "") {
            RadioChannel += -1
        }
    }
})
function RadioMenu () {
    Page = "Radio"
    SelectedOption = "Read"
    Kitronik_VIEWTEXT32.clearDisplay()
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "     Radio      ")
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "<     Read     >")
}
input.onButtonPressed(Button.AB, function () {
    if (Page == "Home") {
        if (SelectedOption == "Radio") {
            RadioMenu()
        }
    } else {
        if (Page == "Radio") {
            if (SelectedOption == "Read") {
                ReadRadioSgn()
            } else {
                if (SelectedOption == "Send") {
                    SendRadioSgn()
                }
            }
        }
    }
})
function SendRadioSgn () {
    Page = "RDSend"
    SelectedOption = ""
    RadioChannel = 0
    Value = 0
    Kitronik_VIEWTEXT32.clearDisplay()
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "  INFORMATION   ")
    Kitronik_VIEWTEXT32.scrollString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "The signal getting sent currently is " + Value + ".")
    control.waitMicros(3000000)
    Kitronik_VIEWTEXT32.scrollString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "Edit this value in the code.")
    control.waitMicros(3000000)
    while (true) {
        Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "Sending Signal")
        Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "<     " + RadioChannel + "     >")
        radio.setGroup(RadioChannel)
        radio.sendNumber(0)
    }
}
input.onButtonPressed(Button.B, function () {
    if (Page == "RDSend") {
        if (SelectedOption == "") {
            RadioChannel += 1
        }
    } else {
        if (Page == "Radio") {
            if (SelectedOption == "Read") {
                SelectedOption = "Send"
                Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "<     Send     >")
            }
        }
    }
})
radio.onReceivedValue(function (name, value) {
    StopRadioReading = 1
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "   Radio Scan   ")
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "Found Signal!")
})
let Value = 0
let StopRadioReading = 0
let RadioChannel = 0
let SelectedOption = ""
let Page = ""
HomeMenu()
basic.forever(function () {
	
})
