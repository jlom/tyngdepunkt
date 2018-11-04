<template>
    <figure>
    <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 784 586"
        class="parliament">
        <title>
            Plenary chamber of the parliament
        </title>
        <g id="members" fill="#CCC" fill-rule="evenodd" transform="translate(-2)">
            <path class="chart_seat001" :fill="seats(1).color" d="M186.5 568.7V586H159v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 172.7 570.5)"/>
            <path class="chart_seat002" :fill="seats(2).color" d="M148 568.7V586h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 134.2 570.5)"/>
            <path class="chart_seat003" :fill="seats(3).color" d="M109.5 568.7V586H82v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 95.7 570.5)"/>
            <path class="chart_seat004" :fill="seats(4).color" d="M71 568.7V586H43.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 57.2 570.5)"/>
            <path class="chart_seat005" :fill="seats(5).color" d="M32.5 568.7V586H5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 18.7 570.5)"/>
            <path class="chart_seat006" :fill="seats(6).color" d="M186.5 520.7V538H159v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 172.7 522.5)"/>
            <path class="chart_seat007" :fill="seats(7).color" d="M147.5 520.7V538H120v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 133.7 522.5)"/>
            <path class="chart_seat008" :fill="seats(8).color" d="M109.5 520.7V538H82v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 95.7 522.5)"/>
            <path class="chart_seat009" :fill="seats(9).color" d="M70.5 520.7V538H43v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 56.7 522.5)"/>
            <path class="chart_seat010" :fill="seats(10).color" d="M32.5 520.7V538H5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 18.7 522.5)"/>
            <path class="chart_seat011" :fill="seats(11).color" d="M186.5 490.7V508H159v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 172.7 492.5)"/>
            <path class="chart_seat012" :fill="seats(12).color" d="M147.5 490.7V508H120v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 133.7 492.5)"/>
            <path class="chart_seat013" :fill="seats(13).color" d="M109.5 490.7V508H82v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 95.7 492.5)"/>
            <path class="chart_seat014" :fill="seats(14).color" d="M70.5 490.7V508H43v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 56.7 492.5)"/>
            <path class="chart_seat015" :fill="seats(15).color" d="M32.5 490.7V508H5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 18.7 492.5)"/>
            <path class="chart_seat016" :fill="seats(16).color" d="M186.5 446.7V464H159v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 172.7 448.5)"/>
            <path class="chart_seat017" :fill="seats(17).color" d="M147.5 446.7V464H120v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 133.7 448.5)"/>
            <path class="chart_seat018" :fill="seats(18).color" d="M109.5 446.7V464H82v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 95.7 448.5)"/>
            <path class="chart_seat019" :fill="seats(19).color" d="M70.5 446.7V464H43v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 56.7 448.5)"/>
            <path class="chart_seat020" :fill="seats(20).color" d="M32.5 446.7V464H5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 18.7 448.5)"/>
            <path class="chart_seat021" :fill="seats(21).color" d="M186.5 416.7V434H159v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 172.7 418.5)"/>
            <path class="chart_seat022" :fill="seats(22).color" d="M147.5 416.7V434H120v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 133.7 418.5)"/>
            <path class="chart_seat023" :fill="seats(23).color" d="M109.5 416.7V434H82v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 95.7 418.5)"/>
            <path class="chart_seat024" :fill="seats(24).color" d="M70.5 416.7V434H43v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 56.7 418.5)"/>
            <path class="chart_seat025" :fill="seats(25).color" d="M32.5 416.7V434H5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-90 18.7 418.5)"/>
            <path class="chart_seat026" :fill="seats(26).color" d="M109.4 372.2v17.3H81.9v-17.3a13.7 13.7 0 1 1 27.5 0z" transform="rotate(-81 95.7 374)"/>
            <path class="chart_seat027" :fill="seats(27).color" d="M69.5 380.7V398H42v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-81 55.7 382.5)"/>
            <path class="chart_seat028" :fill="seats(28).color" d="M31.5 374.7V392H4v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-81 17.7 376.5)"/>
            <path class="chart_seat029" :fill="seats(29).color" d="M74.5 351.7V369H47v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-81 60.7 353.5)"/>
            <path class="chart_seat030" :fill="seats(30).color" d="M36.5 345.7V363H9v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-81 22.7 347.5)"/>
            <path class="chart_seat031" :fill="seats(31).color" d="M193.5 362.7V380H166v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-68 179.7 364.5)"/>
            <path class="chart_seat032" :fill="seats(32).color" d="M158.5 348.7V366H131v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-68 144.7 350.5)"/>
            <path class="chart_seat033" :fill="seats(33).color" d="M122.5 333.7V351H95v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-68 108.7 335.5)"/>
            <path class="chart_seat034" :fill="seats(34).color" d="M86.5 319.7V337H59v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-68 72.7 321.5)"/>
            <path class="chart_seat035" :fill="seats(35).color" d="M51.5 305.7V323H24v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-68 37.7 307.5)"/>
            <path class="chart_seat036" :fill="seats(36).color" d="M205.5 334.7V352H178v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-68 191.7 336.5)"/>
            <path class="chart_seat037" :fill="seats(37).color" d="M169.5 319.7V337H142v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-68 155.7 321.5)"/>
            <path class="chart_seat038" :fill="seats(38).color" d="M133.5 305.7V323H106v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-68 119.7 307.5)"/>
            <path class="chart_seat039" :fill="seats(39).color" d="M98.5 291.7V309H71v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-68 84.7 293.5)"/>
            <path class="chart_seat040" :fill="seats(40).color" d="M62.5 276.7V294H35v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-68 48.7 278.5)"/>
            <path class="chart_seat041" :fill="seats(41).color" d="M155.9 266.6V284h-27.4v-17.4a13.7 13.7 0 0 1 27.4 0z" transform="rotate(-57 142.2 268.4)"/>
            <path class="chart_seat042" :fill="seats(42).color" d="M116.5 258.7V276H89v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-57 102.7 260.5)"/>
            <path class="chart_seat043" :fill="seats(43).color" d="M84.5 238.7V256H57v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-57 70.7 240.5)"/>
            <path class="chart_seat044" :fill="seats(44).color" d="M132.5 233.7V251H105v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-57 118.7 235.5)"/>
            <path class="chart_seat045" :fill="seats(45).color" d="M101.5 212.7V230H74v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-57 87.7 214.5)"/>
            <path class="chart_seat046" :fill="seats(46).color" d="M232.5 282.7V300H205v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-44 218.7 284.5)"/>
            <path class="chart_seat047" :fill="seats(47).color" d="M207.5 255.7V273H180v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-44 193.7 257.5)"/>
            <path class="chart_seat048" :fill="seats(48).color" d="M180.5 228.7V246H153v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-44 166.7 230.5)"/>
            <path class="chart_seat049" :fill="seats(49).color" d="M154.5 201.7V219H127v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-44 140.7 203.5)"/>
            <path class="chart_seat050" :fill="seats(50).color" d="M129.5 174.7V192H102v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-44 115.7 176.5)"/>
            <path class="chart_seat051" :fill="seats(51).color" d="M255.5 260.7V278H228v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-44 241.7 262.5)"/>
            <path class="chart_seat052" :fill="seats(52).color" d="M229.5 233.7V251H202v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-44 215.7 235.5)"/>
            <path class="chart_seat053" :fill="seats(53).color" d="M203.5 207.7V225H176v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-44 189.7 209.5)"/>
            <path class="chart_seat054" :fill="seats(54).color" d="M177.5 179.7V197H150v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-44 163.7 181.5)"/>
            <path class="chart_seat055" :fill="seats(55).color" d="M151.5 152.7V170H124v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-44 137.7 154.5)"/>
            <path class="chart_seat056" :fill="seats(56).color" d="M125.5 125.7V143H98v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-44 111.7 127.5)"/>
            <path class="chart_seat057" :fill="seats(57).color" d="M239.9 179.2v17.3h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-34 226.1 181)"/>
            <path class="chart_seat058" :fill="seats(58).color" d="M205.5 156.7V174H178v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-34 191.7 158.5)"/>
            <path class="chart_seat059" :fill="seats(59).color" d="M184.5 124.7V142H157v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-34 170.7 126.5)"/>
            <path class="chart_seat060" :fill="seats(60).color" d="M163.5 92.7V110H136V92.7a13.7 13.7 0 1 1 27.5 0z" transform="rotate(-34 149.7 94.5)"/>
            <path class="chart_seat061" :fill="seats(61).color" d="M231.5 138.7V156H204v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-34 217.7 140.5)"/>
            <path class="chart_seat062" :fill="seats(62).color" d="M210.5 106.7V124H183v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-34 196.7 108.5)"/>
            <path class="chart_seat063" :fill="seats(63).color" d="M309.5 228.7V246H282v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-24 295.7 230.5)"/>
            <path class="chart_seat064" :fill="seats(64).color" d="M293.5 193.7V211H266v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-24 279.7 195.5)"/>
            <path class="chart_seat065" :fill="seats(65).color" d="M278.5 158.7V176H251v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-24 264.7 160.5)"/>
            <path class="chart_seat066" :fill="seats(66).color" d="M262.5 122.7V140H235v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-24 248.7 124.5)"/>
            <path class="chart_seat067" :fill="seats(67).color" d="M246.5 87.7V105H219V87.7a13.7 13.7 0 1 1 27.5 0z" transform="rotate(-24 232.7 89.5)"/>
            <path class="chart_seat068" :fill="seats(68).color" d="M230.5 52.7V70H203V52.7a13.7 13.7 0 1 1 27.5 0z" transform="rotate(-24 216.7 54.5)"/>
            <path class="chart_seat069" :fill="seats(69).color" d="M337.5 215.7V233H310v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-24 323.7 217.5)"/>
            <path class="chart_seat070" :fill="seats(70).color" d="M321.5 180.7V198H294v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-24 307.7 182.5)"/>
            <path class="chart_seat071" :fill="seats(71).color" d="M306.5 145.7V163H279v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-24 292.7 147.5)"/>
            <path class="chart_seat072" :fill="seats(72).color" d="M290.5 110.7V128H263v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-24 276.7 112.5)"/>
            <path class="chart_seat073" :fill="seats(73).color" d="M274.5 74.7V92H247V74.7a13.7 13.7 0 1 1 27.5 0z" transform="rotate(-24 260.7 76.5)"/>
            <path class="chart_seat074" :fill="seats(74).color" d="M259.5 40.7V58H232V40.7a13.7 13.7 0 1 1 27.5 0z" transform="rotate(-24 245.7 42.5)"/>
            <path class="chart_seat075" :fill="seats(75).color" d="M347.2 135.5v17.3h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="rotate(-10 333.5 137.3)"/>
            <path class="chart_seat076" :fill="seats(76).color" d="M325.5 99.7V117H298V99.7a13.7 13.7 0 1 1 27.5 0z" transform="rotate(-10 311.7 101.5)"/>
            <path class="chart_seat077" :fill="seats(77).color" d="M318.5 61.7V79H291V61.7a13.7 13.7 0 1 1 27.5 0z" transform="rotate(-10 304.7 63.5)"/>
            <path class="chart_seat078" :fill="seats(78).color" d="M355.5 94.7V112H328V94.7a13.7 13.7 0 1 1 27.5 0z" transform="rotate(-10 341.7 96.5)"/>
            <path class="chart_seat079" :fill="seats(79).color" d="M348.5 56.7V74H321V56.7a13.7 13.7 0 1 1 27.5 0z" transform="rotate(-10 334.7 58.5)"/>
            <path class="chart_seat080" :fill="seats(80).color" d="M392.5 206.7V224H365v-17.3a13.7 13.7 0 0 1 27.5 0z"/>
            <path class="chart_seat081" :fill="seats(81).color" d="M392.5 168.7V186H365v-17.3a13.7 13.7 0 0 1 27.5 0z"/>
            <path class="chart_seat082" :fill="seats(82).color" d="M392.5 129.7V147H365v-17.3a13.7 13.7 0 0 1 27.5 0z"/>
            <path class="chart_seat083" :fill="seats(83).color" d="M392.5 90.7V108H365V90.7a13.7 13.7 0 1 1 27.5 0z"/>
            <path class="chart_seat084" :fill="seats(84).color" d="M392.5 52.7V70H365V52.7a13.7 13.7 0 1 1 27.5 0z"/>
            <path class="chart_seat085" :fill="seats(85).color" d="M392.5 13.7V31H365V13.7a13.7 13.7 0 1 1 27.5 0z"/>
            <path class="chart_seat086" :fill="seats(86).color" d="M423 13.7V31h-27.5V13.7a13.7 13.7 0 0 1 27.5 0z" transform="matrix(-1 0 0 1 818.5 0)"/>
            <path class="chart_seat087" :fill="seats(87).color" d="M423 52.7V70h-27.5V52.7a13.7 13.7 0 0 1 27.5 0z" transform="matrix(-1 0 0 1 818.5 0)"/>
            <path class="chart_seat088" :fill="seats(88).color" d="M423 90.7V108h-27.5V90.7a13.7 13.7 0 0 1 27.5 0z" transform="matrix(-1 0 0 1 818.5 0)"/>
            <path class="chart_seat089" :fill="seats(89).color" d="M423 129.7V147h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(-1 0 0 1 818.5 0)"/>
            <path class="chart_seat090" :fill="seats(90).color" d="M423 168.7V186h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(-1 0 0 1 818.5 0)"/>
            <path class="chart_seat091" :fill="seats(91).color" d="M423 206.7V224h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(-1 0 0 1 818.5 0)"/>
            <path class="chart_seat092" :fill="seats(92).color" d="M467 56.7V74h-27.5V56.7a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-10 0 5239.5)"/>
            <path class="chart_seat093" :fill="seats(93).color" d="M460 94.7V112h-27.5V94.7a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-10 0 5197.5)"/>
            <path class="chart_seat094" :fill="seats(94).color" d="M497 61.7V79h-27.5V61.7a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-10 0 5587.4)"/>
            <path class="chart_seat095" :fill="seats(95).color" d="M490 99.7V117h-27.5V99.7a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-10 0 5545.4)"/>
            <path class="chart_seat096" :fill="seats(96).color" d="M468.3 135.5v17.3h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-10 0 5332.6)"/>
            <path class="chart_seat097" :fill="seats(97).color" d="M556 40.7V58h-27.5V40.7a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-24 0 2593.7)"/>
            <path class="chart_seat098" :fill="seats(98).color" d="M541 74.7V92h-27.5V74.7a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-24 0 2557.1)"/>
            <path class="chart_seat099" :fill="seats(99).color" d="M525 110.7V128h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-24 0 2517.9)"/>
            <path class="chart_seat100" :fill="seats(100).color" d="M509 145.7V163h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-24 0 2477.6)"/>
            <path class="chart_seat101" :fill="seats(101).color" d="M494 180.7V198h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-24 0 2442)"/>
            <path class="chart_seat102" :fill="seats(102).color" d="M478 215.7V233h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-24 0 2401.8)"/>
            <path class="chart_seat103" :fill="seats(103).color" d="M585 52.7V70h-27.5V52.7a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-24 0 2742.2)"/>
            <path class="chart_seat104" :fill="seats(104).color" d="M569 87.7V105h-27.5V87.7a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-24 0 2701.9)"/>
            <path class="chart_seat105" :fill="seats(105).color" d="M553 122.7V140h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-24 0 2661.6)"/>
            <path class="chart_seat106" :fill="seats(106).color" d="M537 158.7V176h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-24 0 2622.3)"/>
            <path class="chart_seat107" :fill="seats(107).color" d="M522 193.7V211h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-24 0 2586.8)"/>
            <path class="chart_seat108" :fill="seats(108).color" d="M506 228.7V246h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-24 0 2546.5)"/>
            <path class="chart_seat109" :fill="seats(109).color" d="M605 106.7V124h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-34 0 2042.5)"/>
            <path class="chart_seat110" :fill="seats(110).color" d="M584 138.7V156h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-34 0 2005.8)"/>
            <path class="chart_seat111" :fill="seats(111).color" d="M652 92.7V110h-27.5V92.7a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-34 0 2182.2)"/>
            <path class="chart_seat112" :fill="seats(112).color" d="M631 124.7V142h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-34 0 2145.5)"/>
            <path class="chart_seat113" :fill="seats(113).color" d="M610 156.7V174h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-34 0 2108.8)"/>
            <path class="chart_seat114" :fill="seats(114).color" d="M575.6 179.2v17.3H548v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-34 0 2018.8)"/>
            <path class="chart_seat115" :fill="seats(115).color" d="M690 125.7V143h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-44 0 1801.4)"/>
            <path class="chart_seat116" :fill="seats(116).color" d="M664 152.7V170h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-44 0 1764)"/>
            <path class="chart_seat117" :fill="seats(117).color" d="M638 179.7V197h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-44 0 1726.7)"/>
            <path class="chart_seat118" :fill="seats(118).color" d="M612 207.7V225h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-44 0 1690.3)"/>
            <path class="chart_seat119" :fill="seats(119).color" d="M586 233.7V251h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-44 0 1652)"/>
            <path class="chart_seat120" :fill="seats(120).color" d="M560 260.7V278h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-44 0 1614.6)"/>
            <path class="chart_seat121" :fill="seats(121).color" d="M686 174.7V192h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-44 0 1840.5)"/>
            <path class="chart_seat122" :fill="seats(122).color" d="M661 201.7V219h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-44 0 1805.6)"/>
            <path class="chart_seat123" :fill="seats(123).color" d="M635 228.7V246h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-44 0 1768.2)"/>
            <path class="chart_seat124" :fill="seats(124).color" d="M608 255.7V273h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-44 0 1728.4)"/>
            <path class="chart_seat125" :fill="seats(125).color" d="M583 282.7V300h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-44 0 1693.5)"/>
            <path class="chart_seat126" :fill="seats(126).color" d="M715 211.7V229h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-57 0 1505.1)"/>
            <path class="chart_seat127" :fill="seats(127).color" d="M732 237.7V255h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-57 0 1562.4)"/>
            <path class="chart_seat128" :fill="seats(128).color" d="M692 245.7V263h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-57 0 1496.7)"/>
            <path class="chart_seat129" :fill="seats(129).color" d="M661 265.7V283h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-57 0 1459.6)"/>
            <path class="chart_seat130" :fill="seats(130).color" d="M753 276.7V294h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-68 0 1374.5)"/>
            <path class="chart_seat131" :fill="seats(131).color" d="M717 291.7V309h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-68 0 1336.2)"/>
            <path class="chart_seat132" :fill="seats(132).color" d="M682 305.7V323h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-68 0 1298.3)"/>
            <path class="chart_seat133" :fill="seats(133).color" d="M646 319.7V337h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-68 0 1258.9)"/>
            <path class="chart_seat134" :fill="seats(134).color" d="M610 334.7V352h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-68 0 1220.5)"/>
            <path class="chart_seat135" :fill="seats(135).color" d="M764 305.7V323h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-68 0 1419.8)"/>
            <path class="chart_seat136" :fill="seats(136).color" d="M729 319.7V337h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-68 0 1382)"/>
            <path class="chart_seat137" :fill="seats(137).color" d="M693 333.7V351h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-68 0 1342.6)"/>
            <path class="chart_seat138" :fill="seats(138).color" d="M657 348.7V366h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-68 0 1304.2)"/>
            <path class="chart_seat139" :fill="seats(139).color" d="M622 362.7V380h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-68 0 1266.3)"/>
            <path class="chart_seat140" :fill="seats(140).color" d="M779 345.7V363h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-81 0 1243.5)"/>
            <path class="chart_seat141" :fill="seats(141).color" d="M741 351.7V369h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-81 0 1205)"/>
            <path class="chart_seat142" :fill="seats(142).color" d="M784 374.7V392h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-81 0 1278.4)"/>
            <path class="chart_seat143" :fill="seats(143).color" d="M746 380.7V398h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="scale(-1 1) rotate(-81 0 1239.9)"/>
            <path class="chart_seat144" :fill="seats(144).color" d="M706 372.2v17.3h-27.4v-17.3a13.7 13.7 0 1 1 27.5 0z" transform="scale(-1 1) rotate(-81 0 1184.6)"/>
            <path class="chart_seat145" :fill="seats(145).color" d="M783 416.7V434h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1187.8 1187.8)"/>
            <path class="chart_seat146" :fill="seats(146).color" d="M745 416.7V434h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1149.8 1149.8)"/>
            <path class="chart_seat147" :fill="seats(147).color" d="M706 416.7V434h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1110.8 1110.8)"/>
            <path class="chart_seat148" :fill="seats(148).color" d="M668 416.7V434h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1072.8 1072.8)"/>
            <path class="chart_seat149" :fill="seats(149).color" d="M629 416.7V434h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1033.8 1033.8)"/>
            <path class="chart_seat150" :fill="seats(150).color" d="M783 446.7V464h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1217.8 1217.8)"/>
            <path class="chart_seat151" :fill="seats(151).color" d="M745 446.7V464h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1179.8 1179.8)"/>
            <path class="chart_seat152" :fill="seats(152).color" d="M706 446.7V464h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1140.8 1140.8)"/>
            <path class="chart_seat153" :fill="seats(153).color" d="M668 446.7V464h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1102.8 1102.8)"/>
            <path class="chart_seat154" :fill="seats(154).color" d="M629 446.7V464h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1063.8 1063.8)"/>
            <path class="chart_seat155" :fill="seats(155).color" d="M783 490.7V508h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1261.8 1261.8)"/>
            <path class="chart_seat156" :fill="seats(156).color" d="M745 490.7V508h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1223.8 1223.8)"/>
            <path class="chart_seat157" :fill="seats(157).color" d="M706 490.7V508h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1184.8 1184.8)"/>
            <path class="chart_seat158" :fill="seats(158).color" d="M668 490.7V508h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1146.8 1146.8)"/>
            <path class="chart_seat159" :fill="seats(159).color" d="M629 490.7V508h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1107.8 1107.8)"/>
            <path class="chart_seat160" :fill="seats(160).color" d="M783 520.7V538h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1291.8 1291.8)"/>
            <path class="chart_seat161" :fill="seats(161).color" d="M745 520.7V538h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1253.8 1253.8)"/>
            <path class="chart_seat162" :fill="seats(162).color" d="M706 520.7V538h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1214.8 1214.8)"/>
            <path class="chart_seat163" :fill="seats(163).color" d="M668 520.7V538h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1176.8 1176.8)"/>
            <path class="chart_seat164" :fill="seats(164).color" d="M629 520.7V538h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1137.8 1137.8)"/>
            <path class="chart_seat165" :fill="seats(165).color" d="M783 568.7V586h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1339.8 1339.8)"/>
            <path class="chart_seat166" :fill="seats(166).color" d="M744.5 568.7V586H717v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1301.3 1301.3)"/>
            <path class="chart_seat167" :fill="seats(167).color" d="M706 568.7V586h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1262.8 1262.8)"/>
            <path class="chart_seat168" :fill="seats(168).color" d="M667.5 568.7V586H640v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1224.3 1224.3)"/>
            <path class="chart_seat169" :fill="seats(169).color" d="M629 568.7V586h-27.5v-17.3a13.7 13.7 0 0 1 27.5 0z" transform="matrix(0 -1 -1 0 1185.8 1185.8)"/>
        </g>
    </svg>
    </figure>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';

@Component({
    computed: {
        ...mapState(['parliament', 'parties']),
        ...mapGetters(['seats']),
    },
})
export default class SeatChart extends Vue {}
</script>


<style scoped lang="sass">
figure
    margin: 0
.parliament
    width: 23rem
</style>
