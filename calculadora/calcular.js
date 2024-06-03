const operador = prompt("Ingresa un operador")
const validarOperador = operacion(operador);
function operacion(operador){
    while(operador !== "+" && operador !== "-"){
        operador = prompt("El operador ingresado no es válido");
    }
    return operador;
}
    console.log("operador seleccionado es ",  validarOperador)


    const numero1 = prompt("Ingrese el primer numero")
    const validarNum1=primerNumero(numero1)
function primerNumero(numero1){
    while (!numero1 || isNaN(numero1)) {
        numero1 = prompt("ERROR: Por favor ingresar el primer numero")   
    }
        return numero1
    }

    console.log("El primer numero: ",validarNum1)


    function segundoNumero(numero2){
        while (!numero2 || isNaN(numero2)) {
            numero2 = prompt("ERROR: Por favor ingresar el segundo numero")   
        }
            return numero2
        }
        
        const numero2 = prompt("Ingrese el segundo numero")
        const validarNum2=segundoNumero(numero2)
        
        console.log("El segundo Numero ",validarNum2)
        
        
        let resultado=0
            if(validarOperador=="+"){
                resultado = Number(validarNum1)+Number(validarNum2)
            } else{
                resultado=Number(validarNum1)-Number(validarNum2)
            }
            console.log("El resultado de la operacion   ",resultado)

        
        

