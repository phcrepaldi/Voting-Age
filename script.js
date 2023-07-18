
function calc() {
    let ano = parseInt(document.getElementById("ano").value);
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - ano;
    if (document.getElementById("ano").value == "") {
        document.getElementById("principal").style.transition = "all .2s";
        document.getElementById('principal').style.height = '130px';
        document.getElementById("res").style.transition = "opacity 1s";
        document.getElementById('res').style.opacity = '1';
        document.getElementById("res").value = "Por favor digite o ano";
    }
    else if (document.getElementById("ano").value < 1900 || document.getElementById("ano").value > anoAtual) {
        document.getElementById("principal").style.transition = "height .2s";
        document.getElementById('principal').style.height = '130px';
        document.getElementById("res").style.transition = "opacity 1s";
        document.getElementById('res').style.opacity = '1';

        document.getElementById("res").value = "Digite um ano válido";
    }
    else if (idade < 18) {
        document.getElementById("principal").style.transition = "height .2s";
        document.getElementById('principal').style.height = '130px';
        document.getElementById("res").style.transition = "opacity 1s";
        document.getElementById('res').style.opacity = '1';

        document.getElementById("res").value = "Ainda não podes votar";
    } else {
        document.getElementById("principal").style.transition = "all .2s";
        document.getElementById('principal').style.height = '130px';
        document.getElementById("res").style.transition = "opacity 1s";
        document.getElementById('res').style.opacity = '1';
        document.getElementById("res").value = "Parabéns, já podes votar";
    }
}
function cl() {
    document.getElementById("res").style.transition = "opacity .5s";
    document.getElementById('res').style.opacity = '0';
    document.getElementById("ano").value = "";
    document.getElementById("ano").focus();
    document.getElementById("principal").style.transition = "all 1s";
    document.getElementById('principal').style.height = '100px';
}
document.addEventListener("keydown", event => {
    if (event.keyCode == 27) {
        cl();
    }
})

document.addEventListener("keydown", event => {
    if (event.keyCode == 13) {
        calc();
    }
})
