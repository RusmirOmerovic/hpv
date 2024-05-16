let haupt_01 = document.getElementById("haupt1")
let haupt_02 = document.getElementById("haupt2")
let haupt_03 = document.getElementById("haupt3")

function newDoc() {
    var x = document.getElementById("wBesitzer").value
    var y = document.getElementById("ort").value
    var z = document.getElementById("polterNr").value
    haupt_01.innerHTML = "Besitzer: " + x
    haupt_02.innerHTML = "Ort: " + y
    haupt_03.innerHTML = "Pol-Nr.: " + z
}

function newBr() {
    var b = document.getElementById("eingabeBreite").value
    document.getElementById("massBreite").innerHTML = "Die Polterbreite ist " + b + " Meter"
}