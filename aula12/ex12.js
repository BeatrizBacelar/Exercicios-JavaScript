let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora>=0 && hora<=4){
    console.log('Boa madrugada')
}else if (hora>=5 && hora<=12){
    console.log('Bom dia!')
} else if (hora<=18){
    console.log('Boa tarde!')
} else if(hora<=24) {
    console.log('Boa noite')
} 