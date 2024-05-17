var besitzer = document.getElementById("besitzer")
var ort = document.getElementById("ort")
var polterNr = document.getElementById("polterNr")

var hoehenListe = []


function newDoc() {
    var x = document.getElementById("besitzerEingabe").value
    var y = document.getElementById("ortEingabe").value
    var z = document.getElementById("polterEingabe").value
    besitzer.innerHTML = "Besitzer: " + x
    ort.innerHTML = "Ort: " + y
    polterNr.innerHTML = "Pol-Nr.: " + z
}

function newBr() {
    var b = document.getElementById("eingabeBreite").value
    document.getElementById("massBreite").innerHTML = "Polterbreite: " + b + "m"
}

function zufuegenHoehe() {
var eingabeHoehe = document.getElementById("hoehen").value
var gemHoehen = document.getElementById("gemHoehen")
hoehenListe.push(eingabeHoehe)
gemHoehen.innerText = "Gemessene Höhen: " + hoehenListe.join(' -- ')
}

function entfernenHoehe() {
hoehenListe.pop()
gemHoehen.innerText = "Gemessene Höhen: " + hoehenListe.join(' -- ')
}

function berechnen() {
        var mittenHoehe = document.getElementById("durchschnittHoehe")
        var sum = hoehenListe.reduce((accumulator, currentValue) => {
            return Number(accumulator) + Number(currentValue)
          },0);
          var finalSum = sum/hoehenListe.length
       
       if (hoehenListe.length === 0) {
          mittenHoehe.innerHTML = `
        <img src="imgs/durchschnitt.png" alt="durchschnitt" width="20px">
        ` + " " + "Durchschnittshöhe: " + "Werte leer!"
    }
    else {
        
        mittenHoehe.innerHTML = `
        <img src="imgs/durchschnitt.png" alt="durchschnitt" width="20px">
        ` + " " + "Durchschnittshöhe: " + finalSum + "m" }
    
    
}


function ergebnis() {
    
}