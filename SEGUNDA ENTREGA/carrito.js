let carro = []
let elementosComprados = document.createElement ("h2")
elementosComprados.innerText = "Sus elementos comprados son"
document.body.appendChild (elementosComprados)

let TotalCompra = document.createElement("h2");
TotalCompra.innerText = "TOTAL= ";
document.body.appendChild(TotalCompra)

let botonFinalizarCompra = document.createElement("button")
botonFinalizarCompra.innerText = "FINALIZAR COMPRA"
document.body.appendChild(botonFinalizarCompra)

botonFinalizarCompra.onclick = () => {
    const finalprice= TotalCompra.innerText
    alert ("SU COMPRA ESTA FINALIZANDO, DEBE ABONAR $ " + finalprice)
}
   


const productes = [{

    id:1,
    verdura: 'papa',
    precio: 10,
    proveedor: 'colombiano'},
    
    {id:2,
    verdura: 'tomate',
    precio: 20,
    proveedor: 'venezolano'},
 {
    id:3,
    verdura: 'lechuga',
    precio: 30,
    proveedor: 'boliviano'},
  {
    id:4,
    verdura: 'zanahoria',
    precio: 30,
    proveedor: 'brasilero'},
 {
    id:5,
    verdura: 'pepino',
    precio: 50,
    proveedor: 'colombiano'},
{
    id:6,
    verdura: 'calabaza',
    precio: 20,
    proveedor: 'colombiano'},
 {
    id:7,
    verdura: 'huevo',
    precio: 120,
    proveedor: 'colombiano'}]

for (const prod of productes){
let div= document.createElement ("div")
div.innerHTML = `<h3> <b> ID : </b> ${prod.id}</h3> 
<h2> VERDURA: ${prod.verdura}</h2>
<h3> PRECIO= $ ${prod.precio} </h3>
<button id= "${prod.id}"> AGREGAR A LA COMPRA</button>`

document.body.appendChild (div)
document.getElementById (`${prod.id}`).onclick = () => {
    agregarAlCarrito (`${prod.id}`)
}
}

const agregarAlCarrito = (aidi) => {
carro.push (productes [aidi - 1])
console.log (carro)
totalCarrito ()
}

 function totalCarrito () {
let total1 = 0
let prods2 = []
for (const prods of carro) {
    total1 += prods.precio
    console.log (total1)
    prods2.push (prods.verdura)
    elementosComprados.innerText ="USTED QUIERE COMPRAR "+ prods2
}
TotalCompra.innerText = "TOTAL = " + total1

 }
   