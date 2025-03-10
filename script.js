/*
    Página para generar palabras: (https://generadoraleatorio.com/palabras/sustantivos/)
*/

var wordList = ["silla", "mesa", "estantería", "lámpara", "ventilador", "botella",
    "galleta", "hamburguesa", "pan", "freidora", "ordenador", "teclado", "ratón", "móvil",
    "pantalla", "luna", "sol", "estrella", "avión", "autobus", "coche", "tren", "moto",
    "camión", "casco", "auriculares", "isla", "playa", "lobo", "tigre", "león", "elefante",
    "dragón", "dinosaurio", "olas", "segundo", "hormiga", "letra", "cara", "mascota",
    "perro", "gato", "pez", "hilo", "piscina", "templo", "hueso", "sombra", "cebra",
    "caracol", "fantasma", "vampiro", "dormitorio", "cama", "pijama", "almohada",
    "hielo", "metal", "cuadro", "pintura", "pelota", "idioma", "luz", "volante",
    "rueda", "regla", "lapiz", "estuche", "bolígrafo", "tanque", "guerra", "cremallera",
    "chaqueta", "abrigo", "camiseta", "pantalón", "zapato", "calcetín", "cinturón",
    "tabaco", "cigarro", "mechero", "cubata", "fiesta", "polígono", "horóscopo", "cojín",
    "peluche", "tomate", "nuez", "almendra", "banco", "trofeo", "medalla", "universidad",
    "colegio", "instituto", "diploma", "videojuego", "pingüino", "memoria", "residencia",
    "médico", "hospital", "paraguas", "escenario", "teatro", "cine", "estadio", "madre",
    "pera", "plátano", "manzana", "furgoneta", "pie", "estómago", "vaso", "premio", "maleta",
    "mochila", "cristal", "espejo", "copa", "pizza", "flor", "lentejas", "proyector",
    "dentadura", "naranja", "taburete", "bebe", "ajedrez", "cuchara", "tenedor",
    "cuchillo", "pájaro", "casa", "juguete", "pueblo", "ciudad", "músculo", "gimnasio",
    "comedor", "hotel", "calefacción", "presidente", "carta", "tarta", "ventana",
    "formulario", "pollo", "mar", "dinero", "moneda", "billete", "espantapájaros",
    "monitor", "lima", "zoo", "entrenador", "oficina", "jardín", "Egipto", "España",
    "Francia", "Italia", "Grecia", "hipopótamo", "cepillo", "esposa", "boda", "calle",
    "bicicleta", "montaña", "bosque", "campo", "fregadero", "cola", "vestido",
    "almeja", "cangrejo", "escritorio", "buzón", "granja", "conejo", "pluma", "vaca",
    "gigante", "papel", "agua", "alcohol", "fanta", "nestea", "guitarra", "batería",
    "yeti", "fifa", "fortnite", "cactus", "bombilla", "actor", "disco", "canasta",
    "portería", "toro", "vagabundo", "tijera", "trabajo", "mina", "tierra", "sartén",
    "lluvia", "campana", "cerebro", "hada", "árbol", "trébol", "gnomo", "cubo", "zumo",
    "fotografía", "bombero", "policía", "piña", "cabaña", "candelabro", "palmera",
    "tatuaje", "caravana", "estatua", "siesta", "grafiti", "tienda", "jarabe",
    "jeringuilla", "vela", "grano", "radio", "barco", "queso", "sopa", "café", "muerto",
    "corazón", "destornillador", "martillo", "gafas", "calvo", "ladrón", "buzo", "sombrero",
    "League Of Legends", "Call Of Duty", "televisión", "alarma", "obra", "sello"];

