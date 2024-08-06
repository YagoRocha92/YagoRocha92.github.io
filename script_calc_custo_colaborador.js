 // Função para calcular a variação patrimonial
 function calcularCustoColaborador() {

    const salariobase = parseFloat(document.getElementById('salariobase').value);
    const valetransporte = parseFloat(document.getElementById('valetransporte').value);
    const auxilioalimentacao = parseFloat(document.getElementById('auxilioalimentacao').value);

    const fgts = salariobase/12.5;
    const ferias =  salariobase/12;
    const provisaoAvisoTrab = salariobase * 0.0083;
    const umTercoFerias = salariobase / 36;
    const decimoTerceiro = salariobase / 12;
    const fgtsFerias = salariobase / 150;
    const fgtsUmTercoFerias = salariobase / 454.5;
    const fgtsDecimoTerceiro = salariobase / 150;
    const avisoPrevio = salariobase / 12;
    const fgtsAvisoPrevio = salariobase / 150;
    const multaFgts = salariobase * 0.02;
  
    const custocolab = fgts + ferias + provisaoAvisoTrab + umTercoFerias + decimoTerceiro + fgtsFerias
    + fgtsUmTercoFerias + fgtsDecimoTerceiro;
    
    const totalProvisoes = avisoPrevio + fgtsAvisoPrevio + multaFgts;

    const totalPercentual = (custoTotal/salariobase) * 100;

    const totalPorDia = (custoTotal/30);

    const custoTotal = custocolab + totalProvisoes + valetransporte + auxilioalimentacao;

    const totalPorHora = (custoTotal/220);


    // Atualize o conteúdo das tags 'span' correspondentes com os valores calculados
    document.getElementById('fgts').textContent = fgts.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('ferias').textContent = ferias.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('avisotrabalhado').textContent = provisaoAvisoTrab.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('umtercoferias').textContent = umTercoFerias.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('decimoterceiro').textContent = decimoTerceiro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('fgtsferias').textContent = fgtsFerias.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('fgtsumtercoferias').textContent = fgtsUmTercoFerias.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('fgtsdecimoterceiro').textContent = fgtsDecimoTerceiro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('avisoprevio').textContent = avisoPrevio.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('fgtsavisoprevio').textContent = fgtsAvisoPrevio.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('multafgtsdecimoterceiro').textContent = multaFgts.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('totalprovisoes').textContent = totalProvisoes.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('totalvt').textContent = valetransporte.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('totalva').textContent = auxilioalimentacao.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('totalcustocolab').textContent = custocolab.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('totalDias').textContent = totalPorDia.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
    document.getElementById('totalHora').textContent = totalPorHora.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
    document.getElementById('totalPerc').textContent = totalPercentual.toFixed(2) + '%';
    
    // Adicione os outros campos calculados da mesma forma

    // Atualize o total
    const totalElement = document.getElementById('total');
    totalElement.textContent = custoTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
