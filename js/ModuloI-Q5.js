const aluno = {
    nome: 'Iago',
    notas: [
        { nome: 'Física', valor: 5 },
        { nome: 'estatística', valor: 4 },
        {nome: 'probabilidade', valor: 1 }
    ]
}

notas = aluno.notas
console.log([notas[0].valor, notas[1].valor, notas[2].valor])
console.log(aluno.notas[0].valor)