var infiltrateWordList = ["sillón", "encimera", "librería", "foco", "abanico", "vaso",
    "tarta", "perrito caliente", "colín", "sartén", "consola", "piano", "puntero", "tablet",
    "televisión", "satélite", "fuego", "planeta", "helicóptero", "tren", "furgoneta", "metro", "triciclo",
    "remolque", "gorra", "altavoz", "peninsula", "río", "perro", "pantera", "leopardo", "rinoceronte",
    "lagarto", "cavernicola", "cascada", "horas", "gusano", "palabra", "nariz", "amigo", "lobo", "pantera",
    "tiburón", "aguja", "playa", "castillo", "músculo", "oscuridad", "preso", "concha", "sábana", "murcielago",
    "salón", "tumbona", "chándal", "esponja", "plástico", "tabla", "escultura", "bolígrafo", "piedra",
    "bandera", "lámpara", "rueda", "botas", "compás", "palo", "mochila", "cartabón", "apisonadora", "paz",
    "botones", "camiseta", "chubasquero", "americana", "camisón", "tacones", "deportiva", "riñonera", "cocaina",
    "porro", "hoguera", "refresco", "despedida de soltero", "taller", "constelación", "almohada", "muñeco",
    "kétchup", "avellana", "nuez", "cajero", "copa", "premio", "colegio", "guardería", "carcel", "pergamino",
    "juego de mesa", "pato", "cerebro", "manicomio", "mecánico", "fábrica", "embudo", "teatro",
    "coliseo", "musical", "anfiteatro", "abuelo", "naranja", "manzana", "melón", "camión", "mano",
    "pulmones", "jarra", "trofeo", "mochila", "maletín", "espejo", "vitrina", "taza", "panini", "hierva",
    "judías", "reproductor", "sacamuelas", "piña", "alzador", "biberon", "parchis", "cazo", "tridente",
    "espada", "halcón", "caja", "figura", "país", "calle", "tejido", "pilates",
    "terraza", "motel", "horno", "palacio", "baraja", "magdalena", "puerta",
    "examen", "ternera", "presa", "tarjeta", "ficha", "cheque", "maniquí",
    "televisión", "cortauñas", "selva", "capitán", "despacho", "pradera", "azteca", "Barcelona",
    "amor", "pizza", "romano", "elefante", "aspiradora", "pulsera", "fiesta", "plaza",
    "moto", "escalada", "jungla", "terreno", "bañera", "fila", "falda",
    "crustaceo", "langosta", "mesa", "correo", "granero", "topo", "flecha", "burro",
    "enano", "cuaderno", "refresco", "cerveza", "zumo", "coca-cola", "bajo", "bombo",
    "monstruo", "regate", "battle royale", "trebol", "lámpara", "humorista", "dvd", "cesta",
    "red", "redbull", "recaudador", "punzón", "director", "cueva", "arena", "olla",
    "nieve", "timbre", "corazón", "bruja", "arbusto", "rosa", "elfo", "contenedor", "batido",
    "cuadro", "policía", "militar", "sandía", "tienda de campaña", "lámpara de techo", "árbol",
    "retrato", "caseta", "fuente", "dormir", "dibujo", "local", "pastillas",
    "pincho", "incienso", "arroz", "spotify", "moto de agua", "leche", "pure", "colacao", "esqueleto",
    "cupido", "llave", "prensa", "gafas de buceo", "peluca", "preso", "submarino", "gorra",
    "Smite", "Counter Strike", "ordenador", "sirena", "construcción", "pegatina"];

var mainMenu = document.getElementById("mainMenu");
var explicationClassic = document.getElementById("explicationClassic");
var explicationInfiltrate = document.getElementById("explicationInfiltrate");
var explicationParty = document.getElementById("explicationParty");
var selectPlayers = document.getElementById("selectPlayers");
var showPlayer = document.getElementById("showPlayer");
var showWord = document.getElementById("showWord");
var showInfiltrate = document.getElementById("showInfiltrate");
var showImpostor = document.getElementById("showImpostor");
var timeGame = document.getElementById("timeGame");
var finishMenu = document.getElementById("finishMenu");
var instructionsMenu = document.getElementById("instructionsGame");
var showWriter = document.getElementById("showWriter");
var writeWord = document.getElementById("writeWord");

// 0 = clasicMode / 1 = infiltrateMode / 2 = partyMode
var typeGame = -1;

var playerNames = [];
var playerWords = [];

var startPlayer = 0;
var round = -1;
var randomOrRound = true;

var word;
var infiltrateWord;
var randomWord = 0;
var buttonFirst = false;

var randomImpostor = 0;
var randomInfiltrateOne = -1;
var randomInfiltrateTwo = -1;
var randomInfiltrateThree = -1;

