const unicodeKatakana = [12450, 12452, 12454, 12456, 12458, 12459, 12460, 12461, 12462, 12463, 12464, 12465, 12466, 12467, 12468, 12469, 12470, 12471, 12472, 12473, 12474, 12475, 12476, 12477, 12478, 12479, 12480, 12481, 12482 , 12484, 12485, 12486, 12487, 12488, 12489, 12490, 12491, 12492, 12493, 12494, 12495, 12496, 12497, 12498, 12499, 12500, 12501, 12502, 12503, 12504, 12505, 125, 12507, 12508, 12509, 12510, 12511, 12512, 12513, 12514 , 12516, 12518 , 12520, 12521, 12522, 12523, 12524, 12525 , 12527, 12528, 12529, 12530, 12531, 12532 , 12535, 12536, 12537, 12538 ]
const answerKatakana = ["A", "I", "U", "E", "O", "KA", "GA", "KI", "GI", "KU", "GU", "KE", "GE", "KO", "GO", "SA", "ZA", "SI", "ZI", "SU", "ZU", "SE", "ZE", "SO", "ZO", "TA", "DA", "TI", "DI", "TU", "DU", "TE", "DE", "TO", "DO", "NA", "NI", "NU", "NE", "NO", "HA", "BA", "PA", "HI", "BI", "PI", "HU", "BU", "PU", "HE", "BE", "PE", "HO", "BO", "PO", "MA", "MI", "MU", "ME", "MO", "YA", "YU", "YO", "RA", "RI", "RU", "RE", "RO", "WA", "WI", "WE", "WO", "N", "VU", "VA", "VI", "VE", "VO"]

let bigSymbol = document.getElementById("bigSymbol");
let result = document.getElementById("result");
let randomNumber = 1;


function getKatakana() {
    randomNumber = Math.floor(Math.random() * (unicodeKatakana.length - 1));
    bigSymbol.innerText = String.fromCharCode(unicodeKatakana[randomNumber]);
    bigSymbol.style.color = "black";
    result.innerText = " ";
}

function nextKatakana() {
    result.innerText = " ";
    getKatakana();
}

function checkKatakana(event) {
    if (event.keyCode == 13) {
        check();
    }
}

function check() {
    let answer = document.getElementById('answer').value;
    if (answer.toUpperCase() == answerKatakana[randomNumber]) {
        bigSymbol.style.color = "green";
        document.getElementById('answer').value = "";
        setTimeout(getKatakana, 500);
    }
    else {
        bigSymbol.style.color = "red";
        result.innerText = "Right answer: " + answerKatakana[randomNumber];
        document.getElementById('answer').value = "";
        setTimeout(getKatakana, 1500);
    }
}

getKatakana();






 

 

