/*
//EXOO1
function saudacao(){
    let nome = "guilherme"
    console.log("olá ",nome)
    
}
saudacao()

//EX002
function soma (a,b){
    return a + b
}
console.log(soma(6,5))

//EX003
function maior(a,b){
    if (a > b) {
        return a
    }else{
        return b
}
}
console.log(maior(10,46))

//EX004
function ParOuImpar(numero){
    if(numero % 2 == 0 ){
        return "par"
    }else{
        return "impar"
}

}
console.log(ParOuImpar())
console.log(ParOuImpar())
//EX005
function media(a,b,c){
    return (a+b+c)/3
    
}
console.log(media(90,2,4))

//EXO06
function calculadora(num1, num2, operacao){
    let resultado 
    switch (operacao){
        case "+":
            resultado = num1 + num2
            break
            case "-":
                resultado = num1 - num2
                break
                case "*":
                    resultado = num1 * num2
                    break
                    case "/":
                        resultado = num1 / num2
                        break
                        
                    }
                    return(resultado);
                    
                }
                console.log(calculadora(2,8,"*"));
                
                
//EX007               
let vet = [1,2,3,4,6]
console.log(vet);

//ex008
let v = [10, 20, 30, 40]
let soma = 0
for (let i = 0; i < v.length; i++) {
    soma += v[i]
}
console.log(soma)

//EXX009
let v = [10, 20, 30, 40]
let contador = 0
for (let i = 0; i < v.length; i++) {
    if (v[i] > 20) {
        contador++
    }
}

console.log(contador)
//EX0010
let v = [10, 20, 30, 40]
for (let i = 0; i < v.length; i++) {
    if (v[i] % 2 === 0) {
        console.log(v[i])
    }
}
*/
