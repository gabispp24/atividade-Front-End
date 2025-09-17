// obtendo dados
let TotalAulasSemestre = parseInt(prompt("informe o totoal de aulas no semestre: "))
let TotalFaltas = parseInt(prompt("informe o total de faltas do aluno: "))
let Nota1 = parseFloat(prompt(" informe a primeira nota: "))
let Nota2 = parseFloat(prompt("informe a segunda nota: "))

// calculo porcentual

let porcentualPresencaAluno = ((TotalFaltas/TotalAulasSemestre)*100).toFixed(2);

if (porcentualPresencaAluno > 25) {
    console.log("o aluno foi reprovado por falta");
}else {
    console.log("aprovado por faltas");
}

// calculando media

let MediaPeriodo = ((Nota1+Nota2)/2);

if (MediaPeriodo >= 7){
    console.log("o aluno foi aprovado")
} else {
    var NotaRecuperacao = parseInt(prompt("digite sua nota de recuperacao :"))
    var MediaPeriodo2 = ((MediaPeriodo + NotaRecuperacao)/2);
    if (MediaPeriodo2 >= 7){
        console.log("aprovado")
    }else {
        console.log("reprovado")
    }
}
console.log(TotalAulasSemestre)
console.log(TotalFaltas)
console.log(porcentualPresencaAluno)
console.log(MediaPeriodo)
console.log(MediaPeriodo2)