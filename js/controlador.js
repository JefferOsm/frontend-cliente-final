
let empresas;
let categories;
let product;
let detalleProducto;

//variables carrito
let carrito;



//Funcionalidad par obtener Restaurantes
const cargarRestaurantes= async()=>{
    const respuesta= await fetch('http://localhost:3000/empresas',{
        method: 'GET',

    })
    empresas= await respuesta.json();
    //console.log("Empresas", empresas) ;
}


const generarRestaurantes = ()=>{
    //LIMPIAR
    document.getElementById('restaurantes').innerHTML= '';
    document.getElementById('contenedor-categorias').style.display='none';
    document.getElementById('contenedorProductos').style.display='none';
    document.getElementById('contenedor-detalle').style.display='none';
    empresas.forEach(function(empresa){
        let estrellas= '';
        for(let i=0; i<empresa.calificacion; i++){
            estrellas+= ' <i class="fa-solid fa-star"></i>';
        }
        for(let i=0; i<(5-empresa.calificacion); i++){
            estrellas+= '<i class="fa-regular fa-star"></i>';
        }

        document.getElementById('restaurantes').innerHTML += 
        ` <div class="tarjeta sombra">
        <img class="tarjeta-logo sombra" src="${empresa.icono}" alt="Burger King">
        <div class="descripcion">
            <div class="descripcion-nombre">${empresa.nombreRestaurante}</div>
            <div class="estrellas my-2">
                ${estrellas}
                <br>
            </div>
            <btn onclick="cargarCategorias('${empresa._id}')" ><i class="fa-solid fa-circle-right"></i></btn>
        </div>
    </div>`;

    });

}

cargarRestaurantes().then(()=>{
    generarRestaurantes();
})

//Fin Restaurantes

//Funcionalidad Obtener y Mostrar Categorias

const cargarCategorias= async(idEmpresa)=>{
    const respuesta= await fetch(`http://localhost:3000/empresas/${idEmpresa}/categorias`,{
        method: 'GET',

    })
    categories= await respuesta.json();
    //console.log("Categorias", categories) ;
    generarCategorias(categories);
}

function generarCategorias(restaurante){
    //Limpiar Restaurantes
    document.getElementById('restaurantes').style.display='none';
    document.getElementById('restaurantes-nav').style.display='none';
    document.getElementById('restaurantes-text').style.display='none';
    document.getElementById('contenedorProductos').style.display='none';
    document.getElementById('contenedorProductos').innerHTML='';
    document.getElementById('categorias').innerHTML='';
    document.getElementById('contenedor-detalle').style.display='none';


    document.getElementById('logoCategoria').innerHTML+=` <img class="restaurante-logo" src="${restaurante.icono}" alt="Logo">`;
    document.getElementById('contenedor-categorias').style.display='block';
    restaurante.categorias.forEach(function(categoria){
        document.getElementById('categorias').innerHTML+=
        ` <div class="categoria-tarjeta sombra">
        <div> <img  class="categoria-tarteja-img sombra" src="${categoria.imagenCategoria}" alt=""> </div>
        <div class="categoria-tarjeta-texto">
            <div class="categoria-textoDescripcion">
                <h3>${categoria.nombreCategoria}</h3>
                <p>${categoria.tipos} Tipos</p>
            </div>
            <div class="categoria-siguiente"><btn onclick="cargarProductos('${categoria._id}','${restaurante._id}')"><i class="fa-solid fa-circle-right"></i></btn></div>
        </div>
    </div>`;
    });
}

//Fin Categorias


//Funcionalidad para obtener y Mostrar Productos
const cargarProductos = async (idCategoria, idEmpresa)=>{
    const respuesta= await fetch(`http://localhost:3000/categorias/${idCategoria}/productos`,{
        method: 'GET',
    })
    product= await respuesta.json()
    generarProductos(product, idEmpresa);
    //console.log('productos', product);
}


 function generarProductos(categoria,empresa){
    //LIMPIAR
    document.getElementById('contenedor-categorias').style.display='none';
    document.getElementById('restaurantes').style.display='none';
    document.getElementById('restaurantes-text').style.display='none';
    document.getElementById('contenedorProductos').style.display='none';
    document.getElementById('contenedor-detalle').style.display='none';
    //CARGAR NAV
    document.getElementById('restaurantes-nav').style.display='block';
    document.getElementById('restaurantes-nav').innerHTML='';
    document.getElementById('restaurantes-nav').innerHTML+=
    `<div><btn onclick="cargarCategorias('${empresa}')"   style="color:#CC7952 ;"><i class="fa-solid fa-circle-arrow-left"></i></btn></div>
    <div style="color:black ;">${categoria.nombreCategoria}</div>
    <button type="button" class="btn btn-cart" data-bs-toggle="modal" data-bs-target="#modal-carrito"><i class="fa-solid fa-cart-shopping" ></i></button>`;
    document.getElementById('restaurantes-nav').style.display='flex';
    //RENDERIZAR
    document.getElementById('contenedorProductos').style.display='block';
    categoria.productos.forEach(function(producto){
        document.getElementById('contenedorProductos').innerHTML+=
        ` <div class="producto-tarjeta">
            <div class="producto-detalle">
                <div class="producto-nombre">${producto.nombreProducto}</div>
                <div class="producto-precio">L.${producto.precio}</div>
            </div>
            <div ><a onclick="cargarDetalleProducto('${producto._id}','${categoria._id}','${empresa}','${categoria.nombreCategoria}')"><img class="producto-imagen" src="${producto.imgProducto}" alt="..."></a></div>
         </div>`;

    });
}
//Fin Productos


