const form_c = document.getElementById("form_calc");
const result = document.getElementById("result");
const risk = document.getElementById("risk");

function calc(event) {
    event.preventDefault();
    let peso = parseFloat(document.getElementById("peso").value);
    let altura_u = parseFloat(document.getElementById("altura").value) / 100;

    let imc = (peso / altura_u ** 2).toFixed(2);
    if (isNaN(imc) || imc == null) {
        result.innerHTML = `<strong>Insira informações válidas</strong>`;
    }
    else{
        let type_imc = classi_Imc(imc);
        result.innerHTML = `<strong>Resultado: </strong>${imc}<br>${type_imc}`;
    }
}
function classi_Imc(imc) {
    let classi = ["Você está muito abaixo do peso", "Você está abaixo do peso", "Seu peso está normal", "Você está acima do peso", "Você está com obesidade de grau I", "Você está com obesidade de grau II", "Você está com obesidade de grau III"];
    let type_imc;
    if (imc <= 16.9) type_imc = 0
    else if (imc >= 17 && imc <= 18.4) type_imc = 1
    else if (imc >= 18.5 && imc <= 24.9) type_imc = 2
    else if (imc >= 25 && imc <= 29.9) type_imc = 3
    else if (imc >= 30 && imc <= 34.9) type_imc = 4
    else if (imc >= 35 && imc <= 40) type_imc = 5
    else type_imc = 6

    risk_Imc(type_imc)
    return classi[type_imc];
}
function risk_Imc(type_imc) {
    let type_risk = ["#f3640e", "#ffc000", "#00ac4f", "#ffc000", "#f3640e", "#c60000", "#9e0000"];
    risk.style.backgroundColor = type_risk[type_imc];
}

form_c.addEventListener("submit", calc);
form_c.addEventListener("reset", function() {
    result.innerHTML = "";
    risk.style.backgroundColor = "transparent";
});