function operacion(operador){
    while(operador !== "+" && operador !== "-"){
        operador = prompt("El operador ingresado no es válido");
    }
        return operador;
}
function primerNumero(numero1){
    while (!numero1 || isNaN(numero1)) {
        numero1 = prompt("ERROR: Por favor ingresar el primer numero")   
    }
        return numero1
}

    function segundoNumero(numero2){
    while (!numero2 || isNaN(numero2)) {
        numero2 = prompt("ERROR: Por favor ingresar el segundo numero")   
    }
        return numero2
}

    const operador = prompt("Ingresa un operador")
    const validarOperador = operacion(operador);    
    console.log("operador seleccionado es ",  validarOperador)

    const numero1 = prompt("Ingrese el primer numero")
    const validarNum1=primerNumero(numero1)
    console.log("El primer numero: ",validarNum1)

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
        
            //const historialArray=[]
            let historialArray = JSON.parse(localStorage.getItem('historialArray')) || [];

        const objCalculado={
                operacion:"+",//validarOperador,
                primernumero:5,//validarNum1,
                segundoNumero:10,//validarNum2,
                resultadOperacion:15,//resultado,
            }
            historialArray.push(objCalculado)
            
            
            localStorage.setItem('historialArray', JSON.stringify(historialArray))
            console.log("Este es el array historico",historialArray)
            
            let arrayImp = JSON.parse(localStorage.getItem('historialArray'))
            
            for (let i = 0; i < arrayImp.length; i++) {
                let opImp = arrayImp[i];
                console.log(`${i + 1}: ${opImp.primernumero} ${opImp.operacion} ${opImp.segundoNumero} = ${opImp.resultadOperacion}`);
            }