//Detalle Productos

const cargarDetalleProducto= async(idProducto, idCategoria, idEmpresa,nombreCategoria)=>{
    const respuesta= await fetch(`http://localhost:3000/productos/${idProducto}`,{
        method: 'GET'
    })
    detalleProducto= await respuesta.json();
    generarDetalleProducto(detalleProducto,idCategoria,idEmpresa,nombreCategoria)
    //console.log(detalleProducto);
    
}


function generarDetalleProducto(producto, categoria, empresa,header){
    //LIMPIAR
    document.getElementById('carrito').innerHTML='';
    document.getElementById('contenedor-categorias').style.display='none';
    document.getElementById('restaurantes').style.display='none';
    document.getElementById('restaurantes-text').style.display='none';
    document.getElementById('contenedorProductos').style.display='none';
    document.getElementById('contenedorProductos').innerHTML='';
    //CARGAR NAV
    document.getElementById('contenedor-detalle').style.display='block';
    document.getElementById('contenedor-detalle').innerHTML='';
    document.getElementById('restaurantes-nav').style.display='block';
    document.getElementById('restaurantes-nav').innerHTML='';
    document.getElementById('restaurantes-nav').innerHTML+=
    `<div><btn onclick="cargarProductos('${categoria}','${empresa}')"   style="color:#CC7952 ;"><i class="fa-solid fa-circle-arrow-left"></i></btn></div>
    <div style="color:black ;">${header}</div>
    <button type="button" class="btn btn-cart" data-bs-toggle="modal" data-bs-target="#modal-carrito" onclick="cargarCompras()" ><i class="fa-solid fa-cart-shopping" ></i></button>`;
    document.getElementById('restaurantes-nav').style.display='flex';

        //Generar Detalle
    document.getElementById('contenedor-detalle').innerHTML+=
    `<img class="producto-d-img" src="${producto.imgProducto}" alt="...">
    <h2 class="my-3">${producto.nombreProducto}</h2>
    <p class="detalle-descripcion">${producto.descripcion}</p>
    
    <div class="detalle-formulario">
        <div class="detalle-cantidad">
            <h3>Cantidad</h3>
            <input type="number" class="form-control form-control-sm detalle-cantidad-n" id="txt-cantidad">
        </div>
        
        <h2 class="detalle-precio">L.${producto.precio}</h2>
    </div>

    <div class="contenedor-botones ">
    <button class="detalle-btn btn">Comprar Ahora</button>
    <button class="detalle-btn btn" onclick="nuevoProducto('${producto._id}','${producto.nombreProducto}','${producto.precio}','${producto.imgProducto}')"  >Agregar al Carrito</button>
    </div>
`;
//Fin detalle Productos


}

//Funciones del carrito
const cargarCompras= async()=>{
    const respuesta= await fetch(`http://localhost:3000/compras`,{
        method: 'GET'
    })
    carrito= await respuesta.json();
    
    console.log('prosuctos', carrito);
    cargarCarrito(carrito);
}

function cargarCarrito(producto){
    let precios=0;
    let cantidad=0;
    let subTotal=0;
    let isv=0;
    let total=0;
    let envio=50;
    producto.forEach(function(item){
        document.getElementById('carrito').innerHTML+=
        `
        <div class="producto-carrito">
            <div ><a href="producto-detalle.html"><img class="producto-carrito-imagen" src="${item.img}" alt="..."></a></div>
            <div class="producto-detalle">
                <div class="producto-nombre-carrito">${item.nombre}</div>
                <div class="producto-cantidad">Cantidad: ${item.cantidad}</div>
            </div>
            <div class="precio-carrito">
                <i class="fa-solid fa-trash" onclick="borrarProducto('${item._id}')"></i>
                <div class="producto-cantidad">L.${item.precio}</div>
            </div>
        </div>
        `;
        console.log(item.precio);
        cantidad+=parseFloat(item.cantidad);
        subTotal+=(parseFloat(item.precio)*parseFloat(item.cantidad));
        console.log('item',precios);
    })

    
    isv=subTotal*0.15;
    total= subTotal+isv+envio;

    document.getElementById('detalle-pedido').innerHTML=
    `
    <h4>SubTotal</h4>
    <h4>L.${subTotal}</h4>
    <h4>ISV</h4>
    <h4>L.${isv}</h4>
    <h4>Envio</h4>
    <h4> L.${envio}</h4>
    <h3>Total</h3>
    <h3>L.${total}</h3>
    `;
}

const nuevoProducto= async(idProducto,nombreProducto,precioProducto,imagenProducto)=>{
    let cantidad= document.getElementById('txt-cantidad').value;
    let compra=
    {
        idProducto: idProducto,
        nombre: nombreProducto,
        precio: precioProducto,
        cantidad: cantidad,
        img:imagenProducto
    }

    const respuesta= await fetch('http://localhost:3000/compras',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(compra)
    }
    )
}


const borrarProducto= async(id)=>{
    const respuesta= await fetch(`http://localhost:3000/compras/${id}`,
    {
        method: 'DELETE'
    }
    );
    document.getElementById('carrito').innerHTML='';
    cargarCompras();
}
const cancelarPedido= async()=>{
    const respuesta= await fetch(`http://localhost:3000/compras`,
    {
        method: 'DELETE'
    }
    );
    document.getElementById('carrito').innerHTML='';
    cargarCompras();
}

