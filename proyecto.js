let carritoVisible = false;

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', BICI)
}else{
    BICI();
}
//-----------------------------------------------------------------------------------
function BICI(){
    let sumar = document.getElementsByClassName('sumar');
    for(let i=0;i<sumar.length; i++){
        let button = sumar[i];
        button.addEventListener('click',sumar); //SUMAR
    }

    let restar = document.getElementsByClassName('restar');
    for(let i=0;i<restar.length; i++){
        let button = restar[i];
        button.addEventListener('click',restar);//RESTAR
    }

    let boton = document.getElementsByClassName('boton');
    for(let i=0; i<boton.length;i++){
        let button = boton[i];
        button.addEventListener('click', agregarcar);//AGREGAR
    }
}
//-----------------------------------------------------------------------------------
function agregarcar(event){
    let button = event.target;
    let bici = button.parentElement;
    let titulo = bici.getElementsByClassName('bici1')[0].innerText;
    let precio = bici.getElementsByClassName('precio')[0].innerText;
    let imgSrc = bici.getElementsByClassName('bk')[0].src;
    console.log(imgSrc);
    agregarcarro(titulo, precio, imgSrc);
    vistacar();
}
//-----------------------------------------------------------------------------------
function vistarcar(){
    carvista = true;
    let carro1 = document.getElementsByClassName('carro1')[0];
    carro1.style.marginRight = '0';
    carro1.style.opacity = '1';
    let items =document.getElementsByClassName('contenido-bibicletas')[0];
    items.style.width = '60%';
}

//------------------------------------
function agregarcarro(titulo, precio, imgSrc){
    let bici = document.createElement('div');
    bici.classList.add = ('bici');
    let carrito1 = document.getElementsByClassName('carritoarticulo')[0];
    let contenido1 = 
        `<div class="carritoarticulo">
            <img src="${imgSrc}" width="80px" alt="">
            <div class="descripcion">
                <span class="carrotitulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus resta1"></i>
                    <input type="text" value="1" class="carroartic1" disabled>
                <i class="fa-solid fa-plus suma1"></i></div>
                <span class="precio1">${precio}</span>
            </div>
        </div>`
    bici.innerHTML = contenido1;
    carrito1.append(bici);

    let brestaCant = bici.getElementsByClassName('resta1')[0];
    brestaCant.addEventListener('click',restar1);  //RESTAR
    let bsumaCant = bici.getElementsByClassName('suma1')[0];
    bsumaCant.addEventListener('click',sumar1); //SUMAR
    totalcar();
}

function restar1(event){
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carroartic1')[0].value);
    let cantidad = selector.getElementsByClassName('carroartic1')[0].value;
    cantidad--;
    if(cantidad>=1){
        selector.getElementsByClassName('carroartic1')[0].value = cantidad;
        totalcar(); //RESTAR
    }
}

//-----------------------------------------------------------------------------------
function sumar1(event){
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carroartic1')[0].value);
    let cantidad = selector.getElementsByClassName('carroartic1')[0].value;
    cantidad++;
    selector.getElementsByClassName('carroartic1')[0].value = cantidad;
    totalcar(); //AUMENTAR
}

//-----------------------------------------------------------------------------------
function totalcar(){ //seleccIONAR CARRO
    let carritoC= document.getElementsByClassName('carro1')[0];
    let carB = carritoC.getElementsByClassName('carritoarticulo');
    let total = 0;
    
    for(let i=0; i< carB.length;i++){//recorremos articulo carrito total
        let bici = carB[i];
        let precioB = bici.getElementsByClassName('precio1')[0];
        let precio = parseFloat(precioB.innerText.replace('$','').replace('.',''));
        let cantidadC = bici.getElementsByClassName('carroartic1')[0];
        console.log(precio);
        let cantidad = cantidadC.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;
    document.getElementsByClassName('carrototal')[0].innerText = '$'+total.toLocaleString("es") + ",00";
}

