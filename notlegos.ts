// NotLegos Blocks

//% block="Not LEGOs" color=#0031AF weight=1000 icon="\uf6ec"
//% groups=['Display', 'Laser', 'others']
namespace notLegos {


    /*
      * Retrieve the Player's Sound String
      */
    //% blockId=notlegos_player_soundstring
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=101
    //% block="Retrieve sound string for $player"
    export function playerSoundString(player: string) {
        let soundString = ""
        if (player == "Mario") {
            soundString = "A_21_1_100_1.5|A_21_2_100_1|I_21_3_100_3.3|A_21_4_100_1.9|A_21_5_100_2.1|I_21_6_100_1.8|I_21_7_100_1.8|R_21_8_100_0.6|R_21_9_100_1.3|R_21_10_100_1.1|R_21_11_100_0.6|R_21_12_100_0.8|R_21_13_100_1.6|R_21_14_100_1.3|R_21_15_100_1.2|R_21_16_100_1.1|R_21_17_100_1.3|R_21_18_100_1|Y_21_19_100_0.2|Y_21_20_100_0.2|Y_21_21_100_0.3|Y_21_22_100_0.5|Y_21_23_100_0.6|Y_21_24_100_0.6|Y_21_25_100_0.6|Y_21_26_100_0.6|Y_21_27_100_0.6|Y_21_28_100_0.6|Y_21_29_100_0.7|Y_21_30_100_0.7|Y_21_31_100_0.7|Y_21_32_100_0.7|Y_21_33_100_0.7|Y_21_34_100_0.8|Y_21_35_100_0.8|Y_21_36_100_0.8|Y_21_37_100_0.8|Y_21_38_100_0.8|Y_21_39_100_0.8|Y_21_40_100_0.9|Y_21_41_100_0.9|Y_21_42_100_0.9|Y_21_43_100_0.9|Y_21_44_100_0.9|Y_21_45_100_0.9|Y_21_46_100_0.9|Y_21_47_100_1|Y_21_48_100_1|Y_21_49_100_1|Y_21_50_100_1|Y_21_51_100_1.1|Y_21_52_100_1.1|Y_21_53_100_1.1|Y_21_54_100_1.2|Y_21_55_100_1.2|Y_21_56_100_1.2|Y_21_57_100_1.2|Y_21_58_100_1.3|Y_21_59_100_1.3|Y_21_60_100_1.3|Y_21_61_100_1.4|Y_21_62_100_1.4|S_21_63_100_1|S_21_64_100_1.6|S_21_65_100_1.7|S_21_66_100_1.7|S_21_67_100_1.9|S_21_68_100_2.1|S_21_69_100_2.2|S_21_70_100_2.4|S_21_71_100_2.4|S_21_72_100_2.5|W_21_73_100_1.8|W_21_74_100_2|W_21_75_100_2.2|W_21_76_100_2.6|W_21_77_100_2.9"
        }
        return soundString
    }

