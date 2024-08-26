function isNearly (reference: number, reading: number, tolerance: number) {
    if (reading >= reference - tolerance && reading <= reference + tolerance) {
        return true
    } else {
        return false
    }
}
function playMusic (genre: string) {
    if (genre == "Level") {
        if (playlistLevel.length == 0) {
            playlistLevel = shuffleList(mbLevel)
        }
        thisSound2 = playlistLevel.shift()
        relativeVolumeB = parseFloat(thisSound2.split("_")[2]) / 100
        basic.pause(Math.min(0, notLegos.playsFor(thisSound2, potRead(), notLegos.DigitalRJPin.J4)))
    } else {
    	
    }
}
function PlaySound (category: string) {
    if (category == "Ready") {
        if (playlistReady.length == 0) {
            playlistReady = shuffleList(sbReady)
        }
        thisSound2 = playlistReady.shift()
        relativeVolumeA = parseFloat(thisSound2.split("_")[2]) / 100
        basic.pause(notLegos.playsFor(thisSound2, potRead(), notLegos.DigitalRJPin.J3))
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
}
function printArray (toPrint: any[]) {
    lineCount = toPrint.length
    Connected.oledClear()
    Connected.showUserNumber(8, lineCount)
    if (lineCount > 0) {
        for (let thisLine = 0; thisLine <= lineCount - 1; thisLine++) {
            Connected.showUserText(thisLine + 1, toPrint[thisLine])
        }
    } else {
        Connected.showUserText(1, "[Empty]")
    }
}
Connected.buttonEvent(Connected.DigitalRJPin.J2, Connected.ButtonStateList.D, function () {
    if (songNumber > 0) {
        songNumber = songNumber - 1
    }
    Connected.showUserText(2, mbLevel[songNumber])
    basic.pause(notLegos.playsFor("", potRead(), notLegos.DigitalRJPin.J4) + 300)
    Connected.showUserNumber(3, notLegos.playsFor("", potRead(), notLegos.DigitalRJPin.J4))
})
function potRead () {
    thePotSays = pins.map(
    Connected.trimpot(Connected.AnalogRJPin.J1),
    0,
    1023,
    0,
    1
    )
    return thePotSays
}
function shuffleList (listIn: string[]) {
    listCopy = []
    for (let value of listIn) {
        listCopy.push(value)
    }
    listOut = ["temp"]
    while (listCopy.length > 0) {
        thisItem = listCopy._pickRandom()
        listOut.push(thisItem)
        listCopy.removeAt(listCopy.indexOf(thisItem))
    }
    listOut.shift()
    return listOut
}
function setSounds (player: string) {
    soundString = notLegos.playerSoundString(player)
    sbName = []
    sbReady = []
    sbYay = []
    sbIntro = []
    sbNay = []
    sbOuch = []
    sbSuccess = []
    sbFailure = []
    sbWon = []
    sbLost = []
    sbHurry = []
    stringParts = soundString.split("|")
    for (let value2 of stringParts) {
        thisLetter = value2.charAt(0)
        thisSound2 = value2.substr(2, value2.length - 2)
        if (thisLetter == "A") {
            sbName.push(thisSound2)
        } else if (thisLetter == "R") {
            sbReady.push(thisSound2)
        } else if (thisLetter == "Y") {
            sbYay.push(thisSound2)
        } else if (thisLetter == "I") {
            sbIntro.push(thisSound2)
        } else if (thisLetter == "N") {
            sbNay.push(thisSound2)
        } else if (thisLetter == "O") {
            sbOuch.push(thisSound2)
        } else if (thisLetter == "S") {
            sbSuccess.push(thisSound2)
        } else if (thisLetter == "F") {
            sbFailure.push(thisSound2)
        } else if (thisLetter == "W") {
            sbWon.push(thisSound2)
        } else if (thisLetter == "L") {
            sbLost.push(thisSound2)
        } else if (thisLetter == "H") {
            sbHurry.push(thisSound2)
        }
    }
}
Connected.buttonEvent(Connected.DigitalRJPin.J2, Connected.ButtonStateList.C, function () {
    songNumber = songNumber + 1
    Connected.showUserText(2, mbLevel[songNumber])
    basic.pause(notLegos.playsFor("", potRead(), notLegos.DigitalRJPin.J4) + 300)
    Connected.showUserNumber(3, notLegos.playsFor("", potRead(), notLegos.DigitalRJPin.J4))
})
function setMusic (player: string) {
    musicString = notLegos.playerMusicString(player)
    mbTutorial = []
    mbIntro = []
    sbVoices = []
    mbAwaiting = []
    mbLevel = []
    mbWon = []
    mbLost = []
    sbCorrect = []
    sbIncorrect = []
    sbDoom = []
    sbSFX = []
    stringParts = musicString.split("|")
    for (let value3 of stringParts) {
        thisLetter = value3.charAt(0)
        thisSound2 = value3.substr(2, value3.length - 2)
        if (thisLetter == "T") {
            mbTutorial.push(thisSound2)
        } else if (thisLetter == "N") {
            mbIntro.push(thisSound2)
        } else if (thisLetter == "V") {
            sbVoices.push(thisSound2)
        } else if (thisLetter == "A") {
            mbAwaiting.push(thisSound2)
        } else if (thisLetter == "E") {
            mbLevel.push(thisSound2)
        } else if (thisLetter == "O") {
            mbWon.push(thisSound2)
        } else if (thisLetter == "L") {
            mbLost.push(thisSound2)
        } else if (thisLetter == "C") {
            sbCorrect.push(thisSound2)
        } else if (thisLetter == "I") {
            sbIncorrect.push(thisSound2)
        } else if (thisLetter == "D") {
            sbDoom.push(thisSound2)
        } else if (thisLetter == "S") {
            sbSFX.push(thisSound2)
        }
    }
}
let thisRead = 0
let sbSFX: string[] = []
let sbDoom: string[] = []
let sbIncorrect: string[] = []
let sbCorrect: string[] = []
let mbLost: string[] = []
let mbWon: string[] = []
let mbAwaiting: string[] = []
let sbVoices: string[] = []
let mbIntro: string[] = []
let mbTutorial: string[] = []
let musicString = ""
let thisLetter = ""
let stringParts: string[] = []
let sbHurry: string[] = []
let sbLost: string[] = []
let sbWon: string[] = []
let sbFailure: string[] = []
let sbSuccess: string[] = []
let sbOuch: string[] = []
let sbNay: string[] = []
let sbIntro: string[] = []
let sbYay: string[] = []
let sbName: string[] = []
let soundString = ""
let thisItem = ""
let listOut: string[] = []
let listCopy: string[] = []
let thePotSays = 0
let lineCount = 0
let sbReady: string[] = []
let playlistReady: string[] = []
let thisSound2 = ""
let mbLevel: string[] = []
let playlistLevel: string[] = []
let songNumber = 0
let relativeVolumeB = 0
let relativeVolumeA = 0
Connected.MP3SetPort(Connected.DigitalRJPin.J3)
Connected.execute(Connected.playType.Stop)
Connected.MP3SetPort(Connected.DigitalRJPin.J4)
Connected.execute(Connected.playType.Stop)
relativeVolumeA = 0
relativeVolumeB = 0
songNumber = -1
let volumeA = -1
let volumeB = -1
playlistLevel = []
setSounds("Mario")
setMusic("Mario")
let lastRead = potRead()
PlaySound("Ready")
playMusic("Level")
loops.everyInterval(100, function () {
    thisRead = potRead()
    if (!(isNearly(thisRead, lastRead, 0.01))) {
        lastRead = thisRead
        notLegos.volumeQuickPort(convertToText(30 * (thisRead * relativeVolumeA)), notLegos.DigitalRJPin.J3)
        notLegos.volumeQuickPort(convertToText(30 * (thisRead * relativeVolumeB)), notLegos.DigitalRJPin.J4)
    }
})
