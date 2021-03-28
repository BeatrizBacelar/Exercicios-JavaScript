let num = [5,8,2,9,3]
num[5]= 10
num.push(20001)

console.log(`Nosso vetor é o ${num} com tamanho: ${num.length}`)
console.log(`Veja agora o vetor em ordem crescente: ${num.sort()}`)

/*for (let i=0; i<num.length; i++){
    console.log(`Posição ${i}: ${num[i]}`)
    console.log(' ')
}*/

for (let pos in num){
    console.log(`Posição ${pos}: ${num[pos]}`)
}

// pesquisa o valor dentro do vetor e retorna a posição
pos = num.indexOf(20001)
pos2 = num.indexOf(20)

console.log(`O valor 20001 está na posição ${pos} `)
console.log(`O valor 20 está na posição ${pos2} `)