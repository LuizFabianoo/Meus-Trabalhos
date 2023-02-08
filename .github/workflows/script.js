function estação() { 
    let mês = prompt('Digite o mês em extenso (ex: Outubro)')
    let saída = document.querySelector('section#saida')
    let estação
    switch (mês.toUpperCase()) { 
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': 
            estação = 'INVERNO'
            break 
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estação = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estação = 'OUTONO'
            break
        default:
            estação = 'INDEFINIDA'
            break
    }
    saída.innerHTML = `<p>No mês de <strong>${mês}</strong>, estamos na estação <strong>${estação}</strong>.</p>`
}
