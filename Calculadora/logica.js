

function sumar() {
    var num1 = document.getElementById("1").value
    var num2 = document.getElementById("2").value
    var resultado_num = parseFloat(num1) + parseFloat(num2)
    document.f1.res.value = resultado_num
}


function restar() {
    var num1 = document.getElementById("1").value
    var num2 = document.getElementById("2").value
    var resultado_num = parseFloat(num1) - parseFloat(num2)
    document.f1.res.value = resultado_num
}

function multiplicar() {
    var num1 = document.getElementById("1").value
    var num2 = document.getElementById("2").value
    var resultado_num = parseFloat(num1) * parseFloat(num2)
    document.f1.res.value = resultado_num
}

function dividir() {
    var num1 = document.getElementById("1").value
    var num2 = document.getElementById("2").value
    var resultado_num = num1/num2
    document.f1.res.value = resultado_num
}