    /*
      * Retrieve the Player's Music String
      */
    //% blockId=notlegos_music_soundstring
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=101
    //% block="Retrieve music string for $player"
    export function playerMusicString(player: string) {
        let musicString = ""
        if (player == "Mario") {
            musicString = "E_4_1_100_128|E_4_3_100_142|E_4_5_100_111|E_4_6_100_141|E_4_9_100_126|E_4_11_100_132|E_4_15_100_119|E_4_16_100_146|E_4_18_100_120|E_4_20_100_143|E_4_22_100_142|E_4_23_100_112|E_4_24_100_138|E_4_25_100_139|E_4_26_100_111|E_4_27_100_116|E_4_28_100_129|E_4_31_100_98|E_4_32_100_146|E_4_33_100_177|E_4_34_100_82|E_4_36_100_160|E_4_38_100_321|E_4_39_100_211|E_4_41_100_134|E_4_42_100_183|E_4_43_100_124|E_4_44_100_261|E_4_45_100_91|E_4_46_100_138|E_4_49_100_207|E_4_50_100_41|E_4_51_100_307|E_4_52_100_202|E_4_53_100_194|E_4_56_100_209|E_4_57_100_195|E_4_58_100_180|E_4_60_100_198|E_4_61_100_466|E_4_63_100_78|E_4_66_100_139|E_4_67_100_224|E_4_68_100_325|E_4_73_100_348|E_4_76_100_338|E_4_77_100_196|E_4_78_100_113|E_4_82_100_289|E_4_83_100_123|E_4_84_100_260|E_4_86_100_126|E_4_93_100_121|E_4_97_100_59|E_4_98_100_890|E_4_99_100_507|E_4_100_100_118|E_4_101_100_156|E_4_102_100_890|E_4_103_100_70|E_4_104_100_216|E_4_105_100_140|E_4_106_100_490|E_4_107_100_147|E_4_108_100_147|E_4_109_100_317|E_4_110_100_158|E_4_111_100_488|E_4_112_100_80|E_4_113_100_152|E_4_114_100_127|E_4_116_100_122|E_4_118_100_106|E_4_123_100_143|E_4_124_100_36|E_4_125_100_164|E_4_127_100_282|E_4_128_100_311|E_4_129_100_123|E_4_130_100_187|E_4_131_100_62|E_4_132_100_277|E_4_133_100_130|E_4_134_100_112|E_4_135_100_105|E_4_139_100_126|E_4_141_100_176|E_4_142_100_135|E_4_143_100_126|E_4_144_100_144|E_4_145_100_140|E_4_146_100_133|E_4_149_100_167|E_4_150_100_120|E_4_151_100_348|E_4_155_100_226|E_4_157_100_164|E_4_158_100_144|E_4_159_100_104|E_4_161_100_274|E_4_162_100_87|E_4_163_100_126|E_4_164_100_118|E_4_165_100_194|E_4_166_100_135|E_4_167_100_50|E_4_168_100_109|E_4_169_100_319|E_4_170_100_133|E_4_171_100_508|E_4_172_100_91|E_4_173_100_138|E_4_176_100_120|E_4_177_100_81|E_4_178_100_150|E_4_179_100_153|E_4_180_100_104|E_4_181_100_112"
        }
        return musicString
    }
    ///////////////////////////////////////////////////////MP3
    let Start_Byte = 0x7E
    let Version_Byte = 0xFF
    let Command_Length = 0x06
    let End_Byte = 0xEF
    let Acknowledge = 0x00
    let CMD = 0x00
    let para1 = 0x00
    let para2 = 0x00
    let highByte = 0x00
    let lowByte = 0x00
    let dataArr: number[] = [Start_Byte, Version_Byte, Command_Length, CMD, Acknowledge, para1, para2, highByte, lowByte, End_Byte]
    /*
    * Play status selection button list
    */

    function mp3_sendData(): void {
        let myBuff = pins.createBuffer(10);
        for (let i = 0; i < 10; i++) {
            myBuff.setNumber(NumberFormat.UInt8BE, i, dataArr[i])
        }
        serial.writeBuffer(myBuff)
        basic.pause(100)
    }
    function mp3_checkSum(): void {
        let total = 0;
        for (let i = 1; i < 7; i++) {
            total += dataArr[i]
        }
        total = 65536 - total
        lowByte = total & 0xFF;
        highByte = total >> 8;
        dataArr[7] = highByte
        dataArr[8] = lowByte
    }

