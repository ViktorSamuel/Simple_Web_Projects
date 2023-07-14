const events = {
    competitionName : [
        "I. KP Seniori",
        "I. KP Seniori",
        "I. KP Seniori",

        "M SR dlhé trate",
        "M SR dlhé trate",

        "Medzinárodná regata juniorov/U23",
        "Medzinárodná regata juniorov/U23",

        "KP juniori",

        "Veľká cena Komárna",
        "Veľká cena Komárna",

        " Pohár SNP",
        " Pohár SNP",

        "Trenčianska regata",
        "Trenčianska regata",

        "Novácka päťstovka",
        "Novácka päťstovka",

        "Samaria Cup & Memoriál V. Gálisa",
        "Samaria Cup & Memoriál V. Gálisa",

        "Pohár Interu",
        "Pohár Interu",

        "M SR krátke trate",
        "M SR krátke trate",
        "M SR krátke trate",

        "III. KP na MS seniori",
        "III. KP na MS seniori",

        "Pohár Slávie UK - Memoriál Jana Matochu",

        "Dunajský maratón",

        "M SR maratón",

        "Hargašov memoriál",

        "Rozlúčkové preteky",
    ],
    competitionDate : [
        //seniori
        new Date(2021, 3, 30),
        new Date(2021, 4, 1),
        new Date(2021, 4, 2),

        // dlhe
        new Date(2021, 4, 7),
        new Date(2021, 4, 8),

        //regatta
        new Date(2021, 4, 29),
        new Date(2021, 4, 30),

        // juniori
        new Date(2021, 5, 5),

        //"Veľká cena Komárna",
        new Date(2021, 5, 12),
        new Date(2021, 5, 13),

        //Pohár SNP
        new Date(2021, 5, 19),
        new Date(2021, 5, 20),

        //Trenčianska regata
        new Date(2021, 5, 26),
        new Date(2021, 5, 27),

        //Novácka päťstovka
        new Date(2021, 6, 3),
        new Date(2021, 6, 4),

        //Samaria Cup & Memoriál V. Gálisa
        new Date(2021, 6, 10),
        new Date(2021, 6, 11),

        //Pohár Interu
        new Date(2021, 6, 24),
        new Date(2021, 6, 25),

        //M SR krátke trate
        new Date(2021, 7, 6),
        new Date(2021, 7, 7),
        new Date(2021, 7, 8),

        //III. KP na MS seniori
        new Date(2021, 7, 28),
        new Date(2021, 7, 29),

        //Pohár Slávie UK - Memoriál Jana Matochu
        new Date(2021, 8, 4),

        //Dunajský maratón
        new Date(2021, 8, 9),

        //M SR maratón
        new Date(2021, 8, 18),

        // Hargašov memoriál
        new Date(2021, 8, 25),

        //Rozlúčkové preteky
        new Date(2021, 9, 2),
    ],
}