var numInfiltrates = 0;

var count = 0;

var chronometer = 0;
var timer = 0;
var miliseconds = 0;
var seconds = 0;
var minutes = 0;
var milisecondText = "";
var secondText = "";
var minuteText = "";

/* ------------------------- Button Zone ------------------------- */

var btnClassicMode = document.getElementById("btnClassicMode");
btnClassicMode.addEventListener("click", function (event) {
    mainMenu.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    explicationClassic.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    typeGame = 0;
});

var btnClasicBack = document.getElementById("btnClasicBack");
btnClasicBack.addEventListener("click", function (event) {
    explicationClassic.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    mainMenu.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
});

var btnClasicNext = document.getElementById("btnClasicNext");
btnClasicNext.addEventListener("click", function (event) {
    explicationClassic.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    selectPlayers.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    deleteAll();
    tope = 0;
});

var btnInfiltrateMode = document.getElementById("btnInfiltrateMode");
btnInfiltrateMode.addEventListener("click", function (event) {
    mainMenu.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    explicationInfiltrate.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    typeGame = 1;
});

var btnInfiltrateBack = document.getElementById("btnInfiltrateBack");
btnInfiltrateBack.addEventListener("click", function (event) {
    explicationInfiltrate.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    mainMenu.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
});

var btnInfiltrateNext = document.getElementById("btnInfiltrateNext");
btnInfiltrateNext.addEventListener("click", function (event) {
    explicationInfiltrate.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    selectPlayers.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    deleteAll();
    tope = 0;
});

var btnPartyMode = document.getElementById("btnPartyMode");
btnPartyMode.addEventListener("click", function (event) {
    mainMenu.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    explicationParty.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    typeGame = 2;
});

var btnPartyBack = document.getElementById("btnPartyBack");
btnPartyBack.addEventListener("click", function (event) {
    explicationParty.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    mainMenu.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
});

var btnPartyNext = document.getElementById("btnPartyNext");
btnPartyNext.addEventListener("click", function (event) {
    explicationParty.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    selectPlayers.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    deleteAll();
    tope = 0;
});

var btnRandomOrRound = document.getElementById("btnRandomOrRound");
btnRandomOrRound.addEventListener("change", function (event) {
    if (this.checked) {
        randomOrRound = false; // Rounds
    } else {
        randomOrRound = true; // Random
    }
});

var numAux = 1;

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

