
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
gemHoehen.innerText = "Gemessene Höhen: " + hoehenListe.join(' + ')
document.getElementById("hoehen").value = null
}

function entfernenHoehe() {
hoehenListe.pop()
gemHoehen.innerText = "Gemessene Höhen: " + hoehenListe.join(' + ')
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
        ` + " " + "Durchschnittshöhe: " + finalSum.toFixed(2) + "m" }
    
    
}


function berechneErgebnis() {
    var x = document.getElementById("besitzerEingabe").value
    var y = document.getElementById("ortEingabe").value
    var z = document.getElementById("polterEingabe").value

    var ergebnis = document.getElementById("zeilen")
    var breite = document.getElementById("eingabeBreite").value
    var laenge = document.getElementById("laengeEingabe").value
    var faktor = document.getElementById("umrechnungsfaktor").value
    var gemHoehen = document.getElementById("gemHoehen")

    var sum = hoehenListe.reduce((accumulator, currentValue) => {
        return Number(accumulator) + Number(currentValue)
      },0);
      var finalSum = sum/hoehenListe.length


    var raummeter = finalSum * breite * laenge
    var festmeter = raummeter * faktor
    ergebnis.innerHTML += 

    `
    <p id="zeilen"><span id="span">Holz von: ${x} / bei: </mark>${y}</span></p>
    <p id="zeilen"><span id="span2">Polter-Nr.: ${z}</span><br>
    ${gemHoehen.innerText}<br>
    <mark>Durchschnittshöhe: </mark>${finalSum.toFixed(2)} -- <mark>Breite: </mark>${breite} -- <mark>Länge: </mark>${laenge}  =>  <mark>Raummeter: </mark>${raummeter.toFixed(2)} rm -- <mark>Festmeter: </mark>${festmeter.toFixed(2)} fm</p>
    
    `

    hoehenListe.value = null
    document.getElementById("polterEingabe").value = null
    document.getElementById("hoehen").value = null
    document.getElementById("eingabeBreite").value = null
    document.getElementById("massBreite").innerHTML = "Polterbreite: "
    document.getElementById("gemHoehen").innerHTML = "Gemessene Höhen: "
    document.getElementById("laengeEingabe").value = null
    document.getElementById("umrechnungsfaktor").value = null
    document.getElementById("durchschnittHoehe").innerHTML = `
    <img src="imgs/durchschnitt.png" alt="durchschnitt" width="20px">
    ` + " " + "Durchschnittshöhe: "
    document.getElementById("ausgabeMengen").innerHTML = "0.00 Rm / 0.00 Fm"
    hoehenListe.length = 0
}

function polterHinzu() {
    
    var z = document.getElementById("polterEingabe").value

    var ergebnis = document.getElementById("zeilen")
    var breite = document.getElementById("eingabeBreite").value
    var laenge = document.getElementById("laengeEingabe").value
    var faktor = document.getElementById("umrechnungsfaktor").value
    var gemHoehen = document.getElementById("gemHoehen")

    var sum = hoehenListe.reduce((accumulator, currentValue) => {
        return Number(accumulator) + Number(currentValue)
      },0);
      var finalSum = sum/hoehenListe.length


    var raummeter = finalSum * breite * laenge
    var festmeter = raummeter * faktor
    ergebnis.innerHTML += `
    <p id="zeilen"><span id="span2">Polter-Nr.: ${z}</span><br>
    ${gemHoehen.innerText}<br>
    <mark>Durchschnittshöhe: </mark>${finalSum.toFixed(2)} -- <mark>Breite: </mark>${breite} -- <mark>Länge: </mark>${laenge}  =>  <mark>Raummeter: </mark>${raummeter.toFixed(2)} rm -- <mark>Festmeter: </mark>${festmeter.toFixed(2)} fm</p>
    `

    hoehenListe.value = null
    document.getElementById("polterEingabe").value = null
    document.getElementById("hoehen").value = null
    document.getElementById("eingabeBreite").value = null
    document.getElementById("massBreite").innerHTML = "Polterbreite: "
    document.getElementById("gemHoehen").innerHTML = "Gemessene Höhen: "
    document.getElementById("laengeEingabe").value = null
    document.getElementById("umrechnungsfaktor").value = null
    document.getElementById("durchschnittHoehe").innerHTML = `
    <img src="imgs/durchschnitt.png" alt="durchschnitt" width="20px">
    ` + " " + "Durchschnittshöhe: "
    document.getElementById("ausgabeMengen").innerHTML = "0.00 Rm / 0.00 Fm"
    hoehenListe.length = 0
}
 

function generatePDF() {
    var ergebnis = document.getElementById("ergebnis")
    print(ergebnis)
}

function ausgabeMengen(finalSum, breite, laenge, faktor) {

    var breite = document.getElementById("eingabeBreite").value
    var laenge = document.getElementById("laengeEingabe").value
    var faktor = document.getElementById("umrechnungsfaktor").value
    
    var sum = hoehenListe.reduce((accumulator, currentValue) => {
        return Number(accumulator) + Number(currentValue)
      },0);
    
    var finalSum = sum/hoehenListe.length

    var raummeter = finalSum * breite * laenge
    var festmeter = raummeter * faktor

    var mengen = document.getElementById("ausgabeMengen")

    if (faktor == "") {
        return mengen.innerHTML = "0.00 Rm / 0.00 Fm"
    } else {
        return mengen.innerHTML = raummeter.toFixed(2) + " Rm / " + festmeter.toFixed(2) + " Fm"
    }

    

    
}


ausgabeMengen(finalSum = 0, breite = 0, laenge = 0, faktor = 0);