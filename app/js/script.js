let botonAñadirPais=document.getElementById('add-country');
let botonDoblarDinero=document.getElementById('double');
let botonMostrarMillonarios=document.getElementById('show-millionaires');
let botonOrdenar=document.getElementById('sort');
let botonCalcularTotal=document.getElementById('calculate-wealth');
const contenedor = document.getElementById('contenedor');
let cont=document.getElementById('cont');
let elementoDiv=document.createElement('div');
let contador=0;
 let suma=0;
 suma=3860+ 4870+ 2050+1800+1220+ 14140+ 2870+ 2770+ 2820+ 21440;

 console.log(suma);


let paisesPIB = [
    { nombre: "Alemania", pib: 3860 },
    { nombre: "Japón", pib: 4870 },
    { nombre: "Brasil", pib: 2050 },
    { nombre: "Canadá", pib: 1800 },
    { nombre: "México", pib: 1220 },
    { nombre: "China", pib: 14140 },
    { nombre: "India", pib: 2870 },
    { nombre: "Francia", pib: 2770 },
    { nombre: "Reino Unido", pib: 2820 },
    { nombre: "Estados Unidos", pib: 21440 }
];
let arrayPaises=[];

botonAñadirPais.addEventListener('click', añadirPais);
botonDoblarDinero.addEventListener('click', doblarDinero);
botonMostrarMillonarios.addEventListener('click', mostrarMillonarios);
botonOrdenar.addEventListener('click', ordenar);
botonCalcularTotal.addEventListener('click', calcularTotal);




function añadirPais() {
    numeroAleatorio(min, max);
    for (let i = 0; i < paisesPIB.length; i++) {
        
        arrayPaises.push(paisesPIB[i].nombre);
        arrayPaises.push(paisesPIB[i].pib);
        console.log(arrayPaises);
    }
    
    elementoDiv.innerHTML = `${arrayPaises[contador]}  ${arrayPaises[contador+1]} `;
   contador++;
    contenedor.appendChild(elementoDiv);
    contador++;
}

function doblarDinero(){
    for (let i = 0; i < paisesPIB.length; i++) {
        
        arrayPaises.push(paisesPIB[i].nombre);
        arrayPaises.push(paisesPIB[i].pib);
        console.log(arrayPaises);
    }
    let dinero;
 
    dinero=Integer.parseInt(arrayPaises[contador]*arrayPaises[contador]) ;
    arrayPaises[1]==arrayPaises[1] * arrayPaises[1];
    console.log(arrayPaises);
    contador++;
    contador++;
    elementoDiv.innerHTML = `${arrayPaises[contador+1]}  ${dinero} `;
    contenedor.appendChild(elementoDiv);
}
function mostrarMillonarios(){
}
function ordenar(){
}
function calcularTotal(){

    for (let i = 0; i < paisesPIB.length; i++) {
        
        arrayPaises.push(paisesPIB[i].pib);
        console.log(arrayPaises);
    }
    let total;
    total=arrayPaises[contador]*arrayPaises[contador];
    
    console.log(total);
    contador++;
    contador++;
    elementoDiv.innerHTML = `Dinero total: ${arrayPaises[contador+1]}  ${total} `;
    contenedor.appendChild(elementoDiv);

}
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/* 
function cambiarContenido() {
    const contenedor = document.getElementById('contenedor');

    contenedor.innerHTML = `
    <h2>Nuevo Título</h2>
    <p>Este es el nuevo contenido con <strong>HTML</strong> incluido.</p>
    <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
    </ul>
    `;
} */