var btnSelectPlayersNext = document.getElementById("btnSelectPlayersNext");
btnSelectPlayersNext.addEventListener("click", function (event) {
    if (document.getElementById("numPlayer").value != "") {
        if (numPlayersLast != numPlayers) {
            round = -1;
        }
        if (randomOrRound) {
            startPlayer = getRandomIntInclusive(1, parseInt(numPlayers));
        }
        for (var i = 1; i <= numPlayers; i++) {
            if (randomOrRound) {
                numAux = (startPlayer % (parseInt(numPlayers))) + 1;
                startPlayer++;
            } else {
                numAux = ((i + round) % (parseInt(numPlayers))) + 1;
            }
            if (document.getElementById("name"+ numAux).value != '') {
                playerNames.push(document.getElementById("name"+ numAux).value);
            } else {
                playerNames.push("Jugador " + numAux);
            }
        }
        if (typeGame == 2) {
            selectPlayers.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
            showWriter.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
            
            document.getElementById("writerName").textContent = playerNames[0].toUpperCase();
            document.getElementById("writer").textContent = playerNames[0].toUpperCase();

            randomImpostor = Math.floor(Math.random() * playerNames.length);
            
            count = 0;

            if (impostorDiv.children.length > 3) {
                for (var i = 0; i < 2; i++) {
                    impostorDiv.children[impostorDiv.children.length-1].remove();
                }
            }
        
            btnConfirmWriter.style = "visibility: visible; opacity: 1;";
            btnShowWriter.style = "visibility: hidden; opacity: 0;";
        } else {
            selectPlayers.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
            showPlayer.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
            
            document.getElementById("name").textContent = playerNames[0].toUpperCase();
            
            randomWord = Math.floor(Math.random() * wordList.length);
            word = wordList[randomWord].toUpperCase();
            document.getElementById("word").textContent = word;
            
            randomImpostor = Math.floor(Math.random() * playerNames.length);

            if (typeGame == 1) {
                infiltrateWord = infiltrateWordList[randomWord].toUpperCase();
                document.getElementById("infiltrateWord").textContent = infiltrateWord;

                do {
                    randomInfiltrateOne = Math.floor(Math.random() * playerNames.length);
                } while (randomInfiltrateOne == randomImpostor);

                numInfiltrates = 1;

                if (numPlayers > 6) {
                    do {
                        randomInfiltrateTwo = Math.floor(Math.random() * playerNames.length);
                    } while (randomInfiltrateTwo == randomImpostor || randomInfiltrateTwo == randomInfiltrateOne);

                    numInfiltrates = 2;
                }

                if (numPlayers > 9) {
                    do {
                        randomInfiltrateThree = Math.floor(Math.random() * playerNames.length);
                    } while (randomInfiltrateThree == randomImpostor || randomInfiltrateThree == randomInfiltrateOne || randomInfiltrateThree == randomInfiltrateTwo);
                    
                    numInfiltrates = 3;
                }
            }
            
            count = 0;
            
            if (impostorDiv.children.length > 3) {
                for (var i = 0; i < 2; i++) {
                    impostorDiv.children[impostorDiv.children.length-1].remove();
                }
            }
        
            btnConfirm.style = "visibility: visible; opacity: 1;";
            btnShowPlayer.style = "visibility: hidden; opacity: 0;";
        }
    }

    if (typeGame == 1) {
        if (numInfiltrates == 1) {
            document.getElementById("gameDescriptionTimer").innerHTML = "<span style=\"font-size: 1.3rem;\">Hay <b style=\"color: #fff;\">" + numInfiltrates + "</b> <b style=\"color: #20d6e3;\">INFILTRADO</b></span><br><br>Cuando creáis haber descubierto al <b style=\"color: #E32051;\">IMPOSTOR</b> y a los <b style=\"color: #20d6e3;\">INFILTRADOS</b> pulsar el botón <b>\"Terminar Partida\"</b> para ver los resultados<br><br> Si el <b style=\"color: #E32051;\">IMPOSTOR</b> o algún <b style=\"color: #20d6e3;\">INFILTRADO</b> aún no había sido eliminado ganará él, en caso contrario gana el resto de <b style=\"color: #fff;\">JUGADORES</b>";
        } else {
            document.getElementById("gameDescriptionTimer").innerHTML = "<span style=\"font-size: 1.3rem;\">Hay <b style=\"color: #fff;\">" + numInfiltrates + "</b> <b style=\"color: #20d6e3;\">INFILTRADOS</b></span><br><br>Cuando creáis haber descubierto al <b style=\"color: #E32051;\">IMPOSTOR</b> y a los <b style=\"color: #20d6e3;\">INFILTRADOS</b> pulsar el botón <b>\"Terminar Partida\"</b> para ver los resultados<br><br> Si el <b style=\"color: #E32051;\">IMPOSTOR</b> o algún <b style=\"color: #20d6e3;\">INFILTRADO</b> aún no había sido eliminado ganará él, en caso contrario gana el resto de <b style=\"color: #fff;\">JUGADORES</b>";
        }
    } else {
        document.getElementById("gameDescriptionTimer").innerHTML = "Cuando creáis haber descubierto al <b style=\"color: #E32051;\">IMPOSTOR</b> pulsar el botón <b>\"Terminar Partida\"</b> para ver los resultados<br><br> Si el <b style=\"color: #E32051;\">IMPOSTOR</b> aún no había sido eliminado ganará él, en caso contrario gana el resto de <b style=\"color: #fff;\">JUGADORES</b>";
    }
});

var btnSelectPlayersBack = document.getElementById("btnSelectPlayersBack");
btnSelectPlayersBack.addEventListener("click", function (event) {
    playerList.style = "visibility: hidden; opacity: 0;";
    selectPlayers.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    mainMenu.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
});

var btnShowWriter = document.getElementById("btnShowWriter");
var btnConfirmWriter = document.getElementById("btnConfirmWriter");
btnConfirmWriter.addEventListener("click", function (event) {
    btnConfirmWriter.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    btnShowWriter.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
});

