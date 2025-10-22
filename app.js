function sortear()
{
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(!quantidade && !de && !ate)
    {
        alert("Atenção! Preencha todos os campos.");
        return;
    }

    if (de >= ate)
    {
        alert("Atenção! O campo 'Do número' deve ser menor que o campo 'Até o número'.");
        return;
    }

    let sorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++){
        numero = gerarNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)){
            if (quantidade > (ate - de + 1)) {
                alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
                return;
            }
            numero = gerarNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao();
}

function gerarNumeroAleatorio(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao()
{
    const botaoReiniciar = document.getElementById('btn-reiniciar');
    const botaoSortear = document.getElementById('btn-sortear');

    if (botaoReiniciar.classList.contains('container__botao-desabilitado'))
    {
        botaoReiniciar.removeAttribute('disabled');
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');

        botaoSortear.setAttribute('disabled', true);
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');
    }
    else 
    {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
        botaoReiniciar.setAttribute('disabled', true);

        botaoSortear.removeAttribute('disabled');
        botaoSortear.classList.add('container__botao');
        botaoSortear.classList.remove('container__botao-desabilitado');
    }
}

function reiniciar()
{
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}