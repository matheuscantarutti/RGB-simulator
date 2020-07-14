window.addEventListener("load", start);

var caixaRgb = document.querySelector(".caixaRgb");

var valorRed = document.querySelector("#valorRed");
var inputRed = document.querySelector("#red");

var valorGreen = document.querySelector("#valorGreen");
var inputGreen = document.querySelector("#green");

var valorBlue = document.querySelector("#valorBlue");
var inputBlue = document.querySelector("#blue");

function start() {
    inputRed.addEventListener("change", showValueR);
    inputGreen.addEventListener("change", showValueG);
    inputBlue.addEventListener("change", showValueB);

    inputRed.addEventListener("change", changeBoxColor);
    inputGreen.addEventListener("change", changeBoxColor);
    inputBlue.addEventListener("change", changeBoxColor);
}

function showValueR() {
    return (valorRed.textContent = inputRed.value);
}

function showValueG() {
    return (valorGreen.textContent = inputGreen.value);
}

function showValueB() {
    return (valorBlue.textContent = inputBlue.value);
}

function changeBoxColor() {
    return (caixaRgb.style.backgroundColor =
        "rgb(" +
        inputRed.value +
        "," +
        inputGreen.value +
        "," +
        inputBlue.value +
        ")");
}