var btnShowPlayer = document.getElementById("btnShowPlayer");
var btnConfirm = document.getElementById("btnConfirm");
btnConfirm.addEventListener("click", function (event) {
    btnConfirm.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    btnShowPlayer.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
});

var wordDiv = document.getElementById("wordDiv");
function createChangeBtn() {
    const br = document.createElement("br");
    const p = document.createElement("p");
    p.innerHTML = "Como eres el primero en ver la palabra, puedes cambiarla pulsando en el botón cambiar, pero <b>disimula porque sabrán que no eres impostor y se estropeará la experiencia de juego</b>";
    p.id = "gameDescription"
    const button = document.createElement("button");
    button.id = "btnChange";
    button.className = "btnConfirm";
    button.textContent = "Cambiar Palabra";
    button.setAttribute('onclick','changeWord()');
    wordDiv.appendChild(br);
    wordDiv.appendChild(p);
    wordDiv.appendChild(br);
    wordDiv.appendChild(button);
}

var infiltrateDiv = document.getElementById("infiltrateDiv");
function createChangeBtnInfiltrate() {
    const br = document.createElement("br");
    const p = document.createElement("p");
    p.innerHTML = "Como eres el primero en ver la palabra, puedes cambiarla pulsando en el botón cambiar, pero <b>disimula porque sabrán que no eres impostor y se estropeará la experiencia de juego</b>";
    p.id = "gameDescription"
    const button = document.createElement("button");
    button.id = "btnChange";
    button.className = "btnConfirm";
    button.textContent = "Cambiar Palabra";
    button.setAttribute('onclick','changeWord()');
    infiltrateDiv.appendChild(br);
    infiltrateDiv.appendChild(p);
    infiltrateDiv.appendChild(br);
    infiltrateDiv.appendChild(button);
}

function deleteChangeBtn() {
    for (var i = 0; i < 3; i++) {
        document.getElementById("wordDiv").children[wordDiv.children.length-1].remove();
    }
}

function deleteChangeBtnInfiltrate() {
    for (var i = 0; i < 3; i++) {
        document.getElementById("infiltrateDiv").children[infiltrateDiv.children.length-1].remove();
    }
}

var playerWord = document.getElementById("playerWord");
btnShowWriter.addEventListener("click", function (event) {
    document.getElementById("writerName").textContent = playerNames[count].toUpperCase();
    playerWord.value = "";
    playerWord.blur();
    playerWord.nextElementSibling.classList.remove("filled");
    showWriter.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    writeWord.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
});

var impostorDiv = document.getElementById("impostorDiv");
btnShowPlayer.addEventListener("click", function (event) {
    showPlayer.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    if (count == randomImpostor) {
        if (randomImpostor == 0) {
            const br = document.createElement("br");
            const pImpostor = document.createElement("p");
            pImpostor.style = "color: #E32051;";
            pImpostor.textContent = "Mucha suerte, al ser el primero en jugar estás en total desventaja";
            pImpostor.id = "gameDescription"
            impostorDiv.appendChild(br);
            impostorDiv.appendChild(pImpostor);
        }
        showImpostor.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    } else {
        if (randomImpostor == 1 && (typeGame == 0 || typeGame == 1)) {
            if (count == 0) {
                createChangeBtn();
                createChangeBtnInfiltrate();
                buttonFirst = true;
            } else if (count == 2) {
                deleteChangeBtn();
                deleteChangeBtnInfiltrate();
                buttonFirst = false;
            }
        } else if (randomImpostor > 1 && (typeGame == 0 || typeGame == 1)) {
            if (count == 0) {
                createChangeBtn();
                createChangeBtnInfiltrate();
                buttonFirst = true;
            } else if (count == 1) {
                deleteChangeBtn();
                deleteChangeBtnInfiltrate();
                buttonFirst = false;
            }
        }
        if (count == randomInfiltrateOne || count == randomInfiltrateTwo || count == randomInfiltrateThree) {
            showInfiltrate.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
        } else {
            showWord.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
        }
    }
});