//Calendar 
    
    // do konstanty date sa vytvori objekt podla konstruktora Date() tzn. objek obahujuci aktualy datum
    const date = new Date();

    // funkcia renderCalendar
    const renderCalendar = () => {
        
        // nadstavim datum na prvy den v urcenom mesiaci
        date.setDate(1);
        
        let monthDays = document.querySelector(".days");

        // do konstanty lastDate sa nadstavy posledny den aktualneho mesiaca (nulty den buduceho)
        let lastDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate();

        // do konstanty prevLastDay sa nacita posledny den minuleho mesiaca (nulty den aktualneho)
        let prevLastDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDate();

        // do firstDayIndex sa vlozi poradove cislo aktualneho dna v aktualnom tyzdni 0Ne - 6So
        let firstDayIndex = date.getDay();

        // ak sa firstdayindex = 0 tak sa nadstavý na 6 pretoze defautne je 0 nedela ako prvý den ale ja mam pondelok ako prvý deň
        if(firstDayIndex == 0){
            firstDayIndex = 7;
        }

        // do lastDayIndex sa vlozi poradove cislo posledneho dna aktualneho mesiaca v tyzdni 0Ne - 6So (nulty den buduceho)
        let lastDayIndex = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay();
        
        // zostavajuci pocet dni do dokoncenia tydna po skonceni urceneho mesiaca
        let nextDays = 7 - lastDayIndex;

        // do pola nacitam nazvy mesiacov
        let months = [
            "Január",
            "Február",
            "Marec",
            "Apríl",
            "Máj",
            "Jún",
            "Júl",
            "August",
            "September",
            "Október",
            "November",
            "December",
        ];

        // do h3 zapisem nazov mesiaca a rok
        document.querySelector(".date h3").innerHTML = months[date.getMonth()] + " " + date.getFullYear();

        // vytvorenie premennej date (neskor bude pole do ktoreho sa budu vpisovat datumy a nasledne vypisovat na stranku)
        let days = "";

        // pomocne premenne pre rozlisenie preteku od nepreteku
        let p, c, n = 0;

        // do pola date nacitavame datumi minuleho mesiaca na doplnenie zaciatku riadku, dni s pretekmi bg-red
        for (let x = firstDayIndex - 1; x > 0; x--) {
            events.competitionDate.forEach(datum => {
                if(date.getFullYear() == datum.getFullYear() && datum.getMonth() == date.getMonth() - 1){
                    if(prevLastDay - x + 1 == datum.getDate()){
                        days += '<div class="col-span-1 flex justify-center items-center h-9 rounded-lg bg-red-800 opacity-50">' + datum.getDate() + '</div>';
                        p = datum.getDate();   
                   }
                }
            });
            if(prevLastDay - x + 1 != p){
                days += `<div class="prev-date col-span-1 flex justify-center items-center h-9 opacity-50">${prevLastDay - x + 1}</div>`;
            } 
        }

        // aktualny mesiac  dni s pretekmi bg-red
        for(let i = 1; i <= lastDay; i++){
            events.competitionDate.forEach(datum => {
                if(date.getFullYear() == datum.getFullYear() && datum.getMonth() == date.getMonth()){
                    if(i == datum.getDate()){
                        if(datum.getDate() == new Date().getDate() && datum.getMonth() == new Date().getMonth()){
                            days += '<div class="col-span-1 flex justify-center items-center h-9 rounded-lg border-2 border-white bg-red-800">' + datum.getDate() + '</div>';
                            c = datum.getDate();
                        } else{
                            days += '<div class="col-span-1 flex justify-center items-center h-9 rounded-lg bg-red-800">' + datum.getDate() + '</div>';
                            c = datum.getDate();
                        }
                   }
                }
            });
            if(i != c){
                if ( i === new Date().getDate() && date.getMonth() === new Date().getMonth() ) {
                    if(date.getFullYear() === new Date().getFullYear()){
                        days += `<div class="today col-span-1 flex justify-center items-center h-9 border-2 border-white rounded-lg">${i}</div>`;
                        } else {
                            days += `<div class="col-span-1 flex justify-center items-center h-9">${i}</div>`;
                            }
                    } else {
                        days += `<div class="col-span-1 flex justify-center items-center h-9">${i}</div>`;
                        }
            }
        }

        // na doplnenie riadku posledneho tyzdna v mesiaci pouzijeme prve dni z nasledujuceho  dni s pretekmi bg-red
        for (let j = 1; j <= nextDays; j++) {
            events.competitionDate.forEach(datum => {
                if(datum.getFullYear() == date.getFullYear() && datum.getMonth() == date.getMonth() + 1){
                    if(j == datum.getDate()){
                        days += `<div class="next-date col-span-1 flex justify-center items-center h-9 opacity-50 bg-red-800 rounded-lg">${j}</div>`;
                        monthDays.innerHTML = days;
                        n = j;
                    }
                }
            })
            if(n != j){
                days += `<div class="next-date col-span-1 flex justify-center items-center h-9 opacity-50 rounded-lg">${j}</div>`;
                monthDays.innerHTML = days;
            } 
        }
    };

    // ak kliknem na prev tak sa posuniem o jeden mesiac dozadu 
    document.querySelector(".prev").addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });
    
    // ak kliknem na prev tak sa posuniem o jeden mesiac dopredu 
    document.querySelector(".next").addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });
    
    renderCalendar();