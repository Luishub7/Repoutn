const lineaComprasHTML=document.getElementById("lineaCompras")
let contador = 1
function btnComprar(){
    lineaComprasHTML.innerHTML=`<button id="compra">Comprar</button> `
    const btnverComprar=document.getElementById("compra")
    btnverComprar.onclick=btnsoperacion
}
function btnsoperacion(){
    lineaComprasHTML.innerHTML=`
    <button id="resta">-</button> 
    ${contador}
    <button id="sumar">+</button> `
    const btnResta=document.getElementById("resta")
    const btnSuma=document.getElementById("sumar")
    btnSuma.onclick=suma
    btnResta.onclick=resta
}
function suma (){
    contador=contador+1
    btnsoperacion()
}
function resta (){

    if(contador=>1){
        contador=contador-1
        btnsoperacion()
    if (contador===0){
        contador=1
        btnComprar()
    }
    }
    }
btnComprar()