function changeWord() {
    var lastRandom = randomWord;
    do {
        randomWord = Math.floor(Math.random() * wordList.length);
    } while (randomWord == lastRandom);
    word = wordList[randomWord].toUpperCase();
    document.getElementById("word").textContent = word;

    if (typeGame == 1) {
        infiltrateWord = infiltrateWordList[randomWord].toUpperCase();
        document.getElementById("infiltrateWord").textContent = infiltrateWord;
    }
}

var time = document.getElementById("time");
var refreshIntervalId;

var btnWriteNext = document.getElementById("btnWriteNext");
btnWriteNext.addEventListener("click", function (event) {
    if (document.getElementById("playerWord").value != "") {
        playerWords.push(document.getElementById("playerWord").value);

        writeWord.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
        count++;
        if (count < tope) {
            document.getElementById("writer").textContent = playerNames[count].toUpperCase();
            btnConfirmWriter.style = "visibility: visible; opacity: 1;";
            btnShowWriter.style = "visibility: hidden; opacity: 0;";
            showWriter.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
        } else {
            document.getElementById("name").textContent = playerNames[0].toUpperCase();
            btnConfirm.style = "visibility: visible; opacity: 1;";
            btnShowPlayer.style = "visibility: hidden; opacity: 0;";
            showPlayer.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
            
            randomImpostor = Math.floor(Math.random() * playerNames.length);
            
            do {
                randomWord = Math.floor(Math.random() * playerWords.length);
            } while (randomWord == randomImpostor);
            
            word = playerWords[randomWord].toUpperCase();
            document.getElementById("word").textContent = word;    
            
            count = 0;
        }
    }
});

var btnWordNext = document.getElementById("btnWordNext");
btnWordNext.addEventListener("click", function (event) {
    showWord.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    count++;
    if (count < tope) {
        document.getElementById("name").textContent = playerNames[count].toUpperCase();
        btnConfirm.style = "visibility: visible; opacity: 1;";
        btnShowPlayer.style = "visibility: hidden; opacity: 0;";
        showPlayer.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    } else {
        refreshIntervalId = setInterval(function() {
            timer++;
            miliseconds = timer%100;
            seconds = Math.trunc((timer/100)%60);
            minutes = Math.trunc((timer/100)/60);
            if (miliseconds < 10) {
                milisecondText = "0" + miliseconds;
            } else {
                milisecondText = "" + miliseconds;
            }
            if (seconds < 10) {
                secondText = "0" + seconds;
            } else {
                secondText = "" + seconds;
            }
            if (minutes < 10) {
                minuteText = "0" + minutes;
            } else {
                minuteText = "" + minutes;
            }
            time.innerHTML = minuteText + ":" + secondText + ":" + milisecondText;
            chronometer = time.textContent;
        }, 10);
        timeGame.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    }
});

var btnInfiltrateWordNext = document.getElementById("btnInfiltrateWordNext");
btnInfiltrateWordNext.addEventListener("click", function (event) {
    showInfiltrate.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    count++;
    if (count < tope) {
        document.getElementById("name").textContent = playerNames[count].toUpperCase();
        btnConfirm.style = "visibility: visible; opacity: 1;";
        btnShowPlayer.style = "visibility: hidden; opacity: 0;";
        showPlayer.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    } else {
        refreshIntervalId = setInterval(function() {
            timer++;
            miliseconds = timer%100;
            seconds = Math.trunc((timer/100)%60);
            minutes = Math.trunc((timer/100)/60);
            if (miliseconds < 10) {
                milisecondText = "0" + miliseconds;
            } else {
                milisecondText = "" + miliseconds;
            }
            if (seconds < 10) {
                secondText = "0" + seconds;
            } else {
                secondText = "" + seconds;
            }
            if (minutes < 10) {
                minuteText = "0" + minutes;
            } else {
                minuteText = "" + minutes;
            }
            time.innerHTML = minuteText + ":" + secondText + ":" + milisecondText;
            chronometer = time.textContent;
        }, 10);
        timeGame.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    }
});