    //% blockId="setLoopFolder" block="loop play all the MP3s in the folder:$folderNum"
    //% folderNum.defl="01"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function setLoopFolder(folderNum: string): void {
        CMD = 0x17
        para1 = 0
        para2 = parseInt(folderNum)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
    }

    //% blockId="folderPlay" 
    //% block="play the mp3 in the folder:$folderNum filename:$fileNum || repeatList: $myAns"
    //% folderNum.defl="01" fileNum.defl="001"
    //% myAns.shadow="toggleYesNo"
    //% expandableArgumentMode="toggle"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function folderPlay(folderNum: string, fileNum: string, myAns: boolean = false): void {
        CMD = 0x0F
        para1 = parseInt(folderNum)
        para2 = parseInt(fileNum)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
        if (myAns)
            execute(0x19)
    }

    //% blockId="playFolderFilePort" 
    //% block="play the mp3 in the folder:$folderNum filename:$fileNum usingPin:$Rjpin"
    //% fileNum.defl="01" folderNum.defl="01"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function playFolderFilePort(folderNum: string, fileNum: string, Rjpin: DigitalRJPin): void {
        let pin = RJpin_to_Serial(Rjpin)


        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )
        CMD = 15
        para1 = parseInt(folderNum)
        para2 = parseInt(fileNum)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
    }

    //% blockId="playFolderFileVolumePort" 
    //% block="play the mp3 in the folder:$folderNum filename:$fileNum with volume:$theVolume usingPin:$Rjpin"
    //% fileNum.defl="01" theVolume.defl="10" folderNum.defl="01"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function playFolderFileVolumePort(folderNum: string, fileNum: string, theVolume: string, Rjpin: DigitalRJPin): void {

        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )

        let volume = parseInt(theVolume)
        if (volume > 25) {
            volume = 25
        }
        CMD = 6
        para1 = 0
        para2 = volume
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
        basic.pause(200)

        CMD = 15
        para1 = parseInt(folderNum)
        para2 = parseInt(fileNum)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()


    }

    //% blockId="playLength" 
    //% block="playsFor playString:$soundString with volumeFactor:$potReading using pin:$Rjpin"
    //% soundString.defl="1_1_25_100" thePot.defl=".25"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function playsFor(soundString: string, potReading: number, Rjpin: DigitalRJPin): number {
        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )

        stringParts = soundString.split("_")
        let theFolder = stringParts[0]
        let theFile = stringParts[1]
        let theVolume = stringParts[2]
        let theLength = stringParts[3]
        let volumeFactor = Math.round(pins.map(parseFloat(theVolume) * potReading,0,100,0,30))
        if (volumeFactor > 30) {
            volumeFactor = 30
        }
        
        CMD = 6
        para1 = 0
        para2 = volumeFactor
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
        basic.pause(50)

        CMD = 15
        para1 = parseInt(theFolder)
        para2 = parseInt(theFile)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()

        return parseFloat(theLength)*1000+350
    }


    //% blockId="volumePort" 
    //% block="set MP3 volume:$theVolume usingPin:$Rjpin"
    //% theVolume.defl="10"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function volumePort(theVolume: string, Rjpin: DigitalRJPin): void {
        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )
        let volume = parseInt(theVolume)
        if (volume > 30) {
            volume = 30
        }
        CMD = 6
        para1 = 0
        para2 = volume
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
        basic.pause(50)
    }


    //% blockId="volumeQuickPort" 
    //% block="quickly set MP3 volume:$theVolume using Pin:$Rjpin"
    //% theVolume.defl="10"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function volumeQuickPort(theVolume: string, Rjpin: DigitalRJPin): void {
        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )
        let volume = parseInt(theVolume)
        if (volume > 30) {
            volume = 30
        }
        CMD = 6
        para1 = 0
        para2 = volume
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
    }


    function mp3_sendDataFast(): void {
        let myBuff = pins.createBuffer(10);
        for (let i = 0; i < 10; i++) {
            myBuff.setNumber(NumberFormat.UInt8BE, i, dataArr[i])
        }
        serial.writeBuffer(myBuff)
    }


    //% blockId="setTracking" 
    //% block="play the mp3 in order of:%tracking || repeatList: $myAns"
    //% myAns.shadow="toggleYesNo"
    //% tracking.defl=1
    //% expandableArgumentMode="toggle"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function setTracking(tracking: number, myAns: boolean = false): void {
        CMD = 0x03
        para1 = 0x00
        para2 = tracking
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
        execute(0x0D)
        if (myAns)
            execute(0x19)
    }
    //% blockId=MP3execute block="Set MP3 execute procedure:%myType"
    //% myType.fieldEditor="gridpicker"
    //% myType.fieldOptions.columns=2
    //% subcategory=Excute group="MP3" color=#EA5532
    export function execute(myType: playType): void {
        CMD = myType
        para1 = 0x00
        para2 = 0x00
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
    }
    //% blockId="setVolume" block="Set volume(0~25):%volume"
    //% volume.min=0 volume.max=25
    //% subcategory=Excute group="MP3" color=#EA5532
    export function setVolume(volume: number): void {
        if (volume > 25) {
            volume = 25
        }
        CMD = 0x06
        para1 = 0
        para2 = volume
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
    }
    //% blockId=MP3setPort block="Set the MP3 port to %Rjpin"
    //% Rjpin.fieldEditor="gridpicker"
    //% Rjpin.fieldOptions.columns=2
    //% subcategory=Excute group="MP3" color=#EA5532
    export function MP3SetPort(Rjpin: DigitalRJPin): void {
        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )
        setVolume(25)
    }

    /*
     * Toggle a Laser (or somesuch)
     */
    //% blockId=notlegos_laser_toggle
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=100
    //% block="Laser %Rjpin toggle $laserState with brightness %laserBrightness"
    //% Rjpin.fieldEditor="gridpicker" 
    //% Rjpin.fieldOptions.columns=2
    //% laserBrightness.min=0 laserBrightness.max=1023
    //% laserState.shadow="toggleOnOff"
    export function laserToggle(Rjpin: DigitalRJPin, laserState: boolean, laserBrightness: number = 1023): void {
        let pin = AnalogPin.P1
        pin = RJpin_to_digital(Rjpin)
        if (laserState) {
            pins.analogWritePin(pin, laserBrightness)
        }
        else {
            pins.analogWritePin(pin, 0)
        }
    }

    /*
     * Pulse a Laser (or somesuch)
     */
    //% blockId=notlegos_laser_pulse
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=99
    //% block="Laser %Rjpin pulse for %pulseDuration milliseconds with brightness %laserBrightness"
    //% Rjpin.fieldEditor="gridpicker" 
    //% Rjpin.fieldOptions.columns=2
    //% laserBrightness.min=0 begBrightness.max=1023
    //% pulseDuration.min=100 pulseDuration.max=10000
    //% inlineInputMode=inline
    export function laserPulse(Rjpin: DigitalRJPin, pulseDuration: number=500, laserBrightness: number = 1023): void {
        let pin = AnalogPin.P1
        pin = RJpin_to_digital(Rjpin)
        pins.analogWritePin(pin, laserBrightness)
        basic.pause(pulseDuration-3)
        pins.analogWritePin(pin, 0)
    }
    

    /*
     * Fade a Laser (or somesuch)
     */
    //% blockId=notlegos_laser_fade
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=98
    //% block="Laser %Rjpin fade over %pulseDuration milliseconds from brightness %begBrightness to brightness %endBrightness"
    //% Rjpin.fieldEditor="gridpicker" 
    //% Rjpin.fieldOptions.columns=2
    //% begBrightness.min=0 begBrightness.max=1023
    //% endBrightness.min=0 endBrightness.max=1023
    //% pulseDuration.min=100 pulseDuration.max=10000
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=inline
    export function laserFade(Rjpin: DigitalRJPin, pulseDuration: number = 500, begBrightness: number = 0, endBrightness: number = 1023): void {
        let pin = AnalogPin.P1
        pin = RJpin_to_digital(Rjpin)
        let analogStep = 0
        let laserLevel = 0
        let pulseHold = 10
        let stepCount = Math.floor((pulseDuration - 10) / (pulseHold + 2))
        if (begBrightness == endBrightness) {
            laserLevel = begBrightness
            pins.analogWritePin(pin, laserLevel)
            basic.pause(pulseDuration)
        } else if (begBrightness <= endBrightness) {
            analogStep = (endBrightness - begBrightness) / stepCount
            laserLevel = begBrightness
            while (laserLevel <= endBrightness) {
                pins.analogWritePin(pin, laserLevel)
                laserLevel = laserLevel + analogStep
                basic.pause(pulseHold)
            }
        } else {
            analogStep = (begBrightness - endBrightness) / stepCount
            laserLevel = begBrightness
            while (laserLevel >= endBrightness) {
                pins.analogWritePin(pin, laserLevel)
                laserLevel = laserLevel - analogStep
                basic.pause(pulseHold)
            }
        }
    }


    function RJpin_to_analog(Rjpin: AnalogRJPin): any {
        let pin = AnalogPin.P1
        switch (Rjpin) {
            case AnalogRJPin.J1:
                pin = AnalogPin.P1
                break;
            case AnalogRJPin.J2:
                pin = AnalogPin.P2
                break;
        }
        return pin
    }
    
    function RJpin_to_digital(Rjpin: DigitalRJPin): any {
        let pin = DigitalPin.P1
        switch (Rjpin) {
            case DigitalRJPin.J1:
                pin = DigitalPin.P8
                break;
            case DigitalRJPin.J2:
                pin = DigitalPin.P12
                break;
            case DigitalRJPin.J3:
                pin = DigitalPin.P14
                break;
            case DigitalRJPin.J4:
                pin = DigitalPin.P16
                break;
            case DigitalRJPin.J5:
                pin = DigitalPin.P11
                break;
            case DigitalRJPin.P0:
                pin = DigitalPin.P0
                break;
            case DigitalRJPin.P1:
                pin = DigitalPin.P1
                break;
            case DigitalRJPin.P2:
                pin = DigitalPin.P2
                break;
            case DigitalRJPin.P3:
                pin = DigitalPin.P3
                break;
            case DigitalRJPin.P4:
                pin = DigitalPin.P4
                break;
            case DigitalRJPin.P4:
                pin = DigitalPin.P4
                break;
            case DigitalRJPin.P5:
                pin = DigitalPin.P5
                break;
            case DigitalRJPin.P6:
                pin = DigitalPin.P6
                break;
            case DigitalRJPin.P7:
                pin = DigitalPin.P7
                break;
            case DigitalRJPin.P8:
                pin = DigitalPin.P8
                break;
            case DigitalRJPin.P9:
                pin = DigitalPin.P9
                break;
            case DigitalRJPin.P10:
                pin = DigitalPin.P10
                break;
            case DigitalRJPin.P11:
                pin = DigitalPin.P11
                break;
            case DigitalRJPin.P12:
                pin = DigitalPin.P12
                break;
            case DigitalRJPin.P13:
                pin = DigitalPin.P13
                break;
            case DigitalRJPin.P14:
                pin = DigitalPin.P14
                break;
            case DigitalRJPin.P15:
                pin = DigitalPin.P15
                break;
            case DigitalRJPin.P16:
                pin = DigitalPin.P16
                break;
        }
        return pin
    }

    function RJpin_to_Serial(Rjpin: DigitalRJPin): any {
        let pin = SerialPin.USB_TX
        switch (Rjpin) {
            case DigitalRJPin.J1:
                pin = SerialPin.P8
                break;
            case DigitalRJPin.J2:
                pin = SerialPin.P12
                break;
            case DigitalRJPin.J3:
                pin = SerialPin.P14
                break;
            case DigitalRJPin.J4:
                pin = SerialPin.P16
                break;
            case DigitalRJPin.P0:
                pin = SerialPin.P0
                break;
            case DigitalRJPin.P1:
                pin = SerialPin.P1
                break;
            case DigitalRJPin.P2:
                pin = SerialPin.P2
                break;
            case DigitalRJPin.P8:
                pin = SerialPin.P8
                break;
            case DigitalRJPin.P12:
                pin = SerialPin.P12
                break;
            case DigitalRJPin.P13:
                pin = SerialPin.P13
                break;
            case DigitalRJPin.P14:
                pin = SerialPin.P14
                break;
            case DigitalRJPin.P15:
                pin = SerialPin.P15
                break;
            case DigitalRJPin.P16:
                pin = SerialPin.P16
                break;
        }
        return pin
    }




    ///////////////////////////////enum
    export enum DigitalRJPin {
        //% block="J1"
        J1,
        //% block="J2"
        J2,
        //% block="J3"
        J3,
        //% block="J4"
        J4,
        //% block="J5"
        J5,
        //% block="P0"
        P0,
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P3"
        P3,
        //% block="P4"
        P4,
        //% block="P5"
        P5,
        //% block="P6"
        P6,
        //% block="P7"
        P7,
        //% block="P8"
        P8,
        //% block="P9"
        P9,
        //% block="P10"
        P10,
        //% block="P11"
        P11,
        //% block="P12"
        P12,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
    }




    
    export enum AnalogRJPin {
        //% block="J1"
        J1,
        //% block="J2"
        J2
    }

    export enum playType {
        //% block="Play"
        Play = 0x0D,
        //% block="Stop"
        Stop = 0x16,
        //% block="PlayNext"
        PlayNext = 0x01,
        //% block="PlayPrevious"
        PlayPrevious = 0x02,
        //% block="Pause"
        Pause = 0x0E
    }




}








    