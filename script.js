function verificarIdade() {
    // 1. Captura o valor digitado no campo de input
    const elementoInput = document.getElementById("campoIdade");
    const idadeDigitada = parseInt(elementoInput.value);

    const nome = document.getElementById("campoNome").value;

    // 2. Localiza o elemento onde o texto de resutado sera exibido
    const elementoResultado = document.getElementById
    ("mensagemResultado");

    // 3. Validacao preventiva: impede processamento se o campo estiver em branco
    if (isNaN(idadeDigitada)){ // Not a Number
        elementoResultado.innerText = 'Por favor, digite uma idade numerica valida.';
        elementoResultado.style.color = "#dc2626";
        return;

    } 

    // 4. Tomada de decisao: bifurcacao do fluxo entre maior e menos de idade
    if (idadeDigitada >= 18){
        elementoResultado.innerText = `Olá, ${nome}! Você tem ${idadeDigitada} anos e seu acesso foi liberado com sucesso.`;
        elementoResultado.style.color = "#16a34a";
    }
     
    else if (idadeDigitada < 18){
      elementoResultado.innerText = `Acesso negado para ${nome}: você tem ${idade} anos e ainda não possui a idade mínima permitida.`;
      elementoResultado.style.color = "#d97706";
      console.log(`Verificacao informativa: ${idadeDigitada} anos (menor de idade)`);
      return;
    }

    else if (idadeDigitada < 12){
        elementoResultado.innerText = `${nome} voce e uma crianca`;
        elementoResultado.style.color = "#dc2626";
        return;
    }
    else if (idadeDigitada < 12 && idadeDigitada < 17){
        elementoResultado.innerText = `${nome} voce e um adolecente`;
        elementoResultado.style.color = "#d97706";
        return;
    }

    else if (idadeDigitada < 18 && idadeDigitada < 59){
        elementoResultado.innerText = `${nome} voce e um adulto`
        elementoResultado.style.color = "#16a34a";
        return;
    }

    else if (idadeDigitada < 60){
        elementoResultado.innerText = `${nome} voce pertence a terceira idade`;
         elementoResultado.style.color = "#16a34a";
        return;
    }

}