var btnImpostorNext = document.getElementById("btnImpostorNext");
btnImpostorNext.addEventListener("click", function (event) {
    showImpostor.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    count++;
    if (count < tope) {
        document.getElementById("name").textContent = playerNames[count].toUpperCase();
        btnConfirm.style = "visibility: visible; opacity: 1;";
        btnShowPlayer.style = "visibility: hidden; opacity: 0;";
        showPlayer.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    } else {
        refreshIntervalId = setInterval(function() {
            timer++;
            miliseconds = timer%100;
            seconds = Math.trunc((timer/100)%60);
            minutes = Math.trunc((timer/100)/60);
            if (miliseconds < 10) {
                milisecondText = "0" + miliseconds;
            } else {
                milisecondText = "" + miliseconds;
            }
            if (seconds < 10) {
                secondText = "0" + seconds;
            } else {
                secondText = "" + seconds;
            }
            if (minutes < 10) {
                minuteText = "0" + minutes;
            } else {
                minuteText = "" + minutes;
            }
            time.innerHTML = minuteText + ":" + secondText + ":" + milisecondText;
            chronometer = time.textContent;
        }, 10);
        timeGame.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    }
});

var resultTime = document.getElementById("resultTime");
var resultWord = document.getElementById("resultWord");
var resultImpostor = document.getElementById("resultImpostor");

function toggleWord() {
    if (typeGame == 1) {
        if (resultWord.textContent == "************") {
            resultWord.innerHTML = word + "<br><span style=\"color: #20d6e3;\">" + infiltrateWord + "</span>";
        } else {
            resultWord.innerHTML = "******<br><span style=\"color: #20d6e3;\">******</span>";
        }
    } else {
        if (resultWord.textContent == "******") {
            resultWord.innerHTML = word;
        } else {
            resultWord.innerHTML = "******";
        }
    }
}

var btnFinish = document.getElementById("btnFinish");
btnFinish.addEventListener("click", function (event) {
    timeGame.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    finishMenu.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    clearInterval(refreshIntervalId);
    timer = 0;
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    resultTime.innerHTML = chronometer;
    resultWord.innerHTML = "******"
    if (typeGame == 1) {
        document.getElementById("pResultInfiltrates").style.padding = "30px 0 5px";
        document.getElementById("resultInfiltrates").style.padding = "5px 0 5px";

        resultWord.innerHTML = "******<br><span style=\"color: #20d6e3;\">******</span>"
        if (numInfiltrates == 1) {
            document.getElementById("pResultInfiltrates").innerHTML = "El infiltrado era:";
            document.getElementById("resultInfiltrates").innerHTML = playerNames[randomInfiltrateOne].toUpperCase();
        } else {
            document.getElementById("pResultInfiltrates").innerHTML = "Los infiltrados eran:";
            if (numInfiltrates == 2) {
                document.getElementById("resultInfiltrates").innerHTML = playerNames[randomInfiltrateOne].toUpperCase() + "<br>" + playerNames[randomInfiltrateTwo].toUpperCase();
            } else {
                document.getElementById("resultInfiltrates").innerHTML = playerNames[randomInfiltrateOne].toUpperCase() + "<br>" + playerNames[randomInfiltrateTwo].toUpperCase() + "<br>" + playerNames[randomInfiltrateThree].toUpperCase();
            }
        }
    } else {
        document.getElementById("pResultInfiltrates").style.padding = "0";
        document.getElementById("resultInfiltrates").style.padding = "0";
    }
    resultImpostor.innerHTML = playerNames[randomImpostor].toUpperCase();
});

var numPlayersLast;

var btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", function (event) {
    showPlayer.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    selectPlayers.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    playerNames.length = 0;
    numPlayersLast = numPlayers;
    randomInfiltrateOne = -1;
    randomInfiltrateTwo = -1;
    randomInfiltrateThree = -1;
    if (buttonFirst == true) {
        deleteChangeBtn();
        deleteChangeBtnInfiltrate();
        buttonFirst = false;
    }
});

var btnResetWriter = document.getElementById("btnResetWriter");
btnReset.addEventListener("click", function (event) {
    showWriter.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    selectPlayers.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    playerNames.length = 0;
    playerWords.length = 0;
    numPlayersLast = numPlayers;
    randomInfiltrateOne = -1;
    randomInfiltrateTwo = -1;
    randomInfiltrateThree = -1;
});

var btnReplay = document.getElementById("btnReplay");
btnReplay.addEventListener("click", function (event) {
    finishMenu.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    selectPlayers.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    playerNames.length = 0;
    playerWords.length = 0;
    round++;
    numPlayersLast = numPlayers;
    randomInfiltrateOne = -1;
    randomInfiltrateTwo = -1;
    randomInfiltrateThree = -1;
});

var btnExit = document.getElementById("btnExit");
btnExit.addEventListener("click", function (event) {
    finishMenu.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    mainMenu.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    playerNames.length = 0;
    playerWords.length = 0;
    round = -1;
    randomInfiltrateOne = -1;
    randomInfiltrateTwo = -1;
    randomInfiltrateThree = -1;
});

var btnInstructions = document.getElementById("btnInstructions");
btnInstructions.addEventListener("click", function (event) {
    mainMenu.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    instructionsMenu.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
});

var btnInstructionBack = document.getElementById("btnInstructionBack");
btnInstructionBack.addEventListener("click", function (event) {
    instructionsMenu.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    mainMenu.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
});

/* ------------------------- Select Players ------------------------- */

const playerList = document.getElementById("players");
const instructions = document.getElementById("instructions");
playerList.style = "visibility: hidden; opacity: 0;";
var numPlayers;
var tope = 0;

function createPlayer(numP, top) {
    for (top; top <= numP; top++) {
        const div = document.createElement("div");
        div.id = top;
        div.className = "inputBox";
        const input = document.createElement("input");
        input.type = "text";
        input.id = "name" + top;
        input.required = true;
        const span = document.createElement("span");
        span.textContent = "Jugador " + top;
        if (top == 1) {
            input.style = "padding: 25px 0 5px";
            span.style = "padding: 25px 0 5px";
        }
        div.appendChild(input);
        div.appendChild(span);
        div.appendChild(document.createElement("i"));
        playerList.appendChild(div);
    }
}

function deletePlayer(numP, top) {
    for (top; top > numP; top--) {
        const element = document.getElementById(top);
        element.remove();
    }
}

function deleteAll() {
    inputPlayers.value = "";
    inputPlayers.blur();
    inputPlayers.nextElementSibling.classList.remove("filled");
    
    var length = playerList.children.length
    if (length != 0) {
        for (var i = 0; i < length; i++) {
            playerList.children[0].remove();
        }
    }
}

var inputPlayers = document.getElementById("numPlayer");
function managePlayerList(){
    if (inputPlayers.value != "") {
        if (inputPlayers.value > 15) {
            inputPlayers.value = 15;
        } else if (inputPlayers.value < 4 && inputPlayers.value != 1) {
            inputPlayers.value = 4;
        } else {
            inputPlayers.value = Math.trunc( inputPlayers.value )
        }
        inputPlayers.nextElementSibling.classList.add("filled");
        
        numPlayers = inputPlayers.value;
        if (numPlayers >= 4 && numPlayers <= 15) {
            if (parseInt(numPlayers) >= tope) {
                tope++;
                createPlayer(parseInt(numPlayers), tope);
                playerList.style = "visibility: visible; opacity: 1; transition: visibility 0.5s, opacity 0.5s linear;";
                tope = parseInt(numPlayers);
            } else if (parseInt(numPlayers) < tope) {
                deletePlayer(parseInt(numPlayers), tope);
                playerList.style = "visibility: visible; opacity: 1; transition: visibility 0.5s, opacity 0.5s linear;";
                tope = parseInt(numPlayers);
            }
        } else {
            deleteAll();
            inputPlayers.value = "1";
            inputPlayers.focus();
            inputPlayers.nextElementSibling.classList.add("filled");
            tope = 0;
        }
    } else {
        inputPlayers.nextElementSibling.classList.remove("filled");
        playerList.style = "visibility: hidden; opacity: 0; transition: visibility 0.5s, opacity 0.5s linear;";
    }
}
    
/* ------------------------- Game ------------------------- */

var inputWords = document.getElementById("playerWord");
function manageWord(){
    if (inputWords.value != "") {
        inputWords.value = inputWords.value.replace(/[^a-zA-ZñÑá-úÁ-Ú]+/, '');
        inputWords.nextElementSibling.classList.add("filled");
    } else {
        inputWords.nextElementSibling.classList.remove("filled");
    }
}