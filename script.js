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
    "tatuaje", "caravana", "estatua", "siesta", "graffiti", "tienda", "jarabe",
    "jeringuilla", "vela", "grano", "radio", "barco", "queso", "sopa", "café", "muerto",
    "corazón", "destornillador", "martillo", "gafas", "calvo", "ladrón", "buzo", "sombrero",
    "League Of Legends", "Call Of Duty", "televisión", "alarma", "obra", "sello"];

var mainMenu = document.getElementById("mainMenu");
var explicationClassic = document.getElementById("explicationClassic");
var explicationParty = document.getElementById("explicationParty");
var selectPlayers = document.getElementById("selectPlayers");
var showPlayer = document.getElementById("showPlayer");
var showWord = document.getElementById("showWord");
var showImpostor = document.getElementById("showImpostor");
var timeGame = document.getElementById("timeGame");
var finishMenu = document.getElementById("finishMenu");
var instructionsMenu = document.getElementById("instructionsGame");
var showWriter = document.getElementById("showWriter");
var writeWord = document.getElementById("writeWord");

//true = clasicMode - false = partyMode
var typeGame = true;

var playerNames = [];
var playerWords = [];

var word;
var randomWord = 0;
var randomPlayer = 0;
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
    typeGame = true;
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

var btnPartyMode = document.getElementById("btnPartyMode");
btnPartyMode.addEventListener("click", function (event) {
    mainMenu.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    explicationParty.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    typeGame = false;
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

var btnSelectPlayersNext = document.getElementById("btnSelectPlayersNext");
btnSelectPlayersNext.addEventListener("click", function (event) {
    if (document.getElementById("numPlayer").value != "") {
        for (var i = 1; i <= numPlayers; i++) {
            if (document.getElementById("name"+i).value != '') {
                playerNames.push(document.getElementById("name"+i).value);
            } else {
                playerNames.push("Jugador " + i);
            }
        }
        if (typeGame) {
            selectPlayers.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
            showPlayer.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
            
            document.getElementById("name").textContent = playerNames[0].toUpperCase();
            
            randomWord = Math.floor(Math.random() * wordList.length);
            word = wordList[randomWord].toUpperCase();
            document.getElementById("word").textContent = word;
            
            randomPlayer = Math.floor(Math.random() * playerNames.length);
            
            count = 0;
            
            if (impostorDiv.children.length > 3) {
                for (var i = 0; i < 2; i++) {
                    impostorDiv.children[impostorDiv.children.length-1].remove();
                }
            }
        
            btnConfirm.style = "visibility: visible; opacity: 1;";
            btnShowPlayer.style = "visibility: hidden; opacity: 0;";
        } else {
            selectPlayers.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
            showWriter.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
            
            document.getElementById("writerName").textContent = playerNames[0].toUpperCase();
            document.getElementById("writer").textContent = playerNames[0].toUpperCase();

            randomPlayer = Math.floor(Math.random() * playerNames.length);
            
            count = 0;

            if (impostorDiv.children.length > 3) {
                for (var i = 0; i < 2; i++) {
                    impostorDiv.children[impostorDiv.children.length-1].remove();
                }
            }
        
            btnConfirmWriter.style = "visibility: visible; opacity: 1;";
            btnShowWriter.style = "visibility: hidden; opacity: 0;";
        }
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

function deleteChangeBtn() {
    for (var i = 0; i < 3; i++) {
        document.getElementById("wordDiv").children[wordDiv.children.length-1].remove();
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
    if (count == randomPlayer) {
        if (randomPlayer == 0) {
            const br = document.createElement("br");
            const pImpostor = document.createElement("p");
            pImpostor.style = "color: #E32051;";
            pImpostor.textContent = "Mucha suerte, al ser el primero en jugar estás en total desventaja";
            impostorDiv.appendChild(br);
            impostorDiv.appendChild(pImpostor);
        }
        showImpostor.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    } else {
        if (randomPlayer == 1 && typeGame) {
            if (count == 0) {
                createChangeBtn();
            } else if (count == 2) {
                deleteChangeBtn();
            }
        } else if (randomPlayer > 1 && typeGame) {
            if (count == 0) {
                createChangeBtn();
            } else if (count == 1) {
                deleteChangeBtn();
            }
        }
        showWord.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    }
});

function changeWord() {
    var lastRandom = randomWord;
    do {
        randomWord = Math.floor(Math.random() * wordList.length);
    } while (randomWord == lastRandom);
    word = wordList[randomWord].toUpperCase();
    document.getElementById("word").textContent = word;
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
            
            randomPlayer = Math.floor(Math.random() * playerNames.length);
            
            do {
                randomWord = Math.floor(Math.random() * playerWords.length);
            } while (randomWord == randomPlayer);
            
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
    resultWord.innerHTML = word;
    resultImpostor.innerHTML = playerNames[randomPlayer].toUpperCase();
});

var btnReplay = document.getElementById("btnReplay");
btnReplay.addEventListener("click", function (event) {
    finishMenu.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    selectPlayers.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    playerNames.length = 0;
    playerWords.length = 0;
});

var btnExit = document.getElementById("btnExit");
btnExit.addEventListener("click", function (event) {
    finishMenu.style = "visibility: hidden; opacity: 0; z-index: -1; transition: visibility 0.2s, opacity 0.2s linear;";
    mainMenu.style = "visibility: visible; opacity: 1; z-index: 1; transition: visibility 0.5s, opacity 0.5s linear;";
    playerNames.length = 0;
    playerWords.length = 0;
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
        } else if (inputPlayers.value < 4) {
            inputPlayers.value = 4;
        }
        inputPlayers.nextElementSibling.classList.add("filled");
        
        numPlayers = inputPlayers.value;
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