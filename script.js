 // Função para calcular a variação patrimonial
 function calcularVariacaoPatrimonial() {
    const rendimentosTributaveis = parseFloat(formatValue(document.getElementById('rendimentosTributaveis').value));
    const rendimentosIsentos = parseFloat(formatValue(document.getElementById('rendimentosIsentos').value));
    const rendimentosTributacaoExclusiva = parseFloat(formatValue(document.getElementById('rendimentosTributacaoExclusiva').value));
    const deducoesTotais = parseFloat(formatValue(document.getElementById('deducoesTotais').value));
    const bensDireitosX1 = parseFloat(formatValue(document.getElementById('bensDireitosX1').value));
    const bensDireitosX2 = parseFloat(formatValue(document.getElementById('bensDireitosX2').value));
    const dividasX1 = parseFloat(formatValue(document.getElementById('dividasX1').value));
    const dividasX2 = parseFloat(formatValue(document.getElementById('dividasX2').value));
    const doacoes = parseFloat(formatValue(document.getElementById('doacoes').value));

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

function formatCurrency(input) {
    let value = input.value;

    // Remove todos os caracteres que não são dígitos
    value = value.replace(/\D/g, '');

    // Divide por 100 para inserir os centavos
    value = (parseInt(value) / 100).toFixed(2).toString();

    // Substitui ponto por vírgula
    value = value.replace('.', ',');

    // Insere os pontos de milhar
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Adiciona o símbolo de Real
    input.value = 'R$ ' + value;
  }

function formatValue(value) {
    return value.replace(/[^0-9,-]+/g, "").replace(",", ".");
}
