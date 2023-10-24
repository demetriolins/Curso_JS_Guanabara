let num = [5,8,2,9,3] //OU PODE USAR O var num = [5,8,2,9,3]
num.push(1) //INCLUI mais um numero no vetor
num.sort() //coloca os números em ORDEM CRESCENTE
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) //Mostra a posição do VETOR
let pos = num.indexOf(8) //vai buscar no vetor onde está o vetor 8
//let pos = num.indexOf(4) : OBS. Quando o valor digitado nao foi encontrado, entao o valor aparece -1
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else{ 
    console.log(`O valor 8 está na posição ${pos}`)
}

//num[5] = 6
//num[6] = 4
//num.length //verifica o TAMANHO do VETOR

//console.log(`Nosso vetor é o ${num}`)


//console.log(num[0],num[3])