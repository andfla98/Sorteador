document.getElementById("sortear").addEventListener("click", sortearNumero);

// Função para sortear um número
function sortearNumero() {
    var range = parseInt(document.getElementById("range").value);
    var numeroSorteado = Math.floor(Math.random() * range) + 1;

    // Animação de contagem regressiva
    var countdownElement = document.getElementById("countdown");
    countdownElement.style.display = "block";
    countdownElement.innerHTML = "3";
    setTimeout(function () {
        countdownElement.innerHTML = "2";
        setTimeout(function () {
            countdownElement.innerHTML = "1";
            setTimeout(function () {
                countdownElement.style.display = "none";
                document.getElementById("numero-sorteado").innerHTML = "Número Sorteado: " + numeroSorteado;

                // Atualiza o contador
                var contador = parseInt(document.getElementById("count").innerHTML);
                document.getElementById("count").innerHTML = contador + 1;
            }, 1000);
        }, 1000);
    }, 1000);
}
