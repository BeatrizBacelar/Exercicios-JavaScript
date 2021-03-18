let agora = new Date()
let diaSem =  agora.getDay()
/**
 0 - Domingo
 1 - Segunda
 2 - Terça
 3 - Quarta
 4- Quinta
 5 - Sexta
 6 - Sábado
 */
switch (diaSem){
    case 0: diaSem = 'Domingo'
    break
    case 1: diaSem = 'Segunda-feira'
    break
    case 2: diaSem = 'Terça-feira'
    break
    case 3: diaSem = 'Quarta-feira'
    break
    case 4: diaSem = 'Quinta-feira'
    break
    case 5: diaSem = 'Sexta-feira'
    break
    case 6: diaSem = 'Sábado'
    break
    default: diaSem = 'ERRO!!!!!! Dia inválido'
    break
}
console.log(diaSem)
