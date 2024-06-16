const carrito = [
    {
        nombre: 'Ford Raptor',
        id: 1,
        precio:15000,
        cantidad: 5000,
        thumbnail: "https://plan-gobierno.org/wp-content/uploads/2023/11/plan-nacional-Ford-raptor-plan-gobierno--1024x574.png"
    },
    {
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        cantidad: 5,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
    },
    {
        nombre: 'Chevrolet Corsa',
        id: 3,
        precio: parseInt(5000),
        cantidad: 1,
        thumbnail: "https://tn.com.ar/resizer/XG9qKmPd0i1gjxTICwTjk6e_ECA=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/UVDAHVBKNRUK45MWPX22I3D2UA.jpg"
    }
]

const nuevoElemento= {
    nombre: 'Toyota GR86',
    id: 3,
    precio: 100000,
    cantidad: 15,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
}



function buscarElemento(){
    let idConsultado
    let objetoEncontrado = null
for(let i=0;i<carrito.length;i=i+1){
    
    if (carrito[i].id==nuevoElemento.id){
        objetoEncontrado = carrito[i]
        objetoEncontrado.cantidad += nuevoElemento.cantidad
        break
    } 
    
}
    if (objetoEncontrado !== null) {
        
        return objetoEncontrado;
} else {
    carrito.push(nuevoElemento)
        return nuevoElemento;
}
}        

console.log(buscarElemento())

console.log(carrito) 
console.log(carrito.length)
/* if (buscarElemento()){
    console.log("ja de joder")
    carrito.push(nuevoElemento)
} */

const carroHTML=document.getElementById('carrito')
let contenido=""
//console.dir(carroHTML)
for(let i=0;i<carrito.length;i=i+1){
/* let total=0
let valor =carrito.precio
let cant= carrito.cantidad
let suma = valor+cant */
contenido += `
<h2>Modelo ${carrito[i].nombre} </h2>
<p>Identificacion ${carrito[i].id}</p>
<p>Precio ${carrito[i].precio}</p>
<p>Stock ${carrito[i].cantidad}</p>
<img src="${carrito[i].thumbnail}" width="250" > 
`
}
carroHTML.innerHTML= contenido