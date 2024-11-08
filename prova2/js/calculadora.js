const peso=document.querySelector('#peso')
const altura=document.querySelector('#altura')
const calculate=document.querySelector('#calculate')
const resultado=document.querySelector('#resultado')
const result = document.querySelector("#result")
const estado=document.querySelector('#estado')

calculate.addEventListener('click',calcular)

function calcular(){
    p=peso.value
    a=altura.value
    calculo=p/(a*a)

    if (calculo<18.5){
        estado.textContent = `${calculo.toFixed(2)}`
        resultado.textContent=`Você está magro!`
    }else if (calculo>18.5 & calculo<=25){
        estado.textContent = `${calculo.toFixed(2)}`
        resultado.textContent=`Você está no peso ideal!`
    }else if(calculo>25 & calculo<=30){
        estado.textContent = `${calculo.toFixed(2)}`
        resultado.textContent=`Você está acima do peso!`
    }else if (calculo>30){
        estado.textContent = `${calculo.toFixed(2)}`
        resultado.textContent=`Você está obeso!`
    }


}