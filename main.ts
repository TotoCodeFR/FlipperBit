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
input.onButtonPressed(Button.AB, function () {
    if (Page == "Home") {
        if (SelectedOption == "Radio") {
            Page = "Radio"
            SelectedOption = "Read"
            Kitronik_VIEWTEXT32.clearDisplay()
            Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "     Radio      ")
            Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "<     Read     >")
        }
    } else {
        if (Page == "Radio") {
            if (SelectedOption == "Read") {
                Page = "RDRead"
                SelectedOption = ""
                Kitronik_VIEWTEXT32.clearDisplay()
                Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "   Read Radio   ")
                Kitronik_VIEWTEXT32.scrollString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "Reading Radio Signal, turn it on!")
                RadioChannel = 0
                for (let index = 0; index <= 999; index++) {
                    radio.setGroup(index)
                    RadioChannel = index
                    control.waitMicros(500000)
                    if (StopRadioReading == 1) {
                        break;
                    }
                }
            } else {
                if (SelectedOption == "Send") {
                    Page = "RDSend"
                    SelectedOption = "ChannelSelector"
                    RadioChannel = 0
                    Kitronik_VIEWTEXT32.clearDisplay()
                    while (true) {
                        Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "Sending Signal")
                        Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "<     " + RadioChannel + "     >")
                    }
                } else {
                    if (Page == "Radio") {
                        if (SelectedOption == "Send") {
                            Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "     Radio      ")
                            Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "<     Send     >")
                        }
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Page == "RDSend") {
        if (SelectedOption == "") {
            RadioChannel += 1
        }
    } else {
        if (Page == "Home") {
            if (SelectedOption == "Read") {
                SelectedOption = "Send"
            }
        }
    }
})
radio.onReceivedValue(function (name, value) {
    StopRadioReading = 1
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "   Radio Scan   ")
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "Found Signal!")
})
let RadioChannel = 0
let SelectedOption = ""
let Page = ""
let StopRadioReading = 0
HomeMenu()
basic.forever(function () {
	
})
