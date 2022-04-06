function verificar() {
    let palavra = document.getElementById('palavra').value;
    let res = document.getElementById('res');

    if (Number(palavra)) return res.innerHTML = 'Não é possível digitar apenas números. Verifique os dados e tente novamente.';

    if(palavra.length < 3) return res.innerHTML = 'Digite no mínimo 3 caracteres (entre apenas letras ou letras e números).'

    if(palavra.length > 40) return res.innerHTML = 'O número máximo de caracteres é 40. Verifique os dados e tente novamente.'

    for (let i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] !== palavra[palavra.length -1 -i]) {
            return res.innerHTML = `A palavra ${palavra} não é um palíndromo.`
        }
    }

    return res.innerHTML = `A palavra ${palavra} é um palíndromo.`
};


document.addEventListener('keydown', function(e){
    if(e.key === "Enter") {
        document.getElementById("verificar").click();
    }
});