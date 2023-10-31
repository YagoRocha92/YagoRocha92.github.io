 // Função para calcular a variação patrimonial
 function calcularVariacaoPatrimonial() {
    const rendimentosTributaveis = parseFloat(document.getElementById('rendimentosTributaveis').value);
    const rendimentosIsentos = parseFloat(document.getElementById('rendimentosIsentos').value);
    const rendimentosTributacaoExclusiva = parseFloat(document.getElementById('rendimentosTributacaoExclusiva').value);
    const deducoesTotais = parseFloat(document.getElementById('deducoesTotais').value);
    const bensDireitosX1 = parseFloat(document.getElementById('bensDireitosX1').value);
    const bensDireitosX2 = parseFloat(document.getElementById('bensDireitosX2').value);
    const dividasX1 = parseFloat(document.getElementById('dividasX1').value);
    const dividasX2 = parseFloat(document.getElementById('dividasX2').value);
    const doacoes = parseFloat(document.getElementById('doacoes').value);

    const totalRendimentosOrigens = rendimentosTributaveis + rendimentosIsentos + rendimentosTributacaoExclusiva;
    const totalAplicacoes = bensDireitosX2 - bensDireitosX1 - dividasX2 + dividasX1 + deducoesTotais + doacoes;
    const rendimentosXAplicacoes = totalRendimentosOrigens - totalAplicacoes;

    const resultElement = document.getElementById('rendimentosXAplicacoes');
    const totalRendimentosOrigensElement = document.getElementById('totalRendimentosOrigens');
    const totalAplicacoesElement = document.getElementById('totalAplicacoes');
    const alertaSonegacao = document.getElementById('alertaSonegacao');

    totalRendimentosOrigensElement.textContent = totalRendimentosOrigens.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    totalAplicacoesElement.textContent = totalAplicacoes.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    if (rendimentosXAplicacoes >= 0) {
        resultElement.textContent = rendimentosXAplicacoes.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        resultElement.classList.remove('negative-result');
        alertaSonegacao.style.display = 'none';
    } else {
        resultElement.textContent = rendimentosXAplicacoes.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        resultElement.classList.add('negative-result');
        alertaSonegacao.style.display = 'block'; // Mostrar o alerta de sonegação
    }
}