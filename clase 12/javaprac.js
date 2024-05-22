// 1)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
/*

function decirNombre(nombre){
    alert ("Hola " + nombre)
}
decirNombre("Luis")

*/

//--------------------------------------------------------------------//

// 2)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta

/*

function saludar(nombre){
    return "Hola " + nombre
}

alert(saludar("Pepe"))

*/

//--------------------------------------------------------------------//

// 3)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b

/*

function sumar (a,b){
    return a + b
}
alert(sumar(3,2))

*/

//--------------------------------------------------------------------//

//4)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b

/*

function sumar (a,b){
    return a - b
}
alert(sumar(10,20))

*/

//--------------------------------------------------------------------//

//5)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null

/*

function calcular (operacion,a,b){
    let sumar = a + b
    let restar= a - b
    if (operacion === "+"){
        return sumar
    }else if (operacion === "-") {
        return restar
    }else {
        return null
    }    
}
console.log(calcular("+",5,5))
console.log(calcular("-",5,5))
console.log(calcular("*",5,5))

*/

        // Otra manera resolver el 5)-----------------------------------//

/*

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function calcular(operacion, a, b) {
    if (operacion === "+") {
        return sumar(a, b);
    } else if (operacion === "-") {
        return restar(a, b);
    } else {
        return null; // Operación no válida
    }
}

console.log(calcular("+", 5, 5)); // Debería imprimir 10
console.log(calcular("-", 5, 5)); // Debería imprimir 0
console.log(calcular("*", 5, 5)); // Debería imprimir null

*/

//--------------------------------------------------------------------//

//6)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola

/*function contarHasta (numero){
    
    for(let i=1;i<=numero;i=i+1)
        console.log(i)
}
contarHasta(5